import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
     <nav [style]="navStyle">
    <a [style.color]="anchor1">Home</a>
    <a [style.color]="anchor2">Aboutus</a>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Attributebind';
  navStyle="background-color:lightgrey;height:400px"
  anchor1='pink'
  anchor2='violet'
}
