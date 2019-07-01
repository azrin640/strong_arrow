import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { LoginComponent } from './user/login/login.component';
import { AdminSerialComponent } from './admin/admin-serial/admin-serial.component';
import { AdminAuthGuardService } from './services/admin-auth-guard/admin-auth-guard.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { ContactFormComponent } from './footer/contact-form/contact-form.component';
import { AdminMessageComponent } from './admin/admin-message/admin-message.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactFormComponent},
  { path: 'products/product/strong-arrow/authenticate', component: AuthenticateComponent },
  

  // User routes
  { path: 'login', component: LoginComponent },

  // Admin routes
  { path: 'admin/serial', component: AdminSerialComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
  { path: 'admin/message', component: AdminMessageComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },

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
