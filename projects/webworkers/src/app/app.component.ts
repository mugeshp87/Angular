import { Component, OnInit } from '@angular/core';
import { generateFibonacci } from './fibonacci';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'webworkers'; 
  worker!:Worker;

  ngOnInit():void{
    console.log(import .meta.url)
    this.#initWorker();
  }

#initWorker(){
if (typeof Worker !== 'undefined') {
  // Create a new
  this.worker = new Worker(new URL('./app.worker', import.meta.url));
  this.worker.onmessage = (evt:MessageEvent) => {
    console.log(`Data Received From Worker:`,evt.data);
  };
  this.worker.onerror= (error)=>{
    console.log('Error MEssage Received From WOrker:',error)
  };
  this.worker.postMessage({action:'generateFibonacci',param:45});
} else {  
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
}

  }
