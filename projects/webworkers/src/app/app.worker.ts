/// <reference lib="webworker" />
import { generateFibonacci } from "./fibonacci";
addEventListener('message', (evt) => {
  console.log('worker got message',evt)
  const response = generateFibonacci(evt.data.param);
  postMessage(response);
});
