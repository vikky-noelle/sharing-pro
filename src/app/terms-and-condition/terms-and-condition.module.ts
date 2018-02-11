import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';
import { TermsAndConditionComponent } from './terms-and-condition.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule
  ],
  exports: [
  ],
  declarations: [
    TermsAndConditionComponent
  ]
})
export class TermsAndConditionModule { }
