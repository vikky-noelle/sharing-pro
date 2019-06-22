import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMatchFeedComponent } from './home-match-feed.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { SsMatchCardModule } from '../../cards/ss-match-card/ss-match-card.module';
import { BackfooterModule } from '../../backfooter/backfooter.module';
import { NewsidenavModule } from '../../newsidenav/newsidenav.module';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    NewsidenavModule,
    SsMatchCardModule,
    BackfooterModule,
    MalihuScrollbarModule.forRoot(),
  ],
  declarations: [HomeMatchFeedComponent],
  exports:[HomeMatchFeedComponent]
})
export class HomeMatchFeedModule { }
