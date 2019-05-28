import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { PropertyService } from '../shared/services/property.service';

@Component({
  selector: 'sports-social-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class HeaderComponent implements OnInit, AfterViewInit {

  mobileView: boolean = false;
  isMenuInDropdown: boolean = false;
  isSearchInDropdown: boolean = false;
  isDropdownIconclicked: boolean = false;
  sidenav:boolean=false;
  searchButton:boolean=false;
  @ViewChild('header') header;
  constructor(
    private height: PropertyService
  ) { }

  setMobileView() {
    const width = this.header.nativeElement.getBoundingClientRect().width;
    if ( width > 800 ) {
      this.mobileView = false;
      this.isMenuInDropdown = false;
      this.isSearchInDropdown = false;
    }
    if ( width > 800  && width < 1295) {
      this.mobileView = true;
      this.isMenuInDropdown = true;
      this.isSearchInDropdown = true;
    }
    if ( width < 800 && width > 720) {
      this.mobileView = true;
      this.isMenuInDropdown = true;
      this.isSearchInDropdown = true;
    }
    if ( width < 720 ) {
      this.mobileView = true;
      this.isMenuInDropdown = true;
      this.isSearchInDropdown = true;
    }
  }
  searchClick(){
    if(this.searchButton===true){
      this.searchButton=false;
    }else{
      this.searchButton=true;
    }
  }
  openNav(){
    this.sidenav=true;
  }
  closeNav(){
    this.sidenav=false;
  }

  openDropdown() {
    this.isDropdownIconclicked = true;
  }
  closeDropdown() {
    this.isDropdownIconclicked = false;
  }

  sendHeightOfHeader() {
    const height = this.header.nativeElement.getBoundingClientRect().height;
    this.height.ofHeader.next(height);
  }
  ngOnInit() {
    this.setMobileView();
  }

  ngAfterViewInit() {
    this.sendHeightOfHeader();
  }
  @HostListener('window:resize', []) onresize() {
    this.setMobileView();
    this.sendHeightOfHeader();
  }
  topscroll(){
    window.scrollTo(0,0);
  }

}
