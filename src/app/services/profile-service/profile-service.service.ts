import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { catchError } from 'rxjs/operators';
import { AdminAuthGuardService } from '../admin-auth-guard/admin-auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   token: string;
   decodedToken: boolean = false;
   user: User;
   loggedIn: boolean = false;
   country;

   locSource = new BehaviorSubject(this.country);
   location = this.locSource as Observable<string>;

   userSource = new BehaviorSubject(this.user);
   profile = this.userSource as Observable<User>;

  constructor( 
     private http: HttpClient, private router: Router
   ) 
   {  this.getLocation();
      this.isLoggedIn();
   }  

   getLocation()   
   {  this.http.post('/api/user/location', { location: '' }).subscribe(
         (response: any) => this.locSource.next(response.country),
         catchError( error => throwError(error) ) )}

   isLoggedIn()
   {  let token = this.token = localStorage.getItem('token');
      token    ?  this.decodeToken() : ()=>{ return this.loggedIn = false  }   }

   decodeToken()
   {  let token = this.token;
      const jwtHelper = new JwtHelperService();
      let user = this.user = jwtHelper.decodeToken(token); 
      user ? this.getUserSource() : ()=>{ return this.decodedToken = false }   }

   getUserSource(): void
   {  let user = this.user;
      this.http.post('/api/user/profile', {_id: user._id}).subscribe(
         (response: User) => {
            if(response && response.id) {
               this.userSource.next(response);
            }
            else this.userSource = null   },
         catchError(error => throwError(error)) )}
   
  logout(){
      localStorage.removeItem('token');
      window.location.reload();
   }
  

}
