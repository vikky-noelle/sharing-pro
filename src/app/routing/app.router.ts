import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { OpenMatchCardComponent } from '../open-cards/open-match-card/open-match-card.component';
import { OpenNewsCardComponent } from '../open-cards/open-news-card/open-news-card.component';

const App_Route: Routes = [
    {
        path: 'helpCenter',
        loadChildren: 'app/help-center/help-center.module#HelpCenterModule'
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
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
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
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];




export const AppRoute: ModuleWithProviders =    RouterModule.forRoot(App_Route, { enableTracing: true });

