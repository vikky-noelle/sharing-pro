import { NgModule , HostBinding} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenMatchCardComponent } from './open-match-card.component';
import { GalleryModule } from '../../gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    GalleryModule
  ],
  declarations: [
    OpenMatchCardComponent
  ],
  exports: [
    OpenMatchCardComponent
  ]
})
export class OpenMatchCardModule {
 }
