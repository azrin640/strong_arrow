(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n        <app-navbar></app-navbar>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authenticate/authenticate-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authenticate/authenticate-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"top\">\n\n   <div mat-card class=\"card__image\">\n      <img mat-card-image src=\"assets/images/logo.png\">         \n   </div>\n\n   <mat-card-content>\n\n      <div class=\"card__content\" *ngIf=\"data && data.id && !toReview && !savedReviewSucces\">\n         <h1 class=\"card__content-header\">Congratulation!</h1>\n         <p>\n            You have purchase an <strong>Original <span class=\"brand\">STRONG ARROW®️</span></strong>  product as below listed detail;\n         </p>\n         <mat-chip-list class=\"mat-chip-list-stacked\"  aria-label=\"Color selection\">\n               <mat-chip color=\"primary\" selected>Serial no : {{ data.serial }} </mat-chip>\n               <mat-chip color=\"primary\" selected>Market    : {{ data.market | titlecase}} </mat-chip>\n               <mat-chip color=\"primary\" selected>No of try : {{ data.authNo }} </mat-chip>\n         </mat-chip-list>\n      </div>\n\n      <div class=\"card__content\" *ngIf=\"data.status == 404\">\n         <p>You have entered an <strong><span class=\"brand\">IMITATION (NOT ORIGINAL) </span></strong> product as below listed details;</p>\n         <mat-chip-list class=\"mat-chip-list-stacked\"  aria-label=\"Color selection\">\n               <mat-chip color=\"warn\" selected>Serial no : {{ data.serial }} </mat-chip>\n               <mat-chip color=\"warn\" selected>Market : {{ data.market || 'Malaysia' | titlecase}} </mat-chip>\n         </mat-chip-list>\n         \n         <p>Would you like to report it to our <span class=\"brand\">STRONG ARROW®️</span> {{ data.market || 'Malaysia' | titlecase}} representative?</p>\n      </div>\n      \n      <div class=\"card__actions\" fxLayout fxLayoutAlign=\"center center\">\n         <div class=\"card__actions-report\" *ngIf=\"data && data.id && !toReview && !savedReviewSucces\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <p>\n               <i class=\"fas fa-exclamation-circle\" color=\"primary\"></i>\n               If number of try is more than \"0\" and it is not you who checked, please report it to our {{ data.market || 'Malaysia' | titlecase}} \n               <a href=\"\"  target=\"0\">\n                  <i class=\"fab fa-whatsapp\"></i>\n                  representative.         \n               </a>\n               Would you like to leave a review?\n            </p>\n            <button mat-raised-button color=\"primary\" (click)=\"reviewForm()\">\n               <mat-icon>rate_review</mat-icon>\n               Leave a review\n            </button>\n         </div>\n         <div class=\"card__actions-report\" *ngIf=\"data.status == 404\">\n            <button mat-raised-button color=\"primary\" >\n               <i class=\"fab fa-whatsapp\"></i>\n               {{ data.market || 'Malaysia' | titlecase}} Representative\n            </button>\n         </div>\n      </div>\n\n      <div class=\"review\" *ngIf=\"toReview\">\n         <h2>Product Review</h2>\n\n         <form name=\"reviewForm\">\n\n            <mat-form-field appearance=\"fill\">\n               <mat-label>Name</mat-label>\n               <input matInput placeholder=\"Enter Name\" [formControl]=\"name\" required>\n               <mat-icon matSuffix color=\"primary\">contacts</mat-icon>\n               <mat-hint>Ex: Severus Snape</mat-hint>\n               <mat-error *ngIf=\"name.invalid\">\n                  Name is <strong>required</strong>\n               </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"fill\">\n               <mat-label>Phone No</mat-label>\n               <input matInput placeholder=\"Enter Phone No\" [formControl]=\"phone\" type=\"number\" required>\n               <mat-icon matSuffix color=\"primary\">contact_phone</mat-icon>\n               <mat-hint>Ex: 111111111</mat-hint>\n               <mat-error *ngIf=\"phone.invalid\">\n                  Phone no is <strong>required</strong>\n               </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"fill\">\n               <mat-label>Email</mat-label>\n               <input matInput type=\"email\" placeholder=\"Enter email\" [formControl]=\"email\" required>\n               <mat-icon matSuffix color=\"primary\">contact_mail</mat-icon>\n               <mat-hint>Ex: snape@hogwarts.com</mat-hint>\n               <mat-error *ngIf=\"email.invalid\">\n                  Email is <strong>required</strong>\n               </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"fill\">\n                <textarea matInput [formControl]=\"review\" placeholder=\"Leave a comment\" required></textarea>\n                <mat-icon matSuffix color=\"primary\">contact_mail</mat-icon>\n                <mat-error *ngIf=\"review.invalid\">\n                  Review is <strong>required</strong>\n               </mat-error>\n            </mat-form-field>\n\n            <div class=\"card__review-button\" fxLayout fxLayoutAlign=\"center center\">\n               <button mat-raised-button color=\"primary\" (click)=\"submitReview()\">Submit Review</button>\n            </div>\n\n         </form> \n      </div>\n\n      <div class=\"review__saved\" *ngIf=\"savedReviewSucces\">\n         <h2>Review Saved</h2>\n         <p>Thank you for your review.</p>\n         <div class=\"reviewForm__end\" fxLayout fxLayoutAlign=\"center center\">\n            <button mat-raised-button color=\"primary\" (click)=\"reviewSaved()\">Back to Home Page</button>\n         </div>\n      </div>\n\n   </mat-card-content>  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authenticate/authenticate.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authenticate/authenticate.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"top\" >\n\n   <div class=\"content__100vh\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div class=\"card\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n         <mat-card>\n            <mat-card-title>AUTHENTICATE PRODUCT</mat-card-title>\n            <mat-card-content>\n               <div class=\"auth__input\">\n\n                  <form>\n\n                     <div class=\"form__component\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field appearance=\"fill\">\n                           <mat-label>Serial Number</mat-label>\n                           <input matInput placeholder=\"DFXXXXXXX\" [formControl]=\"serial\" required>\n                           <mat-icon matSuffix color=\"primary\">vpn_key</mat-icon>\n                           <mat-hint>Enter serial number here</mat-hint>\n                           <mat-error *ngIf=\"serial.invalid\">\n                              Serial number is <strong>required</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"form__button-submit\" color=\"primary\" [disabled]=\"serial.invalid\" (click)=\"authenticate()\">\n                           <i class=\"fas fa-skull-crossbones\"></i>\n                           Check Authenticity\n                        </button>\n\n                     </div>\n\n                  </form>\n\n               </div>\n            </mat-card-content>\n         </mat-card>\n      \n      </div>\n   \n   </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n\n   <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center stretch\">\n\n      <div class=\"footer__card\" fxFlex=\"50\">\n         <mat-card role=group>\n            <mat-card-title>BUY ORIGINAL AUTHENTIC PRODUCT</mat-card-title>\n            <mat-card-content>  \n\n               <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                  <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>verified_user</mat-icon>\n                  </button>\n                  30 PCS PILLS PER BOTTLE\n               </div>\n\n               <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                  <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>verified_user</mat-icon>\n                  </button>\n                  COME WITH EXCLUSIVE BLACK BOX\n               </div>\n\n               <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                  <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>verified_user</mat-icon>\n                  </button>\n                  CLEAR & BOLD WRITING\n               </div>\n\n               <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                  <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>verified_user</mat-icon>\n                  </button>\n                  NEW PACKING WITH QR CODE\n               </div>\n\n               <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                  <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>verified_user</mat-icon>\n                  </button>\n                  Scratch codes ON EVERY BOTTLE WITH UNIQUE SERIAL NUMBER\n               </div>\n\n               <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                  <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>verified_user</mat-icon>\n                  </button>\n                  MADE IN USA\n               </div>\n\n               <div class=\"cta\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                  <div class=\"cta__detect\">\n                     *We have detected that you are from Malaysia, please contact our Malaysia representative for any question.\n                  </div>\n                  <button mat-raised-button color=\"accent\">\n                     <i class=\"fab fa-whatsapp\"></i>\n                     Contact Our Malaysian Representative\n                  </button>      \n               </div>\n\n               <div class=\"cta\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                  <div class=\"cta__detect\">\n                     You can check and authenticate your scratch code by pressing the button below. Do not buy imitation product.\n                  </div>\n                  <button mat-raised-button color=\"primary\" (click)=\"authenticateProduct()\">\n                     <mat-icon>vpn_key</mat-icon>\n                     Check or Authenticate your product here!\n                  </button>      \n               </div>\n\n            </mat-card-content>\n         </mat-card>\n      </div>\n\n      <div class=\"footer__card\" fxFlex=\"50\"  >\n\n         <mat-card role=group>\n\n            <mat-card-title>CERTIFIED</mat-card-title>\n            <mat-card-content>\n               <div class=\"images\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n                  <img src=\"assets/logo_icons/safe.png\" alt=\"\">\n                  <img src=\"assets/logo_icons/gmp.png\" alt=\"\">\n                  <img src=\"assets/logo_icons/nsf.png\" alt=\"\">\n                  <img src=\"assets/logo_icons/hus.png\" alt=\"\">\n                  <img src=\"assets/logo_icons/best.png\" alt=\"\">\n               </div>               \n            </mat-card-content>\n\n         </mat-card>\n      </div>\n\n   </div>\n\n   <div class=\"toolbar\">\n      <mat-toolbar color=\"primary\">\n         <div fxLayoutAlign=\"center\">\n            Copyright &copy; 2017, www.strongarrowpills.com\n         </div>\n      </mat-toolbar>\n   </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"top\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly none\">\n\n  <div class=\"container\">\n    <div class=\"banner\" fxLayoutAlign=\"center center\">\n      <img class=\"banner__image\" src=\"assets/images/sa_banner_1.jpg\" alt=\"Strong Arrow Banner 1\">\n    </div>    \n  </div>\n\n  <mat-divider></mat-divider>\n\n  <app-intro></app-intro>\n\n  <mat-divider></mat-divider>\n\n  <app-how></app-how>\n\n  <mat-divider></mat-divider>\n\n  <div class=\"container\" id=\"benefits\" fxLayout fxLayoutAlign=\"center center\">\n    <div class=\"benefits__container\" >\n\n      <mat-card>\n         <img mat-card-image class=\"benefits__image\" src=\"assets/images/sa_product_1.jpg\" alt=\"Strong Arrow Pills Products\">\n\n         <mat-card-title>FUNCTIONS AND BENEFITS OF <span class=\"brand\">STRONG ARROW®️</span></mat-card-title>\n\n         <mat-card-content>\n            <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n\n               <div class=\"blurp\" fxFlex.gt-xs=\"70%\" fxLayout=\"row\" *ngFor=\"let benefit of benefits\">\n                  <div class=\"blurp__icon\" fxFlex.xs=\"20\" fxLayout fxLayoutAlign=\"center center\">\n                     <button mat-mini-fab color=\"primary\">\n                        <mat-icon>done</mat-icon>\n                     </button>       \n                  </div>\n                  <div class=\"blurp__content\" fxFlex.xs=\"80\">\n                     <div class=\"text__subtitle\">\n                        <span class=\"brand\">STRONG ARROW®️ </span>{{ benefit.text }}\n                     </div>\n                  </div>          \n               </div>         \n          \n            </div>\n         </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div class=\"instruction\" id=\"instructions\">\n    <div class=\"container instruction__container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <div class=\"instruction__banner\">\n        <img src=\"assets/images/sa_banner_3.jpg\" alt=\"\">\n      </div>\n\n      <div class=\"text__title instruction__title\">\n          HOW TO CONSUME <span class=\"brand\">STRONG ARROW®️ </span>:\n      </div>\n\n      <div class=\"instruction__cards\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center stretch\">\n\n        <div class=\"instruction__card\" fxFlex=\"30\" fxFlex.xs=\"100\">\n          <mat-card>\n            <mat-card-title>FOR DAILY INTAKE</mat-card-title>\n            <mat-card-content>\n              <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>done</mat-icon>\n                </button>\n                INCREASE PENIS SIZE\n              </div>\n              <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>done</mat-icon>\n                </button>\n                QUALITY SEMEN / SPERM\n              </div>\n              <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>notification_important</mat-icon>\n                </button>\n                Daily maximum 2 capsules after breakfast.\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n\n        <div class=\"instruction__card\" fxFlex=\"30\" fxFlex=\"100\">\n          <mat-card>\n            <mat-card-title>FOR LONG LASTING & STAMINA</mat-card-title>\n            <mat-card-content>\n              <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>notification_important</mat-icon>\n                </button>\n                TAKE 1 capsule, 20min before intercourse\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n\n        <div class=\"instruction__card\" fxFlex=\"30\" fxFlex=\"100\">\n          <mat-card>\n            <mat-card-title>IMPORTANT TIPS</mat-card-title>\n            <mat-card-content>\n              <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>notification_important</mat-icon>\n                </button>\n                Reduce caffeine daily intake(tea, coffee, chocolate) \n              </div>\n              <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>notification_important</mat-icon>\n                </button>\n                REDUCE carbonated drinks , alcohol, icy cool drinks\n              </div>\n              <div class=\"blurp__content\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n                <button mat-mini-fab color=\"primary\" style=\"margin-right: 20px;\">\n                  <mat-icon>notification_important</mat-icon>\n                </button>\n                REDUCE greasy food for maximum effective\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n  <mat-divider></mat-divider>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/how/how.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/how/how.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"how\" id=\"how\">\n\n    <div class=\"benefits__container\" fxLayout fxLayoutAlign=\"center center\">\n\n      <mat-card fxFlex.xs=\"100\" fxFlex=\"60vw\">\n\n        <img mat-card-image src=\"assets/images/sa_banner_2.jpg\" style=\"max-width: 100% !important;\n        height: auto !important;\" alt=\"Strong Arrow Pills Banner 2\">\n\n        <mat-card-title class=\"title\">\n          WHAT IS YOUR <span class=\"brand\">MAXIMUM </span>?\n          <mat-progress-bar mode=\"buffer\" value=\"60\" color=\"primary\"></mat-progress-bar>\n        </mat-card-title>\n\n        <mat-card-content>\n          <div class=\"content\">\n            So the maximum amount your erectile tissue can fill with blood creates the size your erect penis presently is. But what scientists have discovered, is that your erectile tissue can be developed much larger and longer than it currently is manipulating the size of your penis chamber with a specific combination of compounds.\n          </div>\n        </mat-card-content>\n\n        <mat-card-content>\n          <div class=\"content\">\n            Published clinical studies have shown that the natural compounds in <span class=\"brand\">STRONG ARROW®️</span> can increase free testosterone in your body, which leads to increased penis size and additional published clinical studies have show that the amino acid combination in <span class=\"brand\">STRONG ARROW®️</span> can increase nitric oxide production which also leads to an increase in size and hardness. Using our \"blueprint\" to create a better, bigger penis and using the most potent, triple extracted, nutraceutical compound in <span class=\"brand\">STRONG ARROW®️</span>, we have created a virtual assembly line that produces bigger, more masculine penises for men around the world.\n          </div>\n        </mat-card-content>\n\n      </mat-card>\n\n    </div>\n  </div>\n\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/intro/intro.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/intro/intro.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n\n      <div class=\"card\" fxLayout.xs=\"column\" fxLayout.gt-xs=\"row\">\n\n        <div class=\"card\" fxFlex=\"50\" fxFlex.xs=\"100\">\n          \n          <mat-card>\n\n            <mat-card-content>\n              <div class=\"intro__spinner\" fxLayout fxLayoutAlign=\"center center\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <mat-progress-spinner [mode]=\"mode\" [value]=\"value\"></mat-progress-spinner>        \n              </div>  \n            \n              <div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                {{ total | number:'3.0' }} <span class=\"brand\">Men</span> <mat-icon class=\"icon\">people</mat-icon>\n              </div>\n              <div class=\"content\">\n                It's an absolute phenomenon! <span class=\"brand\">{{ total | number:'3.0' }}</span> Men around the world are gobbling up <span class=\"brand\">Strong Arrow®️</span> like popcorn!\n              </div>\n            </mat-card-content>\n\n          </mat-card>\n\n        </div>   \n\n        <div class=\"card\" fxFlex=\"50\" fxFlex.xs=\"100\">\n          <mat-card>\n            <mat-card-content>\n              <div class=\"intro__spinner\" fxLayout fxLayoutAlign=\"center center\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <mat-progress-spinner [mode]=\"percentMode\" [value]=\"percentValue\"></mat-progress-spinner>        \n              </div>\n              <div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                {{ percentTotal | number:'2.0' }}% <span class=\"brand\"> Satisfaction Rating</span>\n                <mat-icon class=\"icon\">sentiment_satisfied_alt</mat-icon> \n              </div>\n              <div class=\"content\">\n                Men everywhere are raving about it! Why all the excitement? Why the record sales numbers? Why a <span class=\"brand\">{{ percentTotal | number:'2.0' }} %</span> customer satisfaction rating?\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n\n      </div><!-- container -->\n\n      <div class=\"content\">\n        Because <span class=\"brand\">Strong Arrow®️</span> is the worlds first and only male enhancement pill to actually make your penis longer and wider starting at the molecular level inside the two chambers of your penis! Our exclusive formula <span class=\"brand\">\"cracked the code\"</span> that has eluded other pill manufactures for decades, until now.\n      </div>\n\n      <div class=\"content\">\n        So now you too can now join the happy men around the world who have seen their penis literally transformed and their sex life has skyrocketed like it was ignited with sexual rocket fuel! The <span class=\"brand\">\"Game Changer\"</span> every man has waited for, is finally here!\n      </div> \n \n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar\">\n\n  <div class=\"navbar__items\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n    <div class=\"navbar__logo\" fxFlex=\"40\">\n      <a routerLink=\"/#top\">\n         <img class=\"navbar__img\" src=\"assets/images/logo.png\" alt=\"\"> \n      </a>   \n    </div>\n\n  </div>\n\n</mat-toolbar>\n\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"top\">\n\n   <div class=\"content__100vh\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <div class=\"card\">\n         <mat-card>\n            <mat-card-title>\n               Login Form \n            </mat-card-title>\n            <mat-card-content>\n\n               <div class=\"login__form\">\n\n                  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field class=\"login__input\" appearance=\"fill\">\n                           <mat-label>Email</mat-label>\n                           <input matInput placeholder=\"Email\" #email formControlName=\"email\" required>\n                           <mat-icon matSuffix color=\"primary\">alternate_email</mat-icon>\n                           <mat-hint>Enter email here</mat-hint>\n                           <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">\n                              Email is <strong>required</strong>\n                           </mat-error>\n                           <mat-error *ngIf=\"loginForm.get('email').hasError('email')\">\n                              Please enter a valid <strong>email</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"login__input\" appearance=\"fill\">\n                           <mat-label>Password</mat-label>\n                           <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n                           <mat-icon matSuffix color=\"primary\">vpn_key</mat-icon>\n                           <mat-hint>Enter password here</mat-hint>\n                           <mat-error *ngIf=\"loginForm.get('password').hasError('required')\">\n                              Password is <strong>required</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"login__form-button\" type=\"submit\" [disabled]=\"loginForm.invalid\" color=\"primary\" >\n                           <mat-icon>check_circle</mat-icon>\n                           Login\n                        </button>\n\n                     </div>\n\n                     {{ loginForm.errors }}\n\n                  </form>\n\n               </div>\n\n            </mat-card-content>\n         </mat-card>\n      </div>\n   </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate/authenticate.component */ "./src/app/authenticate/authenticate.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'products/product/strong-arrow/authenticate', component: _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticateComponent"] },
    // User routes
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    // Wildcard routes
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3Qvc3Ryb25nX2Fycm93L3N0cm9uZy1hcnJvdy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EsZ0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXR7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG59IiwiLmxheW91dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'strong-arrow';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authenticate/authenticate.component */ "./src/app/authenticate/authenticate.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_intro_intro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/intro/intro.component */ "./src/app/home/intro/intro.component.ts");
/* harmony import */ var _home_how_how_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/how/how.component */ "./src/app/home/how/how.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





















function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticateComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _home_intro_intro_component__WEBPACK_IMPORTED_MODULE_14__["IntroComponent"],
                _home_how_how_component__WEBPACK_IMPORTED_MODULE_15__["HowComponent"],
                _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_9__["SerialCheckDialog"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__["JwtModule"].forRoot({ config: { tokenGetter: tokenGetter } })
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"], useValue: '/' }
            ],
            entryComponents: [
                _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_9__["SerialCheckDialog"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authenticate/authenticate.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/authenticate/authenticate.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  font-size: 2.8rem;\n}\n\n.form__button-submit {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.card__review-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3Qvc3Ryb25nX2Fycm93L3N0cm9uZy1hcnJvdy9zcmMvYXBwL2F1dGhlbnRpY2F0ZS9hdXRoZW50aWNhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhlbnRpY2F0ZS9hdXRoZW50aWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxpQkFBQTtBQ0NSOztBRElHO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0FDRE47O0FET0c7RUFDRyxXQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGUvYXV0aGVudGljYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGh7XG4gICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xufVxuXG4uZm9ybXtcblxuICAgJl9fYnV0dG9uLXN1Ym1pdHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgIH1cbn1cblxuLmNhcmR7XG5cbiAgICZfX3Jldmlldy1idXR0b257XG4gICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbn1cblxuXG4iLCIuYXV0aCB7XG4gIGZvbnQtc2l6ZTogMi44cmVtO1xufVxuXG4uZm9ybV9fYnV0dG9uLXN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FyZF9fcmV2aWV3LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/authenticate/authenticate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/authenticate/authenticate.component.ts ***!
  \********************************************************/
/*! exports provided: AuthenticateComponent, SerialCheckDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateComponent", function() { return AuthenticateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialCheckDialog", function() { return SerialCheckDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/serial-no/serial-auth.service */ "./src/app/services/serial-no/serial-auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AuthenticateComponent = /** @class */ (function () {
    function AuthenticateComponent(auth, dialog) {
        this.auth = auth;
        this.dialog = dialog;
        this.serial = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    AuthenticateComponent.prototype.ngOnInit = function () {
    };
    AuthenticateComponent.prototype.authenticate = function () {
        var _this = this;
        this.auth.authenticateSerial(this.serial.value).subscribe(function (response) {
            console.log(response);
            var dialogRef = _this.dialog.open(SerialCheckDialog, {
                width: '320px',
                data: response
            });
        });
    };
    AuthenticateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authenticate',
            template: __webpack_require__(/*! raw-loader!./authenticate.component.html */ "./node_modules/raw-loader/index.js!./src/app/authenticate/authenticate.component.html"),
            styles: [__webpack_require__(/*! ./authenticate.component.scss */ "./src/app/authenticate/authenticate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AuthenticateComponent);
    return AuthenticateComponent;
}());

// Dialog for the result of checking serial number
var SerialCheckDialog = /** @class */ (function () {
    function SerialCheckDialog(dialogRef, data, auth, snackBar, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.auth = auth;
        this.snackBar = snackBar;
        this.router = router;
        this.toReview = false;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.review = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.savedReviewSucces = false;
    }
    SerialCheckDialog.prototype.ngOnInit = function () {
    };
    SerialCheckDialog.prototype.reviewForm = function () {
        this.toReview = true;
    };
    SerialCheckDialog.prototype.submitReview = function () {
        var _this = this;
        this.toReview = true;
        var contact = {
            name: this.name.value,
            phone: this.phone.value,
            email: this.email.value,
            review: this.review.value
        };
        this.auth.saveReview(contact).subscribe(function (response) {
            if (response) {
                _this.toReview = false;
                _this.savedReview = response;
                _this.savedReviewSucces = true;
            }
            else
                _this.snackBar.open(response.statusText, 'X', { duration: 1000, panelClass: 'warn' });
        }, function (error) { return _this.snackBar.open(error, 'X', { duration: 1000, panelClass: 'warn' }); });
    };
    SerialCheckDialog.prototype.reviewSaved = function () {
        this.dialogRef.close();
        this.router.navigate(['']);
    };
    SerialCheckDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
        this.router.navigate(['']);
    };
    SerialCheckDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'serial-check-dialog',
            template: __webpack_require__(/*! raw-loader!./authenticate-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/authenticate/authenticate-dialog.component.html"),
            styles: [__webpack_require__(/*! ./authenticate.component.scss */ "./src/app/authenticate/authenticate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SerialCheckDialog);
    return SerialCheckDialog;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cta__button {\n  width: 15px;\n  z-index: 10;\n  position: absolute;\n}\n.cta__detect {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.footer__card {\n  margin: 10px;\n}\n.footer__copyright {\n  text-align: center;\n}\n.images {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3Qvc3Ryb25nX2Fycm93L3N0cm9uZy1hcnJvdy9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRFI7QURJSTtFQUNHLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0ZQO0FEUUc7RUFDRyxZQUFBO0FDTE47QURRRztFQUNHLGtCQUFBO0FDTk47QURVQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0FDUEgiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN0YXtcblxuICAgICZfX2J1dHRvbntcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgJl9fZGV0ZWN0e1xuICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5mb290ZXJ7XG5cbiAgICZfX2NhcmR7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICB9XG5cbiAgICZfX2NvcHlyaWdodHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH1cbn1cblxuLmltYWdlc3tcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OiAxMDAlO1xufSIsIi5jdGFfX2J1dHRvbiB7XG4gIHdpZHRoOiAxNXB4O1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmN0YV9fZGV0ZWN0IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXJfX2NhcmQge1xuICBtYXJnaW46IDEwcHg7XG59XG4uZm9vdGVyX19jb3B5cmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FooterComponent = /** @class */ (function () {
    function FooterComponent(iconRegistry, sanitizer, router) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.iconRegistry.addSvgIcon('whatsapp', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp.svg'));
    };
    FooterComponent.prototype.authenticateProduct = function () {
        this.router.navigate(['products/product/strong-arrow/authenticate'], { fragment: 'top' });
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\n  margin-top: 10vh;\n}\n.banner__image {\n  max-width: 100%;\n  height: auto;\n}\n.intro__container-content {\n  text-align: center;\n}\n.intro__spinner {\n  padding: 20px;\n}\n.benefits {\n  height: 100%;\n}\n.benefits__container {\n  width: 60%;\n}\n.benefits__title {\n  text-align: center;\n}\n.instruction__card {\n  padding: 20px;\n}\n@media only screen and (max-width: 600px) {\n  .banner {\n    margin-top: 10vh;\n  }\n  .banner__image {\n    max-width: 100%;\n    height: auto;\n  }\n\n  .benefits {\n    height: 100%;\n  }\n  .benefits__container {\n    width: 100%;\n  }\n  .benefits__title {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3Qvc3Ryb25nX2Fycm93L3N0cm9uZy1hcnJvdy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUcsZ0JBQUE7QUNBSDtBREVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNBUjtBRE1JO0VBQ0ksa0JBQUE7QUNIUjtBRE1JO0VBQ0ksYUFBQTtBQ0pSO0FEU0E7RUFFSSxZQUFBO0FDUEo7QURTSTtFQUNHLFVBQUE7QUNQUDtBRFVJO0VBQ0ksa0JBQUE7QUNSUjtBRGVJO0VBQ0ksYUFBQTtBQ1pSO0FEa0JBO0VBRUc7SUFDRyxnQkFBQTtFQ2hCSjtFRGtCSTtJQUNJLGVBQUE7SUFDQSxZQUFBO0VDaEJSOztFRHFCQztJQUVHLFlBQUE7RUNuQko7RURxQkk7SUFDRyxXQUFBO0VDbkJQO0VEc0JJO0lBQ0csa0JBQUE7RUNwQlA7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJ7XG5cbiAgIG1hcmdpbi10b3A6IDEwdmg7ICAgIFxuXG4gICAgJl9faW1hZ2V7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuLmludHJve1xuXG4gICAgJl9fY29udGFpbmVyLWNvbnRlbnR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19zcGlubmVye1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxufVxuXG4uYmVuZWZpdHN7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmX19jb250YWluZXJ7XG4gICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG5cbiAgICAmX190aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxufVxuXG4uaW5zdHJ1Y3Rpb257XG5cbiAgICAmX19jYXJke1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgLmJhbm5lcnsgXG4gICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICBcbiAgICAgICZfX2ltYWdle1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICB9XG5cblxuICAgLmJlbmVmaXRze1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICZfX2NvbnRhaW5lcntcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAmX190aXRsZXtcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgfVxuXG5cbn0iLCIuYmFubmVyIHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbn1cbi5iYW5uZXJfX2ltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbnRyb19fY29udGFpbmVyLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW50cm9fX3NwaW5uZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYmVuZWZpdHMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYmVuZWZpdHNfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA2MCU7XG59XG4uYmVuZWZpdHNfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5zdHJ1Y3Rpb25fX2NhcmQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5iYW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gIH1cbiAgLmJhbm5lcl9faW1hZ2Uge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuYmVuZWZpdHMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuYmVuZWZpdHNfX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJlbmVmaXRzX190aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.menChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.percentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Men Count
        this.count = 203728;
        this.i = 0;
        this.total = 0;
        this.value = 0;
        // Percent Count
        this.percentCount = 99;
        this.p = 0;
        this.percentTotal = 0;
        this.percentValue = 0;
        this.benefits = [
            { text: 'can also restore hardness and erection.' },
            { text: 'can enlarge and lengthen the penis in those who take it. Our customers tell that the average length that can be achieved is about half an inch to an inch if you take a bottle.' },
            { text: 'increases the quantity and quality of semen in which the sperm become more concentrated and more.' },
            { text: 'can help returns hardness and erection.' },
            { text: 'supports the enlargement of the penis and maximize sexual performance and pleasure' },
            { text: 'no side effects, natural products' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.i < _this.count) {
                _this.mode = 'indeterminate';
                _this.i = _this.i + 500;
                _this.menChange.emit(_this.i);
                _this.menChange.subscribe(function (response) { return _this.total = response; });
            }
            else {
                _this.mode = 'determinate';
                _this.value = 100;
            }
        }, 30);
        setInterval(function () {
            if (_this.p < _this.percentCount) {
                _this.percentMode = 'indeterminate';
                _this.p++;
                _this.percentChange.emit(_this.p);
                _this.percentChange.subscribe(function (response) { return _this.percentTotal = response; });
            }
            else {
                _this.percentValue = 99;
                _this.percentMode = 'determinate';
            }
        }, 200);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HomeComponent.prototype, "menChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HomeComponent.prototype, "percentChange", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/how/how.component.scss":
/*!*********************************************!*\
  !*** ./src/app/home/how/how.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG93L2hvdy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/how/how.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/how/how.component.ts ***!
  \*******************************************/
/*! exports provided: HowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowComponent", function() { return HowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowComponent = /** @class */ (function () {
    function HowComponent() {
    }
    HowComponent.prototype.ngOnInit = function () {
    };
    HowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how',
            template: __webpack_require__(/*! raw-loader!./how.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/how/how.component.html"),
            styles: [__webpack_require__(/*! ./how.component.scss */ "./src/app/home/how/how.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowComponent);
    return HowComponent;
}());



/***/ }),

/***/ "./src/app/home/intro/intro.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/intro/intro.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/intro/intro.component.ts ***!
  \***********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
        this.menChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.percentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Men Count
        this.count = 203728;
        this.i = 0;
        this.total = 0;
        this.value = 0;
        // Percent Count
        this.percentCount = 99;
        this.p = 0;
        this.percentTotal = 0;
        this.percentValue = 0;
    }
    IntroComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.i < _this.count) {
                _this.mode = 'indeterminate';
                _this.i = _this.i + 500;
                _this.menChange.emit(_this.i);
                _this.menChange.subscribe(function (response) { return _this.total = response; });
            }
            else {
                _this.mode = 'determinate';
                _this.value = 100;
            }
        }, 20);
        setInterval(function () {
            if (_this.p < _this.percentCount) {
                _this.percentMode = 'indeterminate';
                _this.p++;
                _this.percentChange.emit(_this.p);
                _this.percentChange.subscribe(function (response) { return _this.percentTotal = response; });
            }
            else {
                _this.percentValue = 99;
                _this.percentMode = 'determinate';
            }
        }, 100);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], IntroComponent.prototype, "menChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], IntroComponent.prototype, "percentChange", void 0);
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/home/intro/intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");


// Angular Material Modules

































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  position: fixed;\n  background-color: #000;\n  height: 10vh;\n  z-index: 5;\n}\n.navbar__img {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3Qvc3Ryb25nX2Fycm93L3N0cm9uZy1hcnJvdy9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0FKO0FERUk7RUFDSSxZQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcblxuICAgIHBvc2l0aW9uOiBmaXhlZDsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgei1pbmRleDogNTtcblxuICAgICZfX2ltZ3tcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cblxuXG59IiwiLm5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAxMHZoO1xuICB6LWluZGV4OiA1O1xufVxuLm5hdmJhcl9faW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.login = function (credentials) {
        return this.http.post("/api/user/login", credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    };
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var token = localStorage.getItem('token');
            if (!token) {
                return null;
            }
            if (token) {
                return this.jwtHelper.decodeToken(token);
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        var validToken = this.jwtHelper.isTokenExpired(token);
        if (validToken === true) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/serial-no/serial-auth.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/serial-no/serial-auth.service.ts ***!
  \***********************************************************/
/*! exports provided: SerialAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialAuthService", function() { return SerialAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SerialAuthService = /** @class */ (function () {
    function SerialAuthService(http) {
        this.http = http;
    }
    SerialAuthService.prototype.authenticateSerial = function (serial) {
        return this.http.post('/api/product/authentication', { serial: serial }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    };
    SerialAuthService.prototype.saveReview = function (review) {
        console.log(review);
        return this.http.post('/api/product/review', review).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    };
    SerialAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SerialAuthService);
    return SerialAuthService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login__input {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.login__form-button {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3Qvc3Ryb25nX2Fycm93L3N0cm9uZy1hcnJvdy9zcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0c7RUFDRyxnQkFBQTtFQUNBLG1CQUFBO0FDRk47QURNRztFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xuXG5cbiAgICZfX2lucHV0e1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgIH1cblxuICAgJl9fZm9ybS1idXR0b257XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxufSIsIi5sb2dpbl9faW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxvZ2luX19mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, snackBar, router) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginForm.value).subscribe(function (response) {
            if (response && response.id) {
                var token = localStorage.setItem('token', response.token);
                _this.user = response;
            }
        }, function (error) { return _this.snackBar.open(error, 'X', { duration: 10000 }); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/user/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/azrin/project/strong_arrow/strong-arrow/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map