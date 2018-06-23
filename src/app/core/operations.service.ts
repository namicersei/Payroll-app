import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {NewUser} from './newuser';

@Injectable()
export class OperationsService {
  private createuser_url='http://139.59.14.81:3000/api/v1/createuser';

  constructor(private http:HttpClient) {
     
   }
  
   
  createuser(first:string,last:string,email:string,desig:string,casualleave:number,priviledged:number,basicpay:number,address:string):Observable<NewUser>{
    return this.http.post<NewUser>(this.createuser_url,{first:first,last:last,email:email,designation:desig,casualleave:casualleave,privilledgedleave:priviledged,baseSalary:basicpay,address:address});

    }
   
  

}
