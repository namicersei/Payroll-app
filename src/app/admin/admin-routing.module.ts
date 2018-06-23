import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ApproveleaveComponent } from './approveleave/approveleave.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PayemployeeComponent } from './payemployee/payemployee.component';
import { EditpaymentComponent } from './editpayment/editpayment.component';
import { LoginComponent } from '../auth/login/login.component';



const routes: Routes = [
 
  { path: '', component: AdminProfileComponent },
  {  path: 'approveleave', component: ApproveleaveComponent},
  {  path: 'createaccount', component: CreateaccountComponent},
  {  path: 'payemployee', component: PayemployeeComponent},
  { path: 'editpayment', component:EditpaymentComponent},
  // { path:'**', component:LoginComponent}
  // {path:'login', component:LoginComponent}


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
exports :[RouterModule],
  
  declarations: []
})
export class AdminRoutingModule { }
