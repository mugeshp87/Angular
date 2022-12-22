import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Multiprojection',
  template: `
  <h1>Multiprojection</h1> 
  Default:
  <ng-content></ng-content>

  Answer:
  <ng-content select="[answer]"></ng-content>
` ,
  styleUrls: ['./Multiprojection.component.css']
})
export class MultiprojectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
