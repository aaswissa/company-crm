import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input()
    headerTitle: string;
  @Input()
    headerIcon: string;

  

  constructor() { }

  ngOnInit() {

  }

}
