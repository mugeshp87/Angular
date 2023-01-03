import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomobservablesComponent } from './customobservables/customobservables.component';
import { CallobserComponent } from './callobser/callobser.component';

@NgModule({
  declarations: [		
    AppComponent,
      CustomobservablesComponent,
      CallobserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
