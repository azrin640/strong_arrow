import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interface/user';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

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
   user: User;

  constructor(
     private authService: AuthService,
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
               let token = localStorage.setItem('token', response.token);
               this.user = response;
            } 
         },
         error => this.snackBar.open(error, 'X', {duration: 10000})
     )
  }

}
