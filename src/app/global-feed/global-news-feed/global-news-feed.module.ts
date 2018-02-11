import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardModule } from '../../cards/news-card/news-card.module';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { NewsRoutes } from './global-news-feed.routes';
import { NavigationBarModule } from '../../navigation-bar/navigation-bar.module';
import { GlobalNewsFeedComponent } from './global-news-feed.component';
import { CarouselModule } from '../../carousel/carousel.module';

@NgModule({
  imports: [
    CommonModule,
    NewsCardModule,
    HeaderModule,
    FooterModule,
    NewsRoutes,
    NavigationBarModule,
    CarouselModule
  ],
  declarations: [
    GlobalNewsFeedComponent
  ]
})
export class GlobalNewsFeedModule { }
