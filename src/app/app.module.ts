import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { AuthenticateComponent, SerialCheckDialog } from './authenticate/authenticate.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard/admin-auth-guard.service';
import { APP_BASE_HREF } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { IntroComponent } from './home/intro/intro.component';
import { HowComponent } from './home/how/how.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminComponent } from './admin/admin.component';
import { AdminSerialComponent } from './admin/admin-serial/admin-serial.component';
import { AdminSerialTableComponent, BottomSheetConfirm } from './admin/admin-serial/admin-serial-table/admin-serial-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MAT_CHECKBOX_CLICK_ACTION, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactFormComponent } from './footer/contact-form/contact-form.component';

export function tokenGetter(){
   return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    HomeComponent,
    AuthenticateComponent,
    AppComponent,
    FooterComponent,
    IntroComponent,
    HowComponent,
    SerialCheckDialog,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminSerialComponent,
    AdminSerialTableComponent,
    BottomSheetConfirm,
    NavigationComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,    
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({config: { tokenGetter: tokenGetter }}),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'},
    //{provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    AuthService
  ],
  entryComponents: [
     SerialCheckDialog,
     BottomSheetConfirm
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
