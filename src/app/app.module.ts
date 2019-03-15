/* angular modules */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from 'ng2-scroll-to-el';

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
import { LinkService } from './shared/services/link.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GlobalOpenArenaFeedComponent } from './global-feed/global-open-arena-feed/global-open-arena-feed.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationComponent } from './application/application.component';
import { SportsSpecificFeedComponent } from './sports-specific-feed/sports-specific-feed.component';
import { BlogCardComponent } from './cards/blog-card/blog-card.component';
import { LiveMatchCardComponent } from './cards/live-match-card/live-match-card.component';
import { MatchCardComponent } from './cards/match-card/match-card.component';
import { NewsCardComponent } from './cards/news-card/news-card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GlobalNewsFeedComponent } from './global-feed/global-news-feed/global-news-feed.component';
import { GlobalMatchFeedComponent } from './global-feed/global-match-feed/global-match-feed.component';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { FooterModule } from './footer/footer.module';
import { HelpCenterModule } from './help-center/help-center.module';
import { SeoService } from './shared/services/seo.service';


@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    AddTopicComponent,
    SubTopicComponent,
    AddQueAnsComponent,
    ApplicationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoute,
    HttpModule,
    HttpClientModule,
    OpenMatchCardModule,
    OpenNewsCardModule,
    HomeModule,
    HeaderModule,
    AboutModule,
    FooterModule,
    HelpCenterModule,
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
    PopUpService,
    LinkService,
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
