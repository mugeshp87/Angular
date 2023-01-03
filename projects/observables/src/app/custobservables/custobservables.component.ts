import { Component, OnInit } from '@angular/core';
import { CustomobservablesComponent } from '../customobservables/customobservables.component';
@Component({
  selector: 'app-custobservables',
  templateUrl: './custobservables.component.html',
  styleUrls: ['./custobservables.component.css']
})
export class CustobservablesComponent implements OnInit {

  constructor() { 
    constructor() { 
      const check$=new Observable(sub=>{
        sub.next('karthi')
        sub.next('kural')
      })
      check$ .subscribe(x=>{
        console.log("1st",x)
      })
    
      check$.subscribe(x=>{
        console.log("2nd",x)
      })
    }
  }

  ngOnInit() {
  }

}
