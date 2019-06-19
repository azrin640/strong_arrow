import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { IntroComponent } from './home/intro/intro.component';

const routes: Routes = [
  { path: ''                                    , component: HomeComponent          },
  { path: 'products/strong-arrow/authenticate'  , component: AuthenticateComponent  },

  // test
  { path: 'intro', component: IntroComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
