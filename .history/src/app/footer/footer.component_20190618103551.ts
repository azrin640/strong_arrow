import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) 
  { 
    iconRegistry.addSvgIcon( 'whatsapp', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp.svg'));
  }

  ngOnInit() {
  }

}
