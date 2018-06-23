import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';
import * as jwt_decode from "jwt-decode";



@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
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
