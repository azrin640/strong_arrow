import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements OnInit {
   token: string;
   user: User;
   userSource = new BehaviorSubject(this.user);
   profile = this.userSource as Observable<User>;

  constructor( private http: HttpClient, private router: Router) 
   { 
      
   }  

   ngOnInit(){
      this.isLoggedIn();
      this.decodeToken();
      this.getUserSource()
   }

  isLoggedIn()
  {
    let token = localStorage.getItem('token');
    token ? (this.token = token) : (this.token = null);
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
      this.http.post('/api/user/profile', {_id: user._id})
        .subscribe((response: User) => this.userSource.next(response),
          error => throwError(error)
        );        
    }
    else this.userSource = null;
  }

  logout(){
      localStorage.removeItem('token');
      window.location.reload();
   }
  

}
