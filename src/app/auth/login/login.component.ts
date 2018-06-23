import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';
import { ServicesService } from '../../core/services.service';
import {UserData} from '../../core/userdata';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { LocalStorageService } from '../../core/local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ServicesService,LocalStorageService]
})
export class LoginComponent implements OnInit {

  private inputname="";
  private  pass="";
  returnUrl:string="";


  constructor(private userService:ServicesService, private router:Router,private localstorage:LocalStorageService) { }


  ngOnInit() {
 
  }

//login part
authenticate(){
  //implement validation
  this.userService.login(this.inputname,this.pass).subscribe(
    (data:UserData) => {
        this.localstorage.setToken(data.token);

       const details:any=jwt_decode(data.token);
       console.log(data);
       console.log(details);

  
       if(details.isAdmin)
       {
         console.log("hi")
        this.router.navigate(['/admin']);
       }
       else{
         console.log("ji")
         this.router.navigate(['/employee']);
       }

    } 
  )
}
}
