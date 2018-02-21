/* angular modules */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/* shared services */

import { PropertyService } from './shared/services/property.service';
import { GetService } from './shared/services/get.service';
import { PostService } from './shared/services/post.service';


import { AppRoute } from './routing/app.router';

import { AppComponent } from './app.component';
import { TimeService } from './shared/services/time.service';
import { LocationService } from './shared/services/location.service';
import { MatchDataService } from './shared/services/match-data.service';
import { NewsService } from './shared/services/news.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    HttpClientModule,
  ],
  providers: [
    PropertyService,
    LocationService,
    GetService,
    PostService,
    TimeService,
    MatchDataService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
