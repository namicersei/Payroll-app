import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../core/operations.service';

import {NewUser} from '../../core/newuser';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css'],
  providers:[OperationsService]
})


export class CreateaccountComponent implements OnInit {
  
  created=false;

  constructor(private op:OperationsService) { }
  ngOnInit() {
  }

  create_user(first:string,last:string,email:string,desig:string,casualleave:number,priviledged:number,basicpay:number,address:string){
  
  // this.name.first=this.firstname;   
  //   this.name.last=this.lastname;
  //   console.log(this.name.last);
   this.op.createuser(first,last,email,desig,casualleave,priviledged,basicpay,address).subscribe((data:NewUser)=>
  {
   if(data.error==false)
   {
    this.created=!this.created;
   }
  }
  
  )}

}
