import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {LoginComponent} from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

import {AuthRoutingModule} from './auth-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent,ForgotpassComponent],

})
export class AuthModule { }
