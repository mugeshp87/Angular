import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondcomponetComponent } from './secondcomponet/secondcomponet.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
{path:'first component',title:'FIRST',component:FirstComponent},
{  path:'second component',title:'SECOND',component:SecondcomponetComponent}
  ,{ path: '',   redirectTo: '/SecondcomponetComponent', pathMatch: 'full' }
  ,{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
