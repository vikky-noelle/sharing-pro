import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { AboutRouter } from './about.router';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { BlogCardModule } from '../cards/blog-card/blog-card.module';

import { NgMasonryGridModule } from 'ng-masonry-grid';
import { BackfooterModule } from '../backfooter/backfooter.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRouter,
    FooterModule,
    HeaderModule,
    BlogCardModule,
    NgMasonryGridModule,
    BackfooterModule
  ],
  declarations: [
    AboutComponent,
  ],
  exports: [
        AboutComponent
  ]
})
export class AboutModule { }
