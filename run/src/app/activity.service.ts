import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import "rxjs/add/operator/mergeMap";

import { IActivity } from './shared/model';
import { Saved_Activities } from './shared/activites';
import { environment } from '../environments/environment';

var apiToken = environment.Api_Token;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [40, -80]
const defaultZoom: number = 8

@Injectable()
export class ActivityService {

  constructor() { }

  getAllactivity(): IActivity[] { 
  	return Saved_Activities.slice(0);
  }

  getActivity(id: number) {
  	return Saved_Activities.slice(0).find(run => run.id == id);
  }

  plotActivity(id: number){
    var myStyle = {
      "color": "#3949AB",
      "weight": 5,
      "opacity": 0.95
    };

    var map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);

    var customLayer = L.geoJson(null, {
      style: myStyle
    });

    var gpxLayer = omnivore.gpx(Saved_Activities.slice(0).find(run => run.id == id).gpxData, null, customLayer)
    .on('ready', function() {
      map.fitBounds(gpxLayer.getBounds());
    }).addTo(map);
    map.scrollWheelZoom.disable();
	}

}
