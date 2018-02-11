import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule
  ],
  declarations: [
    PrivacyPolicyComponent
  ]
})
export class PrivacyPolicyModule { }
