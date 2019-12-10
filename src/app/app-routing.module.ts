import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './component/customers/customers.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {path:'', redirectTo:'customers', pathMatch:'full'},
  {path:'customers', component:CustomersComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
