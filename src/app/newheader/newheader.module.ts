import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewheaderComponent } from './newheader.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NewheaderComponent
  ],
  exports: [
    NewheaderComponent
  ]
})
export class NewHeaderModule { }
  