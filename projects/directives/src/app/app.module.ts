import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuiltinComponent } from './builtin/builtin.component';
import { AttributeComponent } from './Attribute/Attribute.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [			
    AppComponent,
      BuiltinComponent,
      AttributeComponent,
      HighlightDirective,
      UnlessDirective
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
