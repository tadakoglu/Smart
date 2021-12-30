import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', loadChildren: () => import('./home/home.module').then(c => c.HomeModule), canActivate: [] },
  { path: '**', pathMatch: 'full', redirectTo: '/' } /* We can also develop a 404 handler page */
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
