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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { TeamprofileComponent } from './profile/teamprofile/teamprofile.component';
import { UserprofileComponent } from './profile/userprofile/userprofile.component';
import { TeamprofileAboutComponent } from './profile/teamprofile/teamprofile-about/teamprofile-about.component';
import { TeamprofileMatchesComponent } from './profile/teamprofile/teamprofile-matches/teamprofile-matches.component';
import { UserprofileAboutComponent } from './profile/userprofile/userprofile-about/userprofile-about.component';
import { UserprofileTeamsComponent } from './profile/userprofile/userprofile-teams/userprofile-teams.component';
import { UserprofilePlaymatesComponent } from './profile/userprofile/userprofile-playmates/userprofile-playmates.component';
import { UserprofileMatchesComponent } from './profile/userprofile/userprofile-matches/userprofile-matches.component';
import { LocalityComponent } from './profile/locality/locality.component';


@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    AddTopicComponent,
    AddQueAnsComponent,
    // NewsidenavComponent,  
    ApplicationComponent,
    LivedataComponent,
    OurteamComponent,
    // FirebaseComponent,
    TeamviewComponent,
    LocalitypageComponent,
    NewspageComponent,
    ContactUsComponent,
    TeamprofileComponent,
    UserprofileComponent,
    TeamprofileAboutComponent,
    TeamprofileMatchesComponent,
    UserprofileAboutComponent,
    UserprofileTeamsComponent,
    UserprofilePlaymatesComponent,
    UserprofileMatchesComponent,
    LocalityComponent
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
