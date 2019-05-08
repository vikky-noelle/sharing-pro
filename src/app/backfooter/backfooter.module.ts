import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackfooterComponent } from './backfooter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BackfooterComponent],
  exports:[BackfooterComponent]
})
export class BackfooterModule { }
