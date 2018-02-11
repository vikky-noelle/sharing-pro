import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsRouter } from './sports.router';
import { SportsSpecificFeedComponent } from './sports-specific-feed.component';
import { NewsCardModule } from '../cards/news-card/news-card.module';
import { MatchCardModule } from '../cards/match-card/match-card.module';
import { LiveMatchCardModule } from '../cards/live-match-card/live-match-card.module';
import { HeaderModule } from '../header/header.module';
import { CarouselModule } from '../carousel/carousel.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    SportsRouter,
    NewsCardModule,
    MatchCardModule,
    LiveMatchCardModule,
    HeaderModule,
    CarouselModule,
    NavigationBarModule,
    FooterModule
  ],
  declarations: [
    SportsSpecificFeedComponent
  ]
})
export class SportsSpecificFeedModule { }
