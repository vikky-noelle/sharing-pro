import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { OpenMatchCardComponent } from '../open-cards/open-match-card/open-match-card.component';
import { OpenNewsCardComponent } from '../open-cards/open-news-card/open-news-card.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { AboutComponent } from '../about/about.component';
import { HelpCenterComponent } from '../help-center/help-center.component';
import { AddTopicComponent } from '../add-topic/add-topic.component';
import { AddQueAnsComponent } from '../add-que-ans/add-que-ans.component';

const App_Route: Routes = [
    
    
    {path:"addtopic",component:AddTopicComponent},
    {path:"HelpCenter/:topicid/HelpCenter/:topicname",component:AddTopicComponent},
    {path:"HelpCenter",component:HelpCenterComponent},
    {
        path: "HelpCenter/:topicId/:subtopicname/HelpCenter/:subtopicId",
        component: AddQueAnsComponent
      },
    {
        path: 'about',
        component:AboutComponent,
        
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
    }
]
@NgModule({
    imports: [
      RouterModule.forRoot(App_Route)
    ],
   exports: [RouterModule]
  })
  export class AppRouting { }
  




export const AppRoute: ModuleWithProviders =    RouterModule.forRoot(App_Route, { enableTracing: true });

