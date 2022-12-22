import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './Child/Child.component';
import { ChtoparComponent } from './chtopar/chtopar.component';

@NgModule({
  declarations: [				
    AppComponent,
      ChildComponent,
      ChtoparComponent,
      ChildComponent,
      ChtoparComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
