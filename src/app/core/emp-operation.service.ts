import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import{LeaveStatus} from './leavestatus';
import {AllLeave} from './AllLeave';
import {PayslipDetail} from './payslipdetails';


@Injectable({
  providedIn: 'root'
})
export class EmpOperationService {
 private apply_for_leave_url='http://139.59.14.81:3000/api/v1/createLeave';
 private all_my_leave_url='http://139.59.14.81:3000/api/v1/allmyleave';
public generatepayslip_url='http://139.59.14.81:3000/api/v1/payslip';

  constructor(private http:HttpClient) { }

apply_for_leave(from_date:string,to_date:string,reason:string,type:string):Observable<LeaveStatus>{
return this.http.post<LeaveStatus>(this.apply_for_leave_url,{leaveType:type,startDate:from_date,endDate:to_date,reason:reason});
}

all_my_leave(){
  return this.http.get<AllLeave>(this.all_my_leave_url);
}

generatepayslip(month:string,year:string){
  return this.http.get<PayslipDetail>(this.generatepayslip_url+ '/' +month + '/' +year);
  
}

}
