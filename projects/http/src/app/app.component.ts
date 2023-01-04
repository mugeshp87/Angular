import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService]
})
export class AppComponent {
  title = 'http';
  customers:any;
  constructor(private custservice:HttpService){

    this.custservice.getcustomers().subscribe(data=>{
      console.log(data)
      this.customers=data},(error)=>{
        console.log("Error Occurs",+error)
      })
    }
  }
  

