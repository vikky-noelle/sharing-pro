import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const Home_Router: Routes = [
    {
        path: '',
        component: HomeComponent
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
    }
];

export const HomeRouter = RouterModule.forChild(Home_Router);
