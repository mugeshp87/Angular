import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiprojectionComponent } from './Multiprojection/Multiprojection.component';
import { SingleprojectionComponent } from './Singleprojection/Singleprojection.component';



@NgModule({
  declarations: [						
    AppComponent,
    SingleprojectionComponent,
    MultiprojectionComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
