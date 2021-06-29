import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./src/components/input-form/input-form.module').then( m => m.InputFormModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules, scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
