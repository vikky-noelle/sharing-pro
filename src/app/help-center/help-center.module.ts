import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpCenterComponent } from './help-center.component';
import { HelpCenterContentComponent } from './help-center-content/help-center-content.component';
import { HelpCenterHeaderComponent } from './help-center-header/help-center-header.component';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { NewHeaderModule } from '../newheader/newheader.module';
import { BackfooterModule } from '../backfooter/backfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    RouterModule,
    HeaderModule,
    NewHeaderModule,
    BackfooterModule
  ],
  declarations: [HelpCenterComponent,
    HelpCenterContentComponent,
    HelpCenterHeaderComponent,
  ],

    exports:[HelpCenterComponent,HelpCenterHeaderComponent,HelpCenterContentComponent]
})
export class HelpCenterModule {}


