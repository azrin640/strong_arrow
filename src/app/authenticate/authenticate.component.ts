import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { SerialAuthService } from '../services/serial-no/serial-auth.service';
import { Serial } from '../interface/serial';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Review } from '../interface/review';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


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
            const dialogRef = this.dialog.open(SerialCheckDialog, {
               width: '320px',
               data: response
            });
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
export class SerialCheckDialog implements OnInit{

   toReview: boolean = false;
   name =  new FormControl('', Validators.required);
   phone =  new FormControl('', [Validators.required, Validators.minLength(7)]);
   email =  new FormControl('', [Validators.required, Validators.email]);
   review =  new FormControl('', Validators.required);
   savedReview: Review;
   savedReviewSucces: boolean = false;

   constructor(
      public dialogRef: MatDialogRef<SerialCheckDialog>,
      @Inject(MAT_DIALOG_DATA) public data:  Serial,
      private auth: SerialAuthService,
      private snackBar: MatSnackBar,
      private router: Router
   ){}

   ngOnInit()
   {
   }

   reviewForm(): void 
   {
      this.toReview = true;
   }
   submitReview(): void
   {
      this.toReview = true;
      let contact = {
         name: this.name.value,
         phone: this.phone.value,
         email: this.email.value,
         review: this.review.value
      }

      this.auth.saveReview(contact).subscribe(
         (response: Review) => {
            if(response) {
               this.toReview = false;
               this.savedReview = response;
               this.savedReviewSucces = true;
            }
            else this.snackBar.open(response.statusText, 'X', {duration: 1000, panelClass: 'warn'});
         },
         error => this.snackBar.open(error, 'X', {duration: 1000, panelClass: 'warn'})
      )
   }

   reviewSaved()
   {
      this.dialogRef.close();
      this.router.navigate(['']);  
   }

   onNoClick(): void {
      this.dialogRef.close();
      this.router.navigate(['']);      
    }
}