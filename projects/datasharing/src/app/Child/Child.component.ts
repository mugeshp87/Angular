import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-Child',
  templateUrl: './Child.component.html',
  styleUrls: ['./Child.component.css']
})
export class ChildComponent implements OnChanges {

  constructor() { }

  ngOnChanges() {
    changes:SimpleChange
  }
 @Input() item='';
}
