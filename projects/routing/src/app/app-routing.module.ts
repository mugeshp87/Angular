import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondcomponetComponent } from './secondcomponet/secondcomponet.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ImageComponent } from './image/image.component';
const routes: Routes = []
;

@NgModule({
  imports: [RouterModule.forRoot([{path:'first component',title:'FIRST',component:FirstComponent},
    {path:'second component',title:'SECOND',component:SecondcomponetComponent},
    {path:'image',component:ImageComponent},
    { path: '',   redirectTo: '/second component',pathMatch:'full' },
    {path:'**',component:PagenotfoundComponent}])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
