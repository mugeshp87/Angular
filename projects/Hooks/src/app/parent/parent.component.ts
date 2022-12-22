import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges {
 ischild=false;
 name='';
  constructor() {
    console.log("this is parent component.....")
   }

  ngOnInit():void{
    console.log("this is parent oninit.....")
  }
togglechild()
{
  this.ischild=!this.ischild;
}
ngOnChanges(changes: SimpleChanges): void {
  console.log("parent changes")
}
}
