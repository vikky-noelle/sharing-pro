import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveMatchCardComponent } from './live-match-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LiveMatchCardComponent
  ],
  exports: [
    LiveMatchCardComponent
  ]
})
export class LiveMatchCardModule { }
