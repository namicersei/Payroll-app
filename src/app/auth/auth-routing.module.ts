import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { EmployeeprofileComponent } from '../employee/employeeprofile/employeeprofile.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

import {AdminModule} from '../admin/admin.module';
import {EmployeeModule} from '../employee/employee.module';


const routes:Routes=[
  {path:'', component:LoginComponent },
  {path:'forgotpass',component:ForgotpassComponent}, 
  {
    path:'employee',
    //canActivate:[AuthguardEmployee],
    loadChildren:'../employee/employee.module#EmployeeModule'

     },

 {
 path:'admin',
  //canActivate:[AuthguardAdmin],
 loadChildren:'../admin/admin.module#AdminModule',
 }
  ];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
})
export class AuthRoutingModule { }
