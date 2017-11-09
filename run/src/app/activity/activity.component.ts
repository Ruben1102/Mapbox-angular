import { Component, OnInit } from '@angular/core';

import { ActivityService } from '../activity.service';
import { IActivity } from '../shared/model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities : IActivity[];
  totalactivity: number;
  totaldistance: number;
  frstdate: Date;


  constructor(private activityservice: ActivityService) { }

  ngOnInit() {
  	this.activities = this.activityservice.getAllactivity();

  	this.totalactivity = this.activities.length;
  	this.totaldistance = 0;
  	for(let i=0; i<this.totalactivity; i++) {
  		this.totaldistance += this.activities[i].distance;
  	}
  	this.frstdate = this.activities[0].date;
  }

}
