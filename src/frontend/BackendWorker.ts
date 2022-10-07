export class BackendWorker {
  worker: Worker;
  private ready: boolean = false;
  private callId = 0;
  private callCache = new Map<number, (value: any) => void>();
  private callQueue: any[] = [];
  constructor(url: string) {
    this.worker = new Worker(url);
    this.worker.onmessage = (event) => {
      if (event.data.value === "ready") {
        this.ready = true;
        this.bind();
      }
    };
  }
  private bind() {
    this.worker.onmessage = (event) => {
      const handler = this.callCache.get(event.data.callId);
      if (handler) handler(event.data.value);
      else throw new Error("No handler found for call ID " + event.data.callId);
    };
    this.callQueue.forEach((call) => {
      this.worker.postMessage(call);
    });
  }
  private dispatchCall(method: string, args: any[]) {
    this.callId++;
    let ID = this.callId;
    if (this.ready) {
      return new Promise((resolve) => {
        this.callCache.set(ID, resolve);
        this.worker.postMessage({
          method: method,
          args: args,
          callId: ID,
        });
      }).then((value) => {
        if (value instanceof Error) throw value;
        this.callCache.delete(ID);
        return value;
      });
    } else {
      return new Promise((resolve) => {
        this.callQueue.push({
          method: method,
          args: args,
          callId: ID,
        });
        this.callCache.set(ID, resolve);
      }).then((value) => {
        this.callCache.delete(ID);
        return value;
      });
    }
  }
  addOne(value: number) {
    return this.dispatchCall("addOne", [value]);
  }
}
