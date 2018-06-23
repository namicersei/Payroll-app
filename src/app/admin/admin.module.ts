import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ApproveleaveComponent } from './approveleave/approveleave.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PayemployeeComponent } from './payemployee/payemployee.component';
import { EditpaymentComponent } from './editpayment/editpayment.component';


import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminProfileComponent, ApproveleaveComponent, CreateaccountComponent, PayemployeeComponent, EditpaymentComponent],
  
   exports:[AdminProfileComponent, ApproveleaveComponent, CreateaccountComponent, PayemployeeComponent, EditpaymentComponent]


})
export class AdminModule { }
