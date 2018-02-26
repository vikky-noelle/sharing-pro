import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from './match-card.component';
import { RouterModule } from '@angular/router';
import { OpenMatchCardModule } from '../../open-cards/open-match-card/open-match-card.module';
import { OpenMatchCardComponent } from '../../open-cards/open-match-card/open-match-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OpenMatchCardModule
  ],
  declarations: [
    MatchCardComponent
  ],
  exports: [
    MatchCardComponent
  ]
})
export class MatchCardModule { }
