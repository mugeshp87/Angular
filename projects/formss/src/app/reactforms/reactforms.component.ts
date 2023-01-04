import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { password } from './verify.validation';

@Component({
  selector: 'app-reactforms',
  templateUrl: './reactforms.component.html',
  styleUrls: ['./reactforms.component.css'],
})
export class ReactformsComponent implements OnInit {
 public loginForm:FormGroup|any;
  constructor(private fb:FormBuilder,private http:HttpClient) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', name],

      password: ['', password],
    });
  }
}
