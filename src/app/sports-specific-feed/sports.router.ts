import { Routes, RouterModule } from '@angular/router';
import { SportsSpecificFeedComponent } from './sports-specific-feed.component';
import { ModuleWithProviders } from '@angular/core';
import { OpenMatchCardComponent } from '../open-cards/open-match-card/open-match-card.component';
import { OpenNewsCardComponent } from '../open-cards/open-news-card/open-news-card.component';
import { GlobalMatchFeedComponent } from '../global-feed/global-match-feed/global-match-feed.component';
const Sports_Router: Routes = [
    {
        path: '',
        component: SportsSpecificFeedComponent,
    }
];

export const SportsRouter: ModuleWithProviders = RouterModule.forChild(Sports_Router);
