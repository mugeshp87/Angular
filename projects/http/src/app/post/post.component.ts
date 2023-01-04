import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
name:any;
age:any;
feed:any;
  constructor(private httpser:HttpService) { }

  ngOnInit() {
  }
// addusers(formValue:NgForm)
// {
// console.log(formValue.value)

// const userbody={
//   title: formValue.value.name,
//   body: formValue.value.age,
// };
// console.log(userbody)

// this.httpser.adduser('userbody').subscribe(data=>{
//   console.log(data)
// },(err)=>{
//   console.log("unable to load",+err)
// })
// }
addusers(use:NgForm)
{
this.httpser.adduser(use.value).subscribe();
}
}
