import { NgModule } from '@angular/core';  // Import NgModule here
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Add this import
import {  Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'heroes', component: HeroListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  { path: "**", redirectTo: "notfound" },

];

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
