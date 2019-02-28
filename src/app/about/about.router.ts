import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const About_Router: Routes = [
    {
        path: '',
        component: AboutComponent

    }
];

export const AboutRouter: ModuleWithProviders = RouterModule.forChild(About_Router);
