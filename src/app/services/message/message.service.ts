import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Contact } from 'src/app/interface/contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

   contacts: Contact[];

   messageSource = new BehaviorSubject(this.contacts);
   messages = this.messageSource as Observable<Contact[]>;

  constructor(
     private http: HttpClient
  ) { this.updateMessages() }

   updateMessages()
   {  this.http.get('/api/contacts/messages').subscribe(
         (response: Contact[]) => {
            this.messageSource.next(response);
         },
         error => throwError(error))      }     //

}
