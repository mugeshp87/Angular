import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
    console.log("this is injector")
   }
   log(){ 
  console.log("hello");
   }
  
}
