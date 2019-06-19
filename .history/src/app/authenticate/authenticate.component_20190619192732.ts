import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { SerialAuthService } from '../services/serial-no/serial-auth.service';
import { Serial } from '../interface/serial';


@Component({
        selector: 'app-authenticate',
        templateUrl: './authenticate.component.html',
        styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

        
   serial =  new FormControl('', Validators.required);
   product: Serial;
   exist: Serial;

   constructor(
      private auth: SerialAuthService
   ) { }

   ngOnInit(): void {  
   }

   authenticate() {

      this.auth.authenticateSerial(this.serial.value).subscribe(
         (response: Serial) => {
            console.log(response);
            if(response && response.id) this.product = response;
            else if(response.status == 404) this.exist = response;
         }
      )

         
   }

}
