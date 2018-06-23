import { Component, OnInit } from '@angular/core';
import {EmpOperationService} from '../../core/emp-operation.service';
import {AllLeave} from '../../core/AllLeave';
import { LeaveArray } from '../../core/leavearray';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {
 leaveArray:LeaveArray[];

  constructor(private emp:EmpOperationService) { }

  ngOnInit() {
   this.emp.all_my_leave().subscribe((data:AllLeave)=>{
     if(data.error==false)
     {
       this.leaveArray=data.leaves;
     }
   })
  }

}
