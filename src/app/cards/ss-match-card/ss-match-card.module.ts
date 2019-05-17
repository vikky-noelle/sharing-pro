import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SsMatchCardComponent } from './ss-match-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SsMatchCardComponent],
  exports:[SsMatchCardComponent]
})
export class SsMatchCardModule { }
