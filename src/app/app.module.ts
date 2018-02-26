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
import { PopUpComponent } from './pop-up/pop-up.component';
import { PopUpService } from './shared/services/pop-up.service';
import { OpenMatchCardModule } from './open-cards/open-match-card/open-match-card.module';
import { OpenNewsCardModule } from './open-cards/open-news-card/open-news-card.module';
import { ActivationStart } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    HttpClientModule,
    OpenMatchCardModule,
    OpenNewsCardModule
  ],
  providers: [
    PropertyService,
    LocationService,
    GetService,
    PostService,
    TimeService,
    MatchDataService,
    NewsService,
    PopUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
