import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { MatSnackBar } from '@angular/material';
import { ProfileService } from '../services/profile-service/profile-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

   profile: User = null;
   location;

  constructor(
      private profileService: ProfileService,
      public snackBar: MatSnackBar,
      private router: Router
  ) { }

  ngOnInit() {

      this.profileService.profile.subscribe(
         (response) => this.profile = response);

      this.profileService.location.subscribe(
         (response: any) => { if(response) this.snackBar.open(`Hello friend from: ${response}`, 'X', { duration: 10000, panelClass: 'gold-theme'})});    }  //

   backToHome()
   { this.router.navigate([''], { fragment: 'top' })  } //

   logOut()
   {  this.profileService.logout() }

}
