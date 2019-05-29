import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMatchFeedComponent } from './home-match-feed.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeMatchFeedComponent],
  exports:[HomeMatchFeedComponent]
})
export class HomeMatchFeedModule { }
