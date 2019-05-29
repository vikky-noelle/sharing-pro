import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { CarouselModule } from '../carousel/carousel.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { GlobalOpenArenaFeedModule } from '../global-feed/global-open-arena-feed/global-open-arena-feed.module';
import { BackfooterModule } from '../backfooter/backfooter.module';
import { HomeComponent } from './home.component';
import { HomeRouter } from './home.router';
import { SideNavModule } from '../side-nav/side-nav.module';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    HeaderModule,
    NavigationBarModule,
    GlobalOpenArenaFeedModule,
    BackfooterModule,
    HomeRouter,
    SideNavModule
  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }
