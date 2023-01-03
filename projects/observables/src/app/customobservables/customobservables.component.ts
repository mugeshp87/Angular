import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustObservable } from './CustObservable';
@Component({
  selector: 'app-customobservables',
  templateUrl: './customobservables.component.html',
  styleUrls: ['./customobservables.component.css']
})
export class CustomobservablesComponent {

  constructor() { 
    const check$=new CustObservable(sub=>{
      sub.next('karthi')
      sub.next('kural')
    })
    check$ .subscribe(x=>{
      console.log("1st",x)
    })
  
    check$.subscribe(x=>{
      console.log("2nd",x)
    })
 

  //   const test$=new Observable(sub=>{
  //     sub.next('mugi')
  //     sub.next('amar')
  //   })
  //   test$ .subscribe(x=>{
  //     console.log("1st",x)
  //   })
  
  //   test$.subscribe(x=>{
  //     console.log("2nd",x)
  //   })
  // }
   

  // ngOnInit() {
  // }
  }

}

