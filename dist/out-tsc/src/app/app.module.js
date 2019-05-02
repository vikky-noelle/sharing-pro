/* angular modules */
import * as tslib_1 from "tslib";
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
import { SubTopicComponent } from './sub-topic/sub-topic.component';
import { AddQueAnsComponent } from './add-que-ans/add-que-ans.component';
import { LinkService } from './shared/services/link.service';
import { ApplicationComponent } from './application/application.component';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { FooterModule } from './footer/footer.module';
import { HelpCenterModule } from './help-center/help-center.module';
import { SeoService } from './shared/services/seo.service';
import { MessagingService } from './shared/services/messaging.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AsyncPipe } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LivedataComponent } from './livedata/livedata.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                PopUpComponent,
                AddTopicComponent,
                SubTopicComponent,
                AddQueAnsComponent,
                ApplicationComponent,
                LivedataComponent,
            ],
            imports: [
                BrowserModule.withServerTransition({ appId: 'sport-social' }),
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
                ScrollToModule.forRoot(),
                AngularFireDatabaseModule,
                AngularFireAuthModule,
                AngularFireMessagingModule,
                AngularFireModule.initializeApp(environment.firebase, 'sport-social'),
                AngularFirestoreModule,
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
                MessagingService,
                AsyncPipe
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map