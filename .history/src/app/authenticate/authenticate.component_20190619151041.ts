import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
        selector: 'app-authenticate',
        templateUrl: './authenticate.component.html',
        styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

        
   serial =  new FormControl('', Validators.required);

   constructor(
   ) { }

   ngOnInit(): void {  
   }

   authenticate() {
         console.log(this.serial);
   }

}
