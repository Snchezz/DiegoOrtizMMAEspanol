import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LinksComponent } from './links/links.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'links', component: LinksComponent },

  { path: '', redirectTo: '/links', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
