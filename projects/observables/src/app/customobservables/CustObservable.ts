import { Observable } from "rxjs"
export class CustObservable{
  
  subscribers =[]
    constructor(sub:){
        sub(this);

    }

    subscribe(method){
        this.subscribers.push(method)
    }
    next(value){
        console.log(value);
        this.subscribers.forEach (x=>{
            x(value);
        })
    }
}
