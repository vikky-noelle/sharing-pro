import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { GlobalNewsFeedComponent } from './global-news-feed.component';

const News_Routes: Routes = [
    {
        path: '',
        component: GlobalNewsFeedComponent
    }
];

export const NewsRoutes: ModuleWithProviders = RouterModule.forChild(News_Routes);