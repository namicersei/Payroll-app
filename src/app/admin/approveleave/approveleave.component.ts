import { Component, OnInit } from '@angular/core';
import{AdServiceService} from '../../core/ad-service.service';

import {Leaves} from '../../core/Leaves';
import {Leave} from '../../core/Leave';
 
@Component({
  selector: 'app-approveleave',
  templateUrl: './approveleave.component.html',
  styleUrls: ['./approveleave.component.css']
})
export class ApproveleaveComponent implements OnInit {

leave:Leave[];
track:boolean;


  constructor(private ad:AdServiceService) { 
    this.track=false;
  }

  

  ngOnInit() {
    this.ad.allleave().subscribe((data:Leaves)=>{
      if(data.error==false)
      {
      this.leave=data.leaves;
    
      }
          });
  }


  //To change buttons
  changeTrack(){
    this.track=!this.track;
  }

}
