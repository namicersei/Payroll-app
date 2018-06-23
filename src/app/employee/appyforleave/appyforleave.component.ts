import { Component, OnInit } from '@angular/core';
import {EmpOperationService} from '../../core/emp-operation.service';
import { LeaveStatus } from '../../core/leavestatus';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appyforleave',
  templateUrl: './appyforleave.component.html',
  styleUrls: ['./appyforleave.component.css']
})
export class AppyforleaveComponent implements OnInit {
 
  Message=false;  //to display the message box

  constructor(private emp:EmpOperationService,private router:Router) { }

  ngOnInit() {
  }
 
  apply(from:string,to:string,reason:string,type:string){
    console.log(from);
    console.log(to);

    this.emp.apply_for_leave(from,to,reason,type).subscribe((data:LeaveStatus)=>{
     
     if(data.error==false)
     {
       this.Message=true;
      //  this.router.navigate(['/leavestatus']);
     }
    })
  }


}
