import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';

const routes: Routes = [
  {path: 'heroes', component: HeroListComponent},
   { path: "**", redirectTo: "notfound" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
