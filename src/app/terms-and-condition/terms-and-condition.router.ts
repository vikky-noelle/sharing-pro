import { Routes, RouterModule } from '@angular/router';
import { TermsAndConditionComponent } from './terms-and-condition.component';

const term_Routes: Routes = [
    {
        path: '',
        component: TermsAndConditionComponent
    }
];

export const TermRouter = RouterModule.forChild(term_Routes);
