import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { MapComponent } from './map/map.component';
import { ActivityService } from './activity.service';
import { approute } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approute)
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
