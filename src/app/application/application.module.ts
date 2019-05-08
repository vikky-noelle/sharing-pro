import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackfooterModule } from '../backfooter/backfooter.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BackfooterModule
  ],
  declarations: []
})
export class ApplicationModule { }
