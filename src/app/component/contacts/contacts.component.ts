import { Component, OnInit, Output } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import { registerLocaleData } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  contacts: Array<Contact>;
  contactCaching: Array<Contact>;
  contactLength: number;
  searchInput: string;
  headerTitle: string;
  headerIcon: string;


  constructor(public contactServiceProperty:ContactsService) { }

  ngOnInit() {
    document.title = 'Eshcol Logistics | Contacts';
    this.contactServiceProperty.getContacts().subscribe((contactsDataArg: Array<Contact>)=>{
      this.contactCaching = this.contacts = _.sortBy(contactsDataArg, ['name']);
      this.contactLength = this.contacts.length;
    });
    this.headerTitle = '  Contact';
    this.headerIcon = 'fas fa-envelope';
  }

  onKeyupSearch(){
    const searchTarget = this.searchInput.toLowerCase().trim();
    if (searchTarget.length > 0) {
      
      this.contacts = this.contactCaching.filter((singleObFromArray) => _.includes(singleObFromArray.name.toLowerCase(), searchTarget));
      
    } else {
      this.contacts = this.contactCaching;
    }

  }

}
