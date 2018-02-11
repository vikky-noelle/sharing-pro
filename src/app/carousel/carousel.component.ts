import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  Renderer2,
  ViewChild
} from '@angular/core';
import { PropertyService } from '../shared/services/property.service';
import { ɵgetDOM } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class CarouselComponent implements OnInit {

  @ViewChild('carousel') carousel;
  constructor(
    private renderer: Renderer2,
    private recieveHeight: PropertyService,
    private sendBottom: PropertyService
  ) { }

  setTopMargin() {
    this.recieveHeight.ofHeader.subscribe(
      (data) => {
        this.renderer.setStyle(this.carousel.nativeElement, 'margin-top', data + 'px');
      }
    );
  }
  
  sendBottomOfCarousel() {
    const bottom = ɵgetDOM().getBoundingClientRect(this.carousel.nativeElement).bottom;
    this.sendBottom.ofCarousel.next(bottom);
  }

  ngOnInit() {
    this.setTopMargin();
    this.sendBottomOfCarousel();
  }
  @HostListener('window:resize', [])onresize() {
    this.setTopMargin();
    this.sendBottomOfCarousel();
  }
  @HostListener('window:scroll', [])onscroll() {
    this.sendBottomOfCarousel();
  }

}
