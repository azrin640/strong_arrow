import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { SerialAuthService } from '../services/serial-no/serial-auth.service';
import { Serial } from '../interface/serial';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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
      private auth: SerialAuthService,
      public dialog: MatDialog
   ) { }

   ngOnInit(): void {  
   }

   authenticate() {

      this.auth.authenticateSerial(this.serial.value).subscribe(
         (response: Serial) => {
            console.log(response);
            if(response && response.id){
               
               const dialogRef = this.dialog.open(SerialCheckDialog, {
                  width: '300px',
                  data: response
               })

            }
            else if(response.status == 404) this.exist = response;
         }
      )         
   }
}


// Dialog for the result of checking serial number

@Component({
   selector: 'serial-check-dialog',
   templateUrl: './authenticate-dialog.component.html',
   styleUrls: ['./authenticate.component.scss']
})
export class SerialCheckDialog {

   constructor(
      public dialogRef: MatDialogRef<SerialCheckDialog>,
      @Inject(MAT_DIALOG_DATA) public data:  Serial
   ){}

   onNoClick(): void {
      this.dialogRef.close();
    }
}