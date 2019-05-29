import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMatchFeedComponent } from './home-match-feed.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { SideNavModule } from '../../side-nav/side-nav.module';
import { SsMatchCardModule } from '../../cards/ss-match-card/ss-match-card.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    SideNavModule,
    SsMatchCardModule
  ],
  declarations: [HomeMatchFeedComponent],
  exports:[HomeMatchFeedComponent]
})
export class HomeMatchFeedModule { }
