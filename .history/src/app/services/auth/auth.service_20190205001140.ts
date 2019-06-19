import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/model/user';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: "root"})

export class AuthService {

  constructor( 
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  authenticate(credentials){
    return this.http.post("api/register/auth", credentials);
  }

  register(credentials: User){
    return this.http.post("api/register", credentials);
  }  
  
  login(credentials){
    return this.http.post("api/login", credentials)
      .subscribe(
        (response: any) => {     
          if (response.status === 202){
            localStorage.setItem('token', response.token);  
            return true;    
          }
          if (response.status === 404){
            return false;
          }  
        },
        (error) => {return throwError(error)}
      );
  }

  loginMain(credentials){
    return this.http.post("api/login", credentials);
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    let validToken = this.jwtHelper.isTokenExpired(token);
    if (validToken === true){
      return true;
    }
    else {
      return false;
    }
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if (!token){
      return null;
    } 
    if (token){
      return this.jwtHelper.decodeToken(token);
    }    
  }

  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }

  user(credentials){
    return this.http.post('api/user', credentials);
  }

}
