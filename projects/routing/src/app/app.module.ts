import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondcomponetComponent } from './secondcomponet/secondcomponet.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ImageComponent } from './image/image.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [					
    AppComponent,
      FirstComponent,
      SecondcomponetComponent,
      PagenotfoundComponent,
      ImageComponent,
      ThirdComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
