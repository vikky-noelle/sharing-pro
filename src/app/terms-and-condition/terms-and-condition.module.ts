import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';
import { TermsAndConditionComponent } from './terms-and-condition.component';
import { TermRouter } from './terms-and-condition.router';
import { BackfooterModule } from '../backfooter/backfooter.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule,
    TermRouter,
    BackfooterModule
  ],
  exports: [
    TermsAndConditionComponent
  ],
  declarations: [
    TermsAndConditionComponent
  ]
})
export class TermsAndConditionModule { }
