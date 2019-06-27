import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service/auth-service.service';
import { User } from '../interface/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   profile: User = null;

  constructor(
     private authService: AuthServiceService,
     public snackBar: MatSnackBar
   ) {  }

  ngOnInit() {

      this.authService.profile.subscribe(
         (response: User) => {
            this.profile = response;
         },
         error => this.snackBar.open('Please login to access this page.', 'X', { duration: 10000, panelClass: 'red-theme'})
      )
  }

  logOut(){

      this.authService.logout();

  }

}
