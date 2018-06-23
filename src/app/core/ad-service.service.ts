import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Pays} from './Pays';
import {Leaves} from '../core/Leaves';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class AdServiceService {
 private url='http://139.59.14.81:3000/api/v1';

 private employee_id= new BehaviorSubject('default message');
 current_id= this.employee_id.asObservable();


  constructor(private http:HttpClient) { }
  allpay():Observable<Pays>{
  return this.http.get<Pays>(this.url+'/allpayslip');
}

allleave():Observable<Leaves>{
  return this.http.get<Leaves>(this.url+'/allleave');
}

edit_pay(id:string,bonus:number,deduction:number,limit:number):Observable<any>{
return this.http.post<any>(this.url+'/editpayslip'+ '/'+id,{deduction:deduction,bonus:bonus,medical:limit})


}
changeMessage(message: string) {
  this.employee_id.next(message);
}
}
