import { Component, OnInit } from '@angular/core';
import {Pays} from '../../core/Pays';
import{AdServiceService} from '../../core/ad-service.service';
import {Payslips} from '../../core/Payslips';


@Component({
  selector: 'app-payemployee',
  templateUrl: './payemployee.component.html',
  styleUrls: ['./payemployee.component.css']
})
export class PayemployeeComponent implements OnInit {
  employee_id="";
  pays:Payslips[];


  constructor(private ad:AdServiceService) { }

  ngOnInit() {
  
      this.ad.allpay().subscribe((data)=>{
      if(data.error==false){
      console.log(data);      
      this.pays=data.payslips;
      }
      })
      this.ad.current_id.subscribe(employee_id=>this.employee_id=employee_id);      

    }

    update_id(id:string){
      this.employee_id=id;
      console.log(this.employee_id);
    }

  }




