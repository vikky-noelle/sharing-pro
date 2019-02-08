import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,HeaderModule
  ],
  declarations: [HeaderComponent,AboutComponent],
  exports: [
    HeaderComponent,AboutComponent
  ]
})
export class AboutModule { }
