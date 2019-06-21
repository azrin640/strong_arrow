import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerialAuthService {

  constructor(
     private http: HttpClient
  ) { }

  authenticateSerial(serial)
  {
     return this.http.post('/api/product/authentication', {serial: serial}).pipe(
        catchError(error => throwError(error))
     )
  }

  saveReview(review)
  {
     console.log(review);
     return this.http.post('/api/product/review', review).pipe(
         catchError(error => throwError(error))
     )

  }
}
