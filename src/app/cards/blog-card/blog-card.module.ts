import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BlogCardComponent
  ],
  exports: [
    BlogCardComponent
  ]
})
export class BlogCardModule { }
