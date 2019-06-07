import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { BackfooterModule } from '../../backfooter/backfooter.module';
import { HomeMatchFeedModule } from '../../global-feed/home-match-feed/home-match-feed.module';
import { OpenHomeMatchCardComponent } from './open-home-match-card.component';
import { NewsidenavModule } from '../../newsidenav/newsidenav.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    BackfooterModule,
    HomeMatchFeedModule,
    NewsidenavModule
  ],
  declarations: [OpenHomeMatchCardComponent],
  exports:[OpenHomeMatchCardComponent]
})
export class OpenHomeMatchCardModule { }
