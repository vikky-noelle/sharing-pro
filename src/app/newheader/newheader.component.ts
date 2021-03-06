
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
  selector: 'sports-social-newheader',
  templateUrl: './newheader.component.html',
  styleUrls: ['./newheader.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class NewheaderComponent implements OnInit, AfterViewInit {

  mobileView: boolean = false;
  isMenuInDropdown: boolean = false;
  isSearchInDropdown: boolean = false;
  isDropdownIconclicked: boolean = false;
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
    // if ( width > 800  && width < 1295) {
    //   this.mobileView = true;
    //   this.isMenuInDropdown = true;
    //   this.isSearchInDropdown = true;
    // }
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
