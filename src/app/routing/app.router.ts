
import { TeamprofileAboutComponent } from '../profile/teamprofile/teamprofile-about/teamprofile-about.component';
import { TeamprofileComponent } from '../profile/teamprofile/teamprofile.component';
import { LocalitypageComponent } from './../localitypage/localitypage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { OpenMatchCardComponent } from '../open-cards/open-match-card/open-match-card.component';
import { OpenNewsCardComponent } from '../open-cards/open-news-card/open-news-card.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { AboutComponent } from '../about/about.component';
import { HelpCenterComponent } from '../help-center/help-center.component';
import { AddTopicComponent } from '../add-topic/add-topic.component';
import { AddQueAnsComponent } from '../add-que-ans/add-que-ans.component';
import { HomeComponent } from '../home/home.component';
import { NewspageComponent } from '../newspage/newspage.component';
import { ApplicationComponent } from '../application/application.component';
import { LivedataComponent } from '../livedata/livedata.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { OurteamComponent } from '../ourteam/ourteam.component';
// import { FirebaseComponent } from '../firebase/firebase.component';
import { TeamviewComponent } from '../teamview/teamview.component';
import { OpenHomeMatchCardComponent } from '../open-cards/open-home-match-card/open-home-match-card.component';
import { UserprofileComponent } from '../profile/userprofile/userprofile.component';
import { TeamprofileMatchesComponent } from '../profile/teamprofile/teamprofile-matches/teamprofile-matches.component';
import { UserprofileMatchesComponent } from '../profile/userprofile/userprofile-matches/userprofile-matches.component';
import { UserprofileTeamsComponent } from '../profile/userprofile/userprofile-teams/userprofile-teams.component';
import { UserprofilePlaymatesComponent } from '../profile/userprofile/userprofile-playmates/userprofile-playmates.component';
import { UserprofileAboutComponent } from '../profile/userprofile/userprofile-about/userprofile-about.component';


const App_Route: Routes = [
    
    // {path:"firebase",component:FirebaseComponent},
    
    {
        path: 'teamprofile/:name',            
        component: TeamprofileComponent,
        children: [                          
            {
                path:'About',
                component: TeamprofileAboutComponent
            },
            {
                path:'Matches',
                component: TeamprofileMatchesComponent
            },
        ]
    },
    // {path:'userprofile/:MatchStarterId',component:UserprofileComponent},
    {
        path:'userprofile/:MatchStarterId',
        component:UserprofileComponent,
        children:[
            {
                path: '**', redirectTo: 'userprofile/about', pathMatch: 'full'
            },
            {
                path:'matches',
                component:UserprofileMatchesComponent
            },
            {
                path:'teams',
                component:UserprofileTeamsComponent
            },
            {
                path:'playmates',
                component:UserprofilePlaymatesComponent
            },
            {
                path:'about',
                component:UserprofileAboutComponent
            }
        ]
    },
    // {path:':user_id',component:UserprofilePlaymatesComponent},
    {path:"opencard/:feedid",component:OpenHomeMatchCardComponent},
    {path:"ourTeam",component:OurteamComponent},
    {path:"contactus",component:ContactUsComponent},
    {path:"live",component:LivedataComponent},
    {path:"addtopic",component:AddTopicComponent},
    {path:"HelpCenter",component:HelpCenterComponent},
    {path:"Helpcenter/:topicname",component:HelpCenterComponent},
    {path: "team",component:TeamviewComponent},
    // {path: 'teamprofile', component:TeamprofileComponent},
    {path: "locality", component:LocalitypageComponent},
    {path: 'news', component:NewspageComponent},
    {
        path: "news/:topic", 
        component:NewspageComponent
    },
    {
        path:"application",
        component:ApplicationComponent  
      },

    {
        path: "HelpCenter/:subtopicname",
        component: AddQueAnsComponent
      },
      {
          path: "HelpCenter/:subtopicname/:question",
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
        path: 'OpenArena/:topic',
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
    
]
@NgModule({
    imports: [
      RouterModule.forRoot(App_Route, {
        anchorScrolling: 'enabled'
    },),
    ],
   exports: [RouterModule]
  })
  export class AppRouting { }
  

export const AppRoute: ModuleWithProviders =    RouterModule.forRoot(App_Route, { enableTracing: true });

