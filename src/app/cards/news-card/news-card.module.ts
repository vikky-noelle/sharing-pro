import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card.component';
import { RouterModule } from '@angular/router';
import { OpenNewsCardModule } from '../../open-cards/open-news-card/open-news-card.module';
import { OpenNewsCardComponent } from '../../open-cards/open-news-card/open-news-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OpenNewsCardModule
  ],
  declarations: [
    NewsCardComponent
  ],
  exports: [
    NewsCardComponent
  ],
  entryComponents: [
    OpenNewsCardComponent
  ]
})
export class NewsCardModule { }
