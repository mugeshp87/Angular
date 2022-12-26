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
  @ViewChild('cform')
  course!: NgForm;
  onSubmit(form: NgForm) {
    console.log("Course Name is : " + form.value.courseName);
    console.log("Course Desc is : " + form.value.courseDesc);
    console.log("Course Amount is : " + form.value.courseAmount);    
    }
  
onClear()
{
  this.course.reset()
}
}
