import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { Serial } from 'src/app/interface/serial';

@Injectable({
  providedIn: 'root'
})
export class SerialAuthService {

   newSerials: Serial[];

   serialSource = new BehaviorSubject(this.newSerials);
   serials = this.serialSource as Observable<Serial[]>;


  constructor(
     private http: HttpClient
  ) { this.getExistingSerialNos()  }    //

  updateSerials(serials: Serial[])
  {   this.serials.subscribe((response) => {
         let serialSource = response as any[];
         console.log(serialSource);
         serialSource.splice(0, 0, (serials as any[]));
         console.log(serialSource);
         this.serialSource.next(serialSource as Serial[]);
  })
     
   this.serialSource.next(serials)  } //

  getExistingSerialNos()
  {   this.http.get('/api/products/serials')
         .pipe( catchError((error) => throwError(error)) )
         .subscribe((response: Serial[]) => this.serialSource.next(response)    )}    //

  authenticateSerial(serial)
  {   return this.http.post('/api/product/authentication', {serial: serial}).pipe(
        catchError(error => throwError(error))  )}    //

  saveReview(review)
  {   return this.http.post('/api/product/review', review).pipe(
         catchError(error => throwError(error)) )}    //

  generateSerialNo(serials)
  {   return this.http.post('/api/product/serial/generate', serials).pipe(
         catchError(error => throwError(error)) )}   //

  getSerialNos()
  {   return this.http.get('/api/products/serials').pipe(
         catchError(error => throwError(error))    )}    //

  deleteASerialNo(serial)
  {
      return this.http.post('/api/product/serial/rm', serial).pipe(
         catchError(error => throwError(error))    );   }   //

  deleteSerialNos(serials)
  {
     return this.http.post('/api/product/serials/rm', serials).pipe(
        catchError(error => throwError(error))     )}    //

}
