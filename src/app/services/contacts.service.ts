import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { } //di (dependencies injection)

  getContacts(){
    return this.http.get('/assets/data/contacts.json');
  }

}
