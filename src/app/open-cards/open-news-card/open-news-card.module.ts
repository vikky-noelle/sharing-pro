import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenNewsCardComponent } from './open-news-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OpenNewsCardComponent
  ],
  exports: [
    OpenNewsCardComponent
  ]
})
export class OpenNewsCardModule { }
