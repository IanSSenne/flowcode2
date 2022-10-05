import { BackendWorker } from "./frontend/BackendWorker";

export function initializeWorker(url: string): BackendWorker {
  return new BackendWorker(url);
}
