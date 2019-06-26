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

  generateSerialNo(serials)
  {
     return this.http.post('/api/product/serial/generate', serials).pipe(
        catchError(error => throwError(error))
     )
  }

  getSerialNos()
  {
     return this.http.get('/api/products/serials').pipe(
         catchError(error => throwError(error))
      )
  }

  deleteASerialNo(serial)
  {
      return this.http.post('/api/product/serial/rm', serial).pipe(
         catchError(error => throwError(error))
      );
  }

  deleteSerialNos(serials)
  {
     return this.http.post('/api/product/serials/rm', serials).pipe(
        catchError(error => throwError(error))
     );
  }


}
