import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondcomponetComponent } from './secondcomponet/secondcomponet.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ImageComponent } from './image/image.component';
import { ThirdComponent } from './third/third.component';
const routes: Routes = [{path:'firstcomponent',title:'FIRST',component:FirstComponent},
{path:'secondcomponent',title:'SECOND',component:SecondcomponetComponent,
children:[
  {
    path:'child',component:FirstComponent,
  }
],
},
{path:'image',component:ImageComponent,
children:[
  {
    path:'child',component:ThirdComponent,
  }
]
},
{ path: '',   redirectTo: '/secondcomponent',pathMatch:'full' },
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
