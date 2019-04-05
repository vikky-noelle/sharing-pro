import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  Renderer2,
  ViewChild,
  ElementRef
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

  transform;
  selectedIndex;
  img;
  sliderArray = [
    {img:'assets/images/3.Arena.jpg'},
    // {img:'assets/images/2.Arena.jpg'},
    // {img:'assets/images/4.Arena.jpg'},
    // {img: 'http://bloquo.cc/img/works/1.jpg', alt: '', text: '365 Days Of weddings a year'},
    // {img: 'http://bloquo.cc/img/works/2.jpg', alt: '', text: '365 Days Of weddings a year'},
    // {img: 'http://bloquo.cc/img/works/3.jpg', alt: '', text: '365 Days Of weddings a year'},
    // {img: 'http://bloquo.cc/img/works/4.jpg', alt: '', text: '365 Days Of weddings a year'},
    // {img: 'http://bloquo.cc/img/works/5.jpg', alt: '', text: '365 Days Of weddings a year'},
   
   ];

  @ViewChild('carousel') carousel;
  @ViewChild('blog') blog:ElementRef;
  @ViewChild('blogImg') blogImg:ElementRef; 

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
  }
  @HostListener('window:resize', [])onresize() {
    this.setTopMargin();
    this.sendBottomOfCarousel();
  }
  @HostListener('window:scroll', [])onscroll() {
    this.sendBottomOfCarousel();
  }

  leftScroll(){
    this.blog.nativeElement.scrollLeft -=this.blogImg.nativeElement.clientWidth;
  }
  rightScroll(){
    this.blog.nativeElement.scrollLeft +=this.blogImg.nativeElement.clientWidth;
  }

  first1:boolean=true;
  second1:boolean=false;
  third1:boolean=false;
  fourth1:boolean=false;

  first(){
    this.first1=true;
    this.second1=false;
    this.third1=false;
    this.fourth1=false;
  }
  second(){
    this.first1=false;
    this.second1=true;
    this.third1=false;
    this.fourth1=false;
  }

  third(){
    this.first1=false;
    this.second1=false;
    this.third1=true;
    this.fourth1=false;
  }
  fourth(){
    this.first1=false;
    this.second1=false;
    this.third1=false;
    this.fourth1=true;
  }
}
