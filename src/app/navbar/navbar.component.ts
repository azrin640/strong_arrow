import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../interface/user';
import { MatSnackBar, MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { ProfileService } from '../services/profile-service/profile-service.service';


@Component({
  selector: 'app-navbar',
  template: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   profile: User = null;
   location: string;

  constructor(
     private profileService: ProfileService,
     public snackBar: MatSnackBar,
     public bottomSheet: MatBottomSheet
   ) {  }

  ngOnInit() {
      
      this.profileService.profile.subscribe(
         (response: User) => {            
            this.profile = response;
         },
         error => this.snackBar.open('Error: ' + error, 'X', { duration: 10000, panelClass: 'red-theme'})
      );

      console.log(this.profile);

      // this.profileService.location.subscribe(
      //    (response: any) => {
      //       let location: User['location'] = response as User['location'];
      //       if(!location){

      //          let data = {
      //             title: 'Unable to detect your country location',
      //             content: 'We are unable to detect your country location in order to suggest your local sale representatives.This usually happen if you disable your  devices location service. However you can contact us for any question or you need additional information.'
      //          };
      //          let openBottomSheet = this.bottomSheet.open(NavbarBottomSheet, { panelClass: 'red-theme', data });
      //          let bottomSheetRef = openBottomSheet;
      //       }
      //       else{

      //          let data = {
      //                title: ` Welcome friend from ${response.country}`,
      //                content: `We detected you are from ${response.country}. On the website footer, please find the Telegram contact button for your nearest Strong Arrow representative if you neeed further information or you have any question.`
      //          };
      //          let openBottomSheet = this.bottomSheet.open(NavbarBottomSheet, { panelClass: 'red-theme', data });
      //          let bottomSheetRef = openBottomSheet;
      //       }
      //    },
      //    error => {
      //       console.log(error);
      //       let data = {
      //                      title: 'Unable to detect your country location',
      //                      content: 'We are unable to detect your country location in order to suggest your local sale representatives.This usually happen if you disable your  devices location service. However you can contact us for any question or you need additional information.'
      //       };
      //       let openBottomSheet = this.bottomSheet.open(NavbarBottomSheet , { panelClass: 'red-theme', data: data });
      //       let bottomSheetRef = openBottomSheet;
      //    }
      // );
  }

//   logOut(){
//       this.profileService.logout();
//   }

}


// @Component({
//    selector: 'navbar-bottom-sheet',
//    templateUrl: './bottom-sheet/navbar-bottom-sheet.html',
//    styleUrls: ['./navbar.component.scss']
//  })
//  export class NavbarBottomSheet implements OnInit {
 
//    constructor(
//        private bottomSheetRef: MatBottomSheetRef<NavbarBottomSheet>,
//        @Inject (MAT_BOTTOM_SHEET_DATA) public data: any
//    ) { }
 
//    ngOnInit() {
//    }
 
//  }
 