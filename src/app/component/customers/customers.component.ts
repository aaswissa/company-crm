import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


  headerTitle: string;
  headerIcon: string;

  constructor() { }

  ngOnInit() {
    document.title =  'Eshcol Logistics | Customer Page';
    this.headerTitle = ' Customers';
    this.headerIcon = 'fas fa-user';
  }

}
