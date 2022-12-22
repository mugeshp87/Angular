import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShadowComponent } from './Shadow/Shadow.component';
import { NoEncapsulationComponent } from './NoEncapsulation/NoEncapsulation.component';
import { EmulatedEncapsulationComponent } from './EmulatedEncapsulation/EmulatedEncapsulation.component';

@NgModule({
  declarations: [								
    AppComponent,
      ShadowComponent,
      NoEncapsulationComponent,
      EmulatedEncapsulationComponent,
   ]
,
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
