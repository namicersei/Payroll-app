import { Injectable, NgModule } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {UserData} from './userdata'; //structure of the data



@Injectable()


export class ServicesService {

  private login_url='http://139.59.14.81:3000/api/v1/login';
  private changepass_url='http://139.59.14.81:3000/api/v1/sendchangepassmail';

  constructor(private http:HttpClient) { }


  login(username:string,password:string):Observable<UserData>{
    return this.http.post<UserData>(this.login_url,{loginEmail:username,loginPassword:password});

    }

  forgotpass(emailid:string):any{
    return this.http.post<any>(this.changepass_url,{handle:emailid})

  }

  }
 

