/* angular modules */
import { CookieService } from 'ngx-cookie-service';
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

import { SendService } from './shared/services/send.service';
import { PostService } from './shared/services/post.service';
import { HttpModule } from '@angular/http';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddQueAnsComponent } from './add-que-ans/add-que-ans.component';
import { LinkService } from './shared/services/link.service';
import { ApplicationComponent } from './application/application.component';

import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { FooterModule } from './footer/footer.module';
import { HelpCenterModule } from './help-center/help-center.module';
import { SeoService } from './shared/services/seo.service';
// import { MessagingService } from './shared/services/messaging.service';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireMessagingModule } from '@angular/fire/messaging';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { AsyncPipe } from '@angular/common';
// import {AngularFirestoreModule} from 'angularfire2/firestore';
import { LivedataComponent } from './livedata/livedata.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { BackfooterModule } from './backfooter/backfooter.module';
import { OurteamComponent } from './ourteam/ourteam.component';
// import { FirebaseComponent } from './firebase/firebase.component';
import { SsMatchCardModule } from './cards/ss-match-card/ss-match-card.module';
import { NewHeaderModule } from './newheader/newheader.module';
import { TeamviewComponent } from './teamview/teamview.component';
import { NewsidenavModule } from './newsidenav/newsidenav.module';
import { LocalitypageComponent } from './localitypage/localitypage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { EventEmiterService } from './shared/services/event.emiter.service';
import { OpenHomeMatchCardModule } from './open-cards/open-home-match-card/open-home-match-card.module';
import { InteractionService } from './shared/services/interaction.service';


@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    AddTopicComponent,
    AddQueAnsComponent,
    // NewsidenavComponent,  
    ApplicationComponent,
    LivedataComponent,
    ContactUsComponent,
    OurteamComponent,
    // FirebaseComponent,
    TeamviewComponent,
    LocalitypageComponent,
    NewspageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'sport-social'}),
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBhy2_i75_m05Chs918Q5UKG2fHxMlhia4'
   }),
    AppRoute,
    HttpModule,
    HttpClientModule,
    OpenMatchCardModule,
    OpenNewsCardModule,
    HomeModule,
    HeaderModule,
    AboutModule,
    NewsidenavModule,
    FooterModule,
    HelpCenterModule,
    ScrollToModule.forRoot(),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    // AngularFireMessagingModule,
    // AngularFireModule.initializeApp(environment.firebase,'sport-social'),
    // AngularFirestoreModule,
    BackfooterModule,
    SsMatchCardModule,
    NewHeaderModule,
    OpenHomeMatchCardModule
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
    SeoService,
    EventEmiterService,
    InteractionService,
    // MessagingService,
    AsyncPipe,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
