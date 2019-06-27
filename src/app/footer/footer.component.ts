import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Url } from 'url';
import { AuthServiceService } from '../services/auth-service/auth-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   telegram: string = 'https://t.me/@azrin640';
   profile: User;

  constructor( 
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer,
    private router: Router,
    private profileService: AuthServiceService
  ){ }

  ngOnInit() {

    this.iconRegistry.addSvgIcon( 'whatsapp', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp.svg'));
    this.profileService.profile.subscribe(
       (response: User) => {
         this.profile = response;
       }
    )
  }

  authenticateProduct()
  {
     this.router.navigate(['products/product/strong-arrow/authenticate'], { fragment: 'top' });
  }

  
}
