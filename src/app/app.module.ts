import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './component/topnav/topnav.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { CustomersComponent } from './component/customers/customers.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    CustomersComponent,
    PageNotFoundComponent,
    ContactsComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
