import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../header/header.module';
import { BackfooterModule } from '../../backfooter/backfooter.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    BackfooterModule
  ],
  declarations: []
})
export class UserprofileModule { }
