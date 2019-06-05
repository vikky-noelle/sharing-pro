import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsidenavComponent } from './newsidenav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NewsidenavComponent
  ],
  exports:[
    NewsidenavComponent
  ]
})
export class NewsidenavModule { }
