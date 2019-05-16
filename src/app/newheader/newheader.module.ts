import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewHeaderComponent } from './newheader.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NewHeaderComponent
  ],
  exports: [
    NewHeaderComponent
  ]
})
export class NewHeaderModule { }
