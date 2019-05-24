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

  @ViewChild('carousel') carousel;
  @ViewChild('blog') blog:ElementRef;
  @ViewChild('blogImg') blogImg:ElementRef; 
  one=document.getElementsByClassName('one') as HTMLCollectionOf<HTMLElement>;
  two=document.getElementsByClassName('two') as HTMLCollectionOf<HTMLElement>;
  three=document.getElementsByClassName('three') as HTMLCollectionOf<HTMLElement>;
  four=document.getElementsByClassName('four') as HTMLCollectionOf<HTMLElement>;


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
    this.one[0].style.color="black";
    this.two[0].style.color="#696969";
    this.three[0].style.color="#696969";
    this.four[0].style.color="#696969";
    this.first1=true;
    this.second1=false;
    this.third1=false;
    this.fourth1=false;
    this.one[0].style.fontSize= "16px";
    this.two[0].style.fontSize= "15px";
    this.three[0].style.fontSize= "15px";
    this.four[0].style.fontSize= "15px";

  }
  second(){
    this.two[0].style.color="black";
    this.one[0].style.color="#696969";
    this.three[0].style.color="#696969";
    this.four[0].style.color="#696969";
    this.first1=false;
    this.second1=true;
    this.third1=false;
    this.fourth1=false;
    this.two[0].style.fontSize= "16px";
    this.one[0].style.fontSize= "15px";
    this.three[0].style.fontSize= "15px";
    this.four[0].style.fontSize= "15px";
  }

  third(){
    this.three[0].style.color="black";
    this.one[0].style.color="#696969";
    this.two[0].style.color="#696969";
    this.four[0].style.color="#696969";
    this.first1=false;
    this.second1=false;
    this.third1=true;
    this.fourth1=false;
    this.three[0].style.fontSize= "16px";
    this.one[0].style.fontSize= "15px";
    this.two[0].style.fontSize= "15px";
    this.four[0].style.fontSize= "15px";
  }
  fourth(){
    this.four[0].style.color="black";
    this.one[0].style.color="#696969";
    this.two[0].style.color="#696969";
    this.three[0].style.color="#696969";
    this.first1=false;
    this.second1=false;
    this.third1=false;
    this.fourth1=true;
    this.four[0].style.fontSize= "16px";
    this.one[0].style.fontSize= "15px";
    this.two[0].style.fontSize= "15px";
    this.three[0].style.fontSize= "15px";
  }


}
