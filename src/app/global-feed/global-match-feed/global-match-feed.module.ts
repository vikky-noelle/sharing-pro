import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatchCardModule } from '../../cards/match-card/match-card.module';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { GlobalMatchFeedComponent } from './global-match-feed.component';
import { MatchRoutes } from './global-match-feed.routes';
import { NavigationBarModule } from '../../navigation-bar/navigation-bar.module';
import { CarouselModule } from '../../carousel/carousel.module';

import { NgMasonryGridModule } from 'ng-masonry-grid';
import { SsMatchCardModule } from '../../cards/ss-match-card/ss-match-card.module';
import { BackfooterModule } from '../../backfooter/backfooter.module';
import { NewsidenavModule } from '../../newsidenav/newsidenav.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatchCardModule,
    HeaderModule,
    FooterModule,
    MatchRoutes,
    NavigationBarModule,
    NewsidenavModule,
    CarouselModule,
    NgMasonryGridModule,
    SsMatchCardModule,
    BackfooterModule,
    NewsidenavModule
  ],
  declarations: [
    GlobalMatchFeedComponent
  ],
  exports: [
    GlobalMatchFeedComponent
  ]
})
export class GlobalMatchFeedModule { }
