import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Url } from 'url';
import { User } from '../model/user';
import { ProfileService } from '../services/profile-service/profile-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   telegram: string = '';
   profile: User;
   agents = [
      { country: 'malaysia', telegram: 'strongarrowmalaysia'},
      { country: 'singapore', telegram: 'neezamhm'}
   ];
   location: string;


  constructor( 
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer,
    private router: Router,
    private profileService: ProfileService
  ){ }

  ngOnInit() {
      this.profileService.profile.subscribe((response: User) => this.profile = response);
      this.profileService.location.subscribe(response => {
         if(response) {
            this.location = response;
            this.telegram = this.agents.reduce((acc, value) => {
               if(value.country = response) var telegram = value.telegram;
               acc = telegram;
               return acc;  
            }, ''); }
         else this.telegram = this.agents.reduce((acc, value) => {
            if(value.country = 'malaysia') var telegram = value.telegram;
            acc = telegram;
            return acc }, ''); });
   }

  authenticateProduct()
  {
     this.router.navigate(['products/product/strong-arrow/authenticate'], { fragment: 'top' });
  }  
}
