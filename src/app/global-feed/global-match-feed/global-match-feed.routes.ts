import { Routes, RouterModule } from '@angular/router';
import { GlobalMatchFeedComponent } from './global-match-feed.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

const Match_Routes: Routes = [
    {
        path: '',
        component: GlobalMatchFeedComponent
    }
];

export const MatchRoutes: ModuleWithProviders = RouterModule.forChild(Match_Routes);