import { parentPort } from "worker_threads";

let sum = 0
for(let i = 0; i < 40_00_00_00_00;i++) {
  sum+=i
}

parentPort.postMessage({result: sum})