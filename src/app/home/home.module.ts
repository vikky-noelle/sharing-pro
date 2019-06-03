import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { CarouselModule } from '../carousel/carousel.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { GlobalOpenArenaFeedModule } from '../global-feed/global-open-arena-feed/global-open-arena-feed.module';
import { FooterModule } from '../footer/footer.module';
import { HomeComponent } from './home.component';
import { HomeRouter } from './home.router';
import { SideNavModule } from '../side-nav/side-nav.module';
import { HomeMatchFeedModule } from '../global-feed/home-match-feed/home-match-feed.module';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    HeaderModule,
    NavigationBarModule,
    GlobalOpenArenaFeedModule,
    FooterModule,
    HomeRouter,
    SideNavModule,
    HomeMatchFeedModule
  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }
