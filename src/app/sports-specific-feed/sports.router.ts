import { Routes, RouterModule } from '@angular/router';
import { SportsSpecificFeedComponent } from './sports-specific-feed.component';
import { ModuleWithProviders } from '@angular/core';

const Sports_Router: Routes = [
    {
        path: '',
        component: SportsSpecificFeedComponent
    }
];

export const SportsRouter: ModuleWithProviders = RouterModule.forChild(Sports_Router);
