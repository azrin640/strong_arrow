import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { catchError } from 'rxjs/operators';
import { Location } from 'src/app/interface/location';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   token: string;
   user: User;
   country;

   // Location Profile 
   locSource = new BehaviorSubject(this.country);
   location = this.locSource as Observable<string>;

   // Subject Profile
   userSource = new BehaviorSubject(this.user);
   profile = this.userSource as Observable<User>;

  constructor( private http: HttpClient, private router: Router) 
   { 
      this.getLocation();
      this.isLoggedIn();
      this.decodeToken();
      this.getUserSource();
   }  

   getLocation()   {
      this.http.post('/api/user/location', { location: '' }).subscribe(
         (response: any) => {  
            console.log(response.country);  
            this.locSource.next(response.country);
         },
         catchError( error => throwError(error) ) 
      )
   }

  isLoggedIn()
  {
    let token = localStorage.getItem('token');
    token ? ()=>{ return this.token = token } : ()=>{ return this.user = null; };
  }

  decodeToken(): void
  {     
    if(this.token){
      let token = this.token;
      const jwtHelper = new JwtHelperService();
      this.user = jwtHelper.decodeToken(token);
    }
    else this.user = null;
  }
  
  getUserSource(): void
  { 
    let user = this.user;
    if(user){
      this.http.post('/api/user/profile', {_id: user.id}).subscribe(
         (response: User) => this.userSource.next(response),
         catchError(error => throwError(error))
        );        
    }
    else this.userSource = null;
  }

  logout(){
      localStorage.removeItem('token');
      window.location.reload();
   }
  

}
