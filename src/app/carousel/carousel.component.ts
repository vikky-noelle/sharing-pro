import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  Renderer2,
  ViewChild
} from '@angular/core';
import { PropertyService } from '../shared/services/property.service';
import { ɵgetDOM, Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class CarouselComponent implements OnInit {

  @ViewChild('carousel') carousel;
  title=" Around the World | Sports Social ";
  constructor(
    private renderer: Renderer2,
    private recieveHeight: PropertyService,
    private sendBottom: PropertyService,
    private pagetitle:Title,
    private metaservice:Meta
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
    // this.pagetitle.setTitle(this.title);
    // this.metaservice.updateTag({name:'title',contetn:this.title});
    // this.metaservice.updateTag({name:'keywords',content:"Sports news from around the world,latest sports news,latest cricket news,football news,tennis news,pro kabbadi news,Hocket news"});
    // this.metaservice.updateTag({name:'meta-description',content:"Sports Social Around the World Provides the latest news and stories in sports,sports trends,sports business, international tournaments, cricket news,football news, tennis news, hockey news etc. stay tuned"});
  }
  @HostListener('window:resize', [])onresize() {
    this.setTopMargin();
    this.sendBottomOfCarousel();
  }
  @HostListener('window:scroll', [])onscroll() {
    this.sendBottomOfCarousel();
  }

}
