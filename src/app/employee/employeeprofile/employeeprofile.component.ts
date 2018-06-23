import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../core/local-storage.service';
import * as jwt_decode from "jwt-decode";


@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {
  token:any;
  username:string;
  desig:string;
  constructor(private localstorage:LocalStorageService) { }

  ngOnInit() {
    this.token=this.localstorage.getToken();
    const details=jwt_decode(this.token);
    console.log(details);
    this.username=details.name;
   this.desig=details.designation;
  }


  
}
