import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayslipComponent } from './payslip/payslip.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { AppyforleaveComponent } from './appyforleave/appyforleave.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';

import { EmployeeRoutingModule } from './/employee-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  declarations: [PayslipComponent, LeavestatusComponent, AppyforleaveComponent, EmployeeprofileComponent]
})
export class EmployeeModule { }
