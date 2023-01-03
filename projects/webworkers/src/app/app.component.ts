import { Component, OnInit } from '@angular/core';
import { generateFibonacci } from './fibonacci';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'webworkers'; 
  
  ngOnInit()
  {
    console.log(generateFibonacci(45))
    this.#initWorker();
  }
}
#initWorker(){
if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = (evt:MessageEvent) => {
    console.log(`Data REceived From Worker:`,evt.data);
  };
  this.worker.onerror=()
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
}
