import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OpenMatchCardComponent } from '../open-cards/open-match-card/open-match-card.component';
import { OpenNewsCardComponent } from '../open-cards/open-news-card/open-news-card.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { AboutComponent } from '../about/about.component';
import { HelpCenterComponent } from '../help-center/help-center.component';
import { AddTopicComponent } from '../add-topic/add-topic.component';
import { AddQueAnsComponent } from '../add-que-ans/add-que-ans.component';
import { HomeComponent } from '../home/home.component';
import { ApplicationComponent } from '../application/application.component';
import { LivedataComponent } from '../livedata/livedata.component';
var App_Route = [
    { path: "live", component: LivedataComponent },
    { path: "addtopic", component: AddTopicComponent },
    { path: "HelpCenter", component: HelpCenterComponent },
    { path: "Helpcenter/:topicname", component: HelpCenterComponent },
    {
        path: "application",
        component: ApplicationComponent
    },
    {
        path: "HelpCenter/:topicId/:subtopicname/:subtopicId",
        component: AddQueAnsComponent
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'Terms Of Service',
        loadChildren: 'app/terms-and-condition/terms-and-condition.module#TermsAndConditionModule',
    },
    {
        path: 'Privacy Policy',
        loadChildren: 'app/privacy-policy/privacy-policy.module#PrivacyPolicyModule'
    },
    {
        path: 'OpenArena',
        loadChildren: 'app/global-feed/global-match-feed/global-match-feed.module#GlobalMatchFeedModule'
    },
    {
        path: 'AroundTheWorld',
        loadChildren: 'app/global-feed/global-news-feed/global-news-feed.module#GlobalNewsFeedModule'
    },
    {
        path: ':sport',
        loadChildren: 'app/sports-specific-feed/sports-specific-feed.module#SportsSpecificFeedModule'
    },
    {
        path: ':id',
        component: OpenMatchCardComponent,
        outlet: 'Match'
    },
    {
        path: ':id',
        component: OpenNewsCardComponent,
        outlet: 'News'
    },
    {
        path: 'PopUp',
        component: PopUpComponent,
        outlet: 'AppDownload'
    },
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(App_Route)
            ],
            exports: [RouterModule]
        })
    ], AppRouting);
    return AppRouting;
}());
export { AppRouting };
export var AppRoute = RouterModule.forRoot(App_Route, { enableTracing: true });
//# sourceMappingURL=app.router.js.map