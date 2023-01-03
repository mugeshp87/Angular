import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

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
  UserModule=new User('mugesh',88778,'muges@gmail.com','muthu','vdm','tn',614809,'angular','orning',true);
}
