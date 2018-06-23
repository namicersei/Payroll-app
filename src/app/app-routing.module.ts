import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {AdminModule} from './admin/admin.module';
// import {EmployeeModule} from './employee/employee.module';
import {AuthModule} from './auth/auth.module';

import { RouterModule, Routes } from '@angular/router';



const routes:Routes=[
  
  {
    path:'',
    loadChildren:'./auth/auth.module#AuthModule'
  } 

  ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 

  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
