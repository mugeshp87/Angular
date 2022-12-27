import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin',
  templateUrl: './builtin.component.html',
  styleUrls: ['./builtin.component.css']
})
export class BuiltinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isclass=true;
  value=true;
  condition=false;
  items=['mobile','laptop','tablet'];
  mnc="aspire";
}
