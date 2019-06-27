import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interface/user';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', Validators.required)
   });

   @Output() isLoggedIn = new EventEmitter<Boolean>();

  constructor(
     private authService: AuthService,
     private profileService: AuthServiceService,
     public snackBar: MatSnackBar,
     private router: Router
  ) { }

  ngOnInit() {

  }

  login()
  {
     this.authService.login(this.loginForm.value).subscribe(
         (response: User) => {
            if(response && response.id){

               localStorage.setItem('token', response.token);
               this.profileService.ngOnInit();
               this.router.navigate(['/admin/serial']);
               this.snackBar.open('Login successful, You are currently logged in', 'X', { duration: 10000, panelClass: 'gold-theme'} );         
               
            } 
         },
         error => this.snackBar.open(error, 'X', { duration: 10000, panelClass: 'red-theme' })
     )
  }

}
