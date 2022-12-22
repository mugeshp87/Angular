import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chtopar',
  templateUrl: './chtopar.component.html',
  styleUrls: ['./chtopar.component.css']
})
export class ChtoparComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Output() Event=new EventEmitter<string>();

addNewItem(value:string)
{
  this.Event.emit(value)
}
}
