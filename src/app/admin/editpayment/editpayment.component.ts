import { Component, OnInit } from '@angular/core';
import{AdServiceService} from '../../core/ad-service.service';
import {  ActivatedRouteSnapshot } from '@angular/router';



@Component({
  selector: 'app-editpayment',
  templateUrl: './editpayment.component.html',
  styleUrls: ['./editpayment.component.css']
})
export class EditpaymentComponent implements OnInit {
employee_id="";
  constructor(private ad:AdServiceService) { }

  ngOnInit() {
     
    this.ad.current_id.subscribe(employee_id=>this.employee_id=employee_id);
    console.log(this.employee_id);   
  }

  pay_emp(employee_id,bonus:number,deduction:number,limit:number,routes:ActivatedRouteSnapshot)
  {


  }

}
