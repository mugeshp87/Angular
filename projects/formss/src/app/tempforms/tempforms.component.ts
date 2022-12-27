import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempforms',
  templateUrl: './tempforms.component.html',
  styleUrls: ['./tempforms.component.css']
})
export class TempformsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topics=['angular','react','vue']
}
