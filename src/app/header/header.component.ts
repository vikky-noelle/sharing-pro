import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  Renderer2,
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
    if ( width < 800 && width > 720) {
      this.mobileView = true;
      this.isMenuInDropdown = true;
      this.isSearchInDropdown = false;
    }
    if ( width < 720 ) {
      this.mobileView = true;
      this.isMenuInDropdown = true;
      this.isSearchInDropdown = true;
    }
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

}
