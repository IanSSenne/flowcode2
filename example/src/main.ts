import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import worker from "../../dist/worker.flowcode.js?url";
import * as x from "../../src/main";
console.log(x);
x.initializeWorker(worker);
