import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpCenterComponent } from './help-center.component';
import { FooterModule } from '../footer/footer.module';
import { HelpCenterRoute } from './help-center.router';

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    HelpCenterRoute
  ],
  declarations: [
    HelpCenterComponent
  ]
})
export class HelpCenterModule { }
