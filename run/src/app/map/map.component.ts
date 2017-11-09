import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ActivityService } from '../activity.service';
import { IActivity } from '../shared/model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private activityservice: ActivityService,
        	  private route: ActivatedRoute,) { }

  	activity: any;
 	nid: number;
	activityName: any;
	activityDate: any;
	activityDistance: any;
	activityComments: any;

  ngOnInit() {
  	this.nid = +this.route.snapshot.params['id'];
  	this.activity = this.activityservice.getActivity(this.nid);
  	this.activityName = this.activity.name;
  	this.activityComments = this.activity.comments;
  	this.activityDistance = this.activity.distance;
  	this.activityDate = this.activity.date;
  	console.log(this.nid, this.activity);
  }

  ngAfterViewInit() {
  	this.activityservice.plotActivity(this.nid);
  }

}
