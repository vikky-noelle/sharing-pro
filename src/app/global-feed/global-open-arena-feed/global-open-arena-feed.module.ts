import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchCardModule } from '../../cards/match-card/match-card.module';
import { NewsCardModule } from '../../cards/news-card/news-card.module';
import { LiveMatchCardModule } from '../../cards/live-match-card/live-match-card.module';
import { GlobalOpenArenaFeedComponent } from './global-open-arena-feed.component';
import { RouterModule } from '@angular/router';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { SsMatchCardModule } from '../../cards/ss-match-card/ss-match-card.module';
import { SideNavModule } from '../../side-nav/side-nav.module';

@NgModule({
  imports: [
    CommonModule,
    MatchCardModule,
    NewsCardModule,
    LiveMatchCardModule,
    RouterModule,
    NgMasonryGridModule,
    SsMatchCardModule,
    SideNavModule
  ],
  declarations: [
    GlobalOpenArenaFeedComponent
  ],
  exports: [
    GlobalOpenArenaFeedComponent
  ]
})
export class GlobalOpenArenaFeedModule { }
