import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../core/services.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
Emailid:string="";

  constructor(private service:ServicesService) { }

  ngOnInit() {
  }

  changepass(){
    // console.log(this.Emailid);
    this.service.forgotpass(this.Emailid).subscribe((data:any)=>{
      alert("A link to change the password has been sent to the given email id!");
    })
  }

}
