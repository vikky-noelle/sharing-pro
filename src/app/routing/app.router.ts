import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const App_Route: Routes = [
  {
    path: 'helpCenter',
    loadChildren: 'app/help-center/help-center.module#HelpCenterModule'
  },
  {
    path: 'Terms Of Service',
    loadChildren: 'app/terms-and-condition/terms-and-condition.module#TermsAndConditionModule'
  },
  {
    path: 'Privacy Policy',
    loadChildren: 'app/privacy-policy/privacy-policy.module#PrivacyPolicyModule'
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule',
  },
];




export const AppRoute: ModuleWithProviders =    RouterModule.forRoot(App_Route, { enableTracing: true });

