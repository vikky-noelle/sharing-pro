import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyRouter } from './privacy-policy.router';
import { BackfooterModule } from '../backfooter/backfooter.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule,
    PrivacyRouter,
    BackfooterModule
  ],
  exports: [
    PrivacyPolicyComponent
  ],
  declarations: [
    PrivacyPolicyComponent
  ]
})
export class PrivacyPolicyModule { }
