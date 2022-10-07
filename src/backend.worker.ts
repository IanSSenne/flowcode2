import * as callTable from "./backend/main";

onmessage = async function <T extends keyof typeof callTable>(e: {
  data: {
    method: T;
    args: Parameters<typeof callTable[T]>;
    callId: number;
  };
}) {
  const { method, args, callId } = e.data;
  if (!callTable[method]) {
    postMessage({
      callId,
      value: new Error(`No method named ${method} found in call table`),
    });
    return;
  }
  // @ts-expect-error
  const result = await callTable[method](...args);
  postMessage({ value: result, callId: callId });
};
postMessage({ value: "ready" });
export {};
