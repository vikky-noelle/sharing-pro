import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpCenterComponent } from './help-center.component';
import { HelpCenterContentComponent } from './help-center-content/help-center-content.component';
import { HelpCenterHeaderComponent } from './help-center-header/help-center-header.component';
import { FooterComponent } from '../footer/footer.component';
import { FooterModule } from '../footer/footer.module';
import { HelpCenterFooterComponent } from './help-center-footer/help-center-footer.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { BackfooterModule } from '../backfooter/backfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    RouterModule,
    HeaderModule,
    BackfooterModule
  ],
  declarations: [HelpCenterComponent,
    HelpCenterContentComponent,
    HelpCenterHeaderComponent,
    HelpCenterFooterComponent
  ],

    exports:[HelpCenterHeaderComponent]
})
export class HelpCenterModule {}


