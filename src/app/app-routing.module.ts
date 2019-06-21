import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products/product/strong-arrow/authenticate', component: AuthenticateComponent },
  

  // User routes
  { path: 'login', component: LoginComponent },

  // Wildcard routes
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes, { anchorScrolling: 'enabled'} )
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
