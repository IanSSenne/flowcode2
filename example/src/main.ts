import "./style.css";
import worker from "../../dist/worker.flowcode.min.js?url";
import * as x from "../../src/main";
console.log(x);
const backendWorker = x.initializeWorker(worker);
// @ts-expect-error
globalThis.backendWorker = backendWorker;
