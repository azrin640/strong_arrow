import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { SerialAuthService } from '../services/serial-no/serial-auth.service';


@Component({
        selector: 'app-authenticate',
        templateUrl: './authenticate.component.html',
        styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

        
   serial =  new FormControl('', Validators.required);

   constructor(
      private auth: SerialAuthService
   ) { }

   ngOnInit(): void {  
   }

   authenticate() {

      this.auth.authenticateSerial(this.serial.value).subscribe(
         (response: any) => {
            console.log(response);
         }
      )

         
   }

}
