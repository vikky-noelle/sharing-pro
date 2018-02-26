import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  Renderer2,
  HostListener,
} from '@angular/core';
import { PropertyService } from '../shared/services/property.service';
import { ɵgetDOM } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sports-social-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class NavigationBarComponent implements OnInit {

  @ViewChild('navbar') navbar;
  @ViewChild('mobileNavbar') mobileNavbar;
  @ViewChild('dropdown') dropdown;
  @ViewChild('image') image;
  isHoverOnCaret = false;
  mobileNav = false;
  HeightOfHeader: any ;
  BottomOfCarousel: any;
  route;
  constructor(
    private recieveHeight: PropertyService,
    private reciveBottom: PropertyService,
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute
  ) { }

  /* activeRoute: {
    title: string,
    image: string
  } = {
    title: 'Popular',
    image: '/assets/images/sports-social-cricket-blue.png'
  }; */
  activeRoute;

  tempSports: { id: number, title: string}[]= [
    { id: 17,  title: 'Cricket'},
    {id: 23, title: 'Football'},
    {id: 6, title: 'Basketball'},
    {id: 36, title: 'Lawn Tennis'},
    {id: 5, title: 'Badminton'},
    {id: 29, title: 'Hockey'},
    {id: 56, title: 'Table Tennis'},
    {id: 60, title: 'Volleyball'}
  ];
  moreSports: { id: number, title: string}[];
  sports: { id: number, title: string}[];

  changeHomeIcon() {
    this.route = this.activatedRoute.snapshot.params.sport;
    this.activatedRoute.params.subscribe(
      (param) => {
        this.route = param.sport;
        console.log('sports',this.route)
      }
    );
  }
  responsiveNavigationBar() {
    const width = ɵgetDOM().getBoundingClientRect(this.navbar.nativeElement).width;
    if ( width > 1200 ) {
      this.sports = this.tempSports.slice(0, 9);
      this.moreSports = this.tempSports.slice(9, this.tempSports.length);
      this.mobileNav = false;
    }
    if ( width > 950 && width < 1200 ) {
        this.sports = this.tempSports.slice(0, 7);
        this.moreSports = this.tempSports.slice(7, this.tempSports.length);
        this.mobileNav = false;
    }
    if ( width > 800 && width < 950 ) {
        this.sports = this.tempSports.slice(0, 6);
        this.moreSports = this.tempSports.slice(6, this.tempSports.length);
        this.mobileNav = false;
    }
    if ( width < 800  && width > 720) {
      this.sports = this.tempSports.slice(0, 5);
      this.moreSports = this.tempSports.slice(5, this.tempSports.length);
      console.log(this.sports);
      this.mobileNav = false;
    }
    if ( width < 720 ) {
      this.sports = this.tempSports;
      this.mobileNav = true;
    }
  }

  openDropdown() {
    this.isHoverOnCaret = true;
    this.scrollabledropdown();
  }

  closeDropdownByClick(event) {
    this.isHoverOnCaret = false;
    event.preventDefault();
    /* console.log(i);
    if ( i !== null && i !== undefined) {
      this.activeRoute = this.sports[i].title;
    } */
  }
  closeDropdownByMouseleave() {
    this.isHoverOnCaret = false;
  }

  heightOfHeader() {
    this.recieveHeight.ofHeader.subscribe(
      res => {
       // console.log(res);
        this.HeightOfHeader = res ;
      }
    );
  }


  fixedNavbar() {
    this.reciveBottom.ofCarousel.subscribe(
      res => {
        this.BottomOfCarousel = res;
        const top = ɵgetDOM().getBoundingClientRect(this.navbar.nativeElement).top;
        const bottom = ɵgetDOM().getBoundingClientRect(this.navbar.nativeElement).bottom;
        if ( top <= this.HeightOfHeader) {
          this.renderer.setStyle( this.navbar.nativeElement, 'position' , 'fixed' );
          this.renderer.setStyle(this.navbar.nativeElement, 'top', this.HeightOfHeader + 'px');
          this.renderer.setStyle( this.navbar.nativeElement, 'left', '0px');
          this.renderer.setStyle( this.navbar.nativeElement, 'right', '0px');
        }
        if ( bottom <= this.BottomOfCarousel ) {
          this.renderer.setStyle( this.navbar.nativeElement, 'position' , 'relative' );
          this.renderer.setStyle( this.navbar.nativeElement, 'top', '0px');
        }
      }
    );
  }

  scrollabledropdown() {
    if ( this.mobileNavbar !== undefined ) {
      const height = ɵgetDOM().getBoundingClientRect(this.mobileNavbar.nativeElement).height;
      const top =  ɵgetDOM().getBoundingClientRect(this.mobileNavbar.nativeElement).top;
      const scrollableHeight = innerHeight - top - 48;
      if ( height > scrollableHeight ) {
        this.renderer.setStyle(this.mobileNavbar.nativeElement, 'height', scrollableHeight + 'px');
        this.renderer.setStyle(this.mobileNavbar.nativeElement, 'overflow-y', 'scroll');
      } else {
        this.renderer.setStyle(this.mobileNavbar.nativeElement, 'max-height', height + 'px');
        // this.renderer.setStyle(this.mobileNavbar.nativeElement, 'overflow-y', 'visible');
      }
    }
    if ( this.dropdown !== undefined ) {
      const height = ɵgetDOM().getBoundingClientRect(this.dropdown.nativeElement).height;
      const top =  ɵgetDOM().getBoundingClientRect(this.dropdown.nativeElement).top;
      const scrollableHeight = innerHeight - top - 40;
      if ( height > scrollableHeight ) {
        this.renderer.setStyle(this.dropdown.nativeElement, 'height', scrollableHeight + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'overflow-y', 'scroll');
      } else {
        this.renderer.setStyle(this.dropdown.nativeElement, 'max-height', height + 'px');
        // this.renderer.setStyle(this.dropdown.nativeElement, 'overflow-y', 'visible');
      }
    }
  }


  ngOnInit() {
    this.changeHomeIcon();
    this.responsiveNavigationBar();
    this.heightOfHeader();
    this.fixedNavbar();
  }

  @HostListener('window:resize', []) onresize() {
    this.responsiveNavigationBar();
    this.heightOfHeader();
    this.fixedNavbar();
  }

  @HostListener('window:scroll', []) onscroll() {
    this.fixedNavbar();
    this.scrollabledropdown();
  }

  @HostListener('mouseover', ['$event']) onHover(event) {
    this.scrollabledropdown();
  }

}
