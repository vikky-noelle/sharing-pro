import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  ViewChild,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'sports-social-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class FooterComponent implements OnInit {

  @ViewChild('footer') footer;
  constructor() { }

  topscroll(){
    window.scrollTo(0,0);
  }

  ngOnInit() {
  }

  @HostListener ( 'window: scroll' , []) onscroll() {
   // console.log(screenY, scrollY);
  }

}
