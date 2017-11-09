import { Routes } from '@angular/router';

import { ActivityComponent } from './activity/activity.component';
import { MapComponent } from './map/map.component';

export const approute: Routes = [
	{ path: "runs", component: ActivityComponent },
	{ path: "run/:id", component: MapComponent },
	{ path: "", redirectTo: "/runs", pathMatch: 'full' }
]