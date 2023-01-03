import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules, PreloadingStrategy,NoPreloading} from '@angular/router';

const routes: Routes = [{
  path:"admin",loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//{preloadingStrategy:PreloadAllModules}//)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
