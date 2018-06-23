import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PayslipComponent } from './payslip/payslip.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { AppyforleaveComponent } from './appyforleave/appyforleave.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';



const routes:Routes=[
{ path:'', component:EmployeeprofileComponent},
{ path:'applyforleave',component: AppyforleaveComponent},
{ path:'payslip', component : PayslipComponent },
{ path:'leavestatus',component: LeavestatusComponent},
{ path:'**', redirectTo:''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class EmployeeRoutingModule { }
