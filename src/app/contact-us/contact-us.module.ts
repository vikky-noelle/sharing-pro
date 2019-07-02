import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import { Contactus2 } from '../contactus2';
import { NgForm, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
  
  ],
  declarations: [],
  exports:[]
})
export class ContactUsModule { }
