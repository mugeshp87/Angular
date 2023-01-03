import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-callobser',
  templateUrl: './callobser.component.html',
  styleUrls: ['./callobser.component.css']
})
export class CallobserComponent implements OnInit {

  constructor() {
    const check$=new CustObservable()
   }

  ngOnInit() {
  }

}
