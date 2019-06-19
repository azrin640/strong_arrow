import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( 
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ){ }

  ngOnInit() {

    this.iconRegistry.addSvgIcon( 'whatsapp', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp.svg'));
  }

}
