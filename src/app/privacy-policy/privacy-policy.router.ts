import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';

const privacy_Routes: Routes = [
    {
        path: '',
        component: PrivacyPolicyComponent
    }
];

export const PrivacyRouter = RouterModule.forChild(privacy_Routes);
