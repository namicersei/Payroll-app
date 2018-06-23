import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// import { AdminModule } from './admin/admin.module';
// import {EmployeeModule} from './employee/employee.module';
// import {AuthModule} from './auth/auth.module';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';


  ////////services
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesService } from './core/services.service';

//interceptor
import {JwtInterceptor} from './core/jwt.interceptor';
import { LocalStorageService } from './core/local-storage.service';
import { EmpOperationService } from './core/emp-operation.service';
import { AdServiceService } from './core/ad-service.service';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AuthModule,
    //AdminModule,
    //EmployeeModule,
   
    FormsModule,
    HttpClientModule
  
  ],
providers:[ServicesService,
  LocalStorageService,
  EmpOperationService,
  AdServiceService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
}],
  bootstrap: [AppComponent],


})
export class AppModule {

}
