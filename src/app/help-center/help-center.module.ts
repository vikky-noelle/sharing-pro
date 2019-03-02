import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpCenterComponent } from './help-center.component';
import { HelpCenterContentComponent } from './help-center-content/help-center-content.component';
import { HelpCenterHeaderComponent } from './help-center-header/help-center-header.component';
import { FooterComponent } from '../footer/footer.component';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FooterModule
  ],
  declarations: [HelpCenterComponent,
    HelpCenterContentComponent,
    HelpCenterHeaderComponent,
    
  ],

    exports:[]
})
export class HelpCenterModule { }


