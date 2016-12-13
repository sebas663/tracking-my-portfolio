import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './services/auth/auth.guard.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  //{ path: 'signup', component: Signup },
  //{ path: 'home',   component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home',   component: HomeComponent },
  { path: '**',     component: LoginComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard, ...AUTH_PROVIDERS
  ]
})
export class AppRoutingModule {}
