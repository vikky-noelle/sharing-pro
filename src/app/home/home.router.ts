import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OpenNewsCardComponent } from '../open-cards/open-news-card/open-news-card.component';
import { OpenMatchCardComponent } from '../open-cards/open-match-card/open-match-card.component';

const Home_Router: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const HomeRouter = RouterModule.forChild(Home_Router);
