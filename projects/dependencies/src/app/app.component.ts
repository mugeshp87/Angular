import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceService],

})
export class AppComponent {
  title = 'dependencies';
  constructor(service: ServiceService)
  {
    console.log("App component")
  }

}
