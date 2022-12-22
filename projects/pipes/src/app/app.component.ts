import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
todaydate=Date.now();
birthday=new Date(2001,6,10)
amount=10000;
string1="hello muguesh and amarnath"
string2="HELLO ROCKY AND KC PRASANTH"
number1=134.043;
number2=56.132423536;
}
