import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { AboutRouter } from './about.router';
import { FooterModule } from '../footer/footer.module';
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';
import { BlogCardModule } from '../cards/blog-card/blog-card.module';

import { NgMasonryGridModule } from 'ng-masonry-grid';

@NgModule({
  imports: [
    CommonModule,
    
    AboutRouter,
    FooterModule,
    HeaderModule,
    BlogCardModule,
    NgMasonryGridModule
  ],
  declarations: [
    AboutComponent,
  ],
  exports: [
        AboutComponent
  ]
})
export class AboutModule { }
