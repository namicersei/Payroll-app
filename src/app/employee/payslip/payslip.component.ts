import { Component, OnInit } from '@angular/core';
import {EmpOperationService} from '../../core/emp-operation.service';
import {PayslipDetail} from '../../core/payslipdetails';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  showpayslip:boolean;
  payslip:any="";
  baseSalary;

  constructor(private emp:EmpOperationService) { this.showpayslip=false;}

  ngOnInit() {
  }

generate(month:string,year:string){
// console.log(this.emp.generatepayslip_url);

this.emp.generatepayslip(month,year).subscribe((data:PayslipDetail)=>{
this.payslip=data.payslip;
this.baseSalary=data.payslip._userId.baseSalary;
});

this.showpayslip = true;
console.log(this.showpayslip);
  }

}
