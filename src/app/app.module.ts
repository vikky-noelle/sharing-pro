/* angular modules */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from 'ng2-scroll-to-el';

/* shared services */

import { PropertyService } from './shared/services/property.service';
import { GetService } from './shared/services/get.service';



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
import { AboutComponent } from './about/about.component';

import { HelpCenterComponent } from './help-center/help-center.component';
import { HelpCenterContentComponent } from './help-center/help-center-content/help-center-content.component';
import { HelpCenterFooterComponent } from './help-center/help-center-footer/help-center-footer.component';
import { HelpCenterHeaderComponent } from './help-center/help-center-header/help-center-header.component';
import { SendService } from './shared/services/send.service';
import { PostService } from './shared/services/post.service';
import { HttpModule } from '@angular/http';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { SubTopicComponent } from './sub-topic/sub-topic.component';
import { AddQueAnsComponent } from './add-que-ans/add-que-ans.component';



@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    AboutComponent,
    HelpCenterComponent,
    HelpCenterContentComponent,
    HelpCenterFooterComponent,
    HelpCenterHeaderComponent,
    AddTopicComponent,
    SubTopicComponent,
    AddQueAnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    HttpModule,
    HttpClientModule,
    OpenMatchCardModule,
    OpenNewsCardModule,
    ScrollToModule.forRoot()
    
  ],
  providers: [
    PropertyService,
    LocationService,
    GetService,
    SendService,
    PostService,
    TimeService,
    MatchDataService,
    NewsService,
    PopUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
