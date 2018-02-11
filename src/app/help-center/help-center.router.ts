import { Routes, RouterModule } from '@angular/router';
import { HelpCenterComponent } from './help-center.component';
import { ModuleWithProviders } from '@angular/core';

const HelpCenter_Routes: Routes = [
    {
        path: '',
        component: HelpCenterComponent,
    }
];

export const HelpCenterRoute: ModuleWithProviders = RouterModule.forChild(HelpCenter_Routes);
