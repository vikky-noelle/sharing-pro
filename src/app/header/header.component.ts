import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  ViewChild,
  AfterViewInit,
  Input,
  Injectable,
  Output
} from '@angular/core';
import { PropertyService } from '../shared/services/property.service';
import { EventEmiterService } from '../shared/services/event.emiter.service';
import { EventEmitter } from 'events';
import { InteractionService } from '../shared/services/interaction.service';

@Injectable()
@Component({
  selector: 'sports-social-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class HeaderComponent implements OnInit, AfterViewInit {
  
  l1=true;
  l2=true;
  openstatus = true;
  Location = "Choose Location";
  mobileView: boolean = false;
  isMenuInDropdown: boolean = false;
  isSearchInDropdown: boolean = false;
  isDropdownIconclicked: boolean = false;
  sidenav:boolean=false;
  searchButton:boolean=false;
  locationlist = [
    {name: 'Delhi', latitude: '77.1025',longitude: '28.7041'},
    {name: 'Gurugram', latitude: '77.0266',longitude: '28.4595'},
    {name: 'Gurugram', latitude: '77.0266',longitude: '28.4595'},
  ]
  openarenalist=[
    {link: '', name: 'Open Arena'},
    {link: 'cricket', name: 'Cricket' },
    {link: 'football', name: 'Football' },
    {link: 'basketball', name: 'Basketball' },
    {link: 'volleyball', name: 'Volleyball' },
    {link: 'tennis', name: 'Tennis' },
    {link: 'table-tennis', name: 'Table Tennis' },
    {link: 'hockey', name: 'Hockey' },
    {link: 'badminton', name: 'Badminton' },
  ]
  newslist=[
    {link: '', name: 'All News'},
    {link: 'cricket', name: 'Cricket' },
    {link: 'football', name: 'Football' },
    {link: 'basketball', name: 'Basketball' },
    {link: 'volleyball', name: 'Volleyball' },
    {link: 'tennis', name: 'Tennis' },
    {link: 'table-tennis', name: 'Table Tennis' },
    {link: 'hockey', name: 'Hockey' },
    {link: 'badminton', name: 'Badminton' },
  ]
  openmenu = document.getElementsByClassName('slide-menu') as HTMLCollectionOf<HTMLElement>;
  openarena = document.getElementsByClassName('open-arena-menu') as HTMLCollectionOf<HTMLElement>;
  opennews = document.getElementsByClassName('open-news-menu') as HTMLCollectionOf<HTMLElement>;
  dpslide = document.getElementsByClassName('dpslide') as HTMLCollectionOf<HTMLElement>;
  dpslide2 = document.getElementsByClassName('dpslide2') as HTMLCollectionOf<HTMLElement>;
  arrowrotate = document.getElementsByClassName('arrow-rotate') as HTMLCollectionOf<HTMLElement>;
  arrowrotate1 = document.getElementsByClassName('arrow-rotate1') as HTMLCollectionOf<HTMLElement>;
  
  @Output() emitcall: EventEmitter = new EventEmitter();
  @ViewChild('header') header;
  constructor(
    private height: PropertyService,
    private _eventemiter: EventEmiterService,
    private interact: InteractionService
  ) { }
  
  latlong(longitude, latitude, name){
    this.Location=name;
    var arr=[];
    arr[0] = longitude;
    arr[1] = latitude;
    // this._eventemiter.userToEdit= arr;
    // this.home.ngfake();
     // this.onFilter.emit('Register click');
     this.interact.interactfunction(arr); 
   }
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
  if(this.openstatus){
    this.openmenu[0].style.right="0px";
    this.openstatus=false;
   }
   else{
    this.openmenu[0].style.right="-1000px";
    this.openstatus=true;
   }
  }
  closeDropdown() {
    this.openmenu[0].style.right="2000px";
    // this.isDropdownIconclicked = false;
  }
  openarenamenu(){
    if(this.l1){
      this.openarena[0].style.right="0px";
      this.arrowrotate[0].style.transform="rotate(180deg)"
      this.dpslide[0].style.left="-1000px";
      this.dpslide2[0].style.left="-1000px";
      this.opennews[0].style.right="-1000px";
      this.l1=false;
      this.arrowrotate1[0].style.transform="rotate(0deg)"
      this.l2=true;
    }
    else{
      this.openarena[0].style.right="-1000px";
      this.arrowrotate[0].style.transform="rotate(0deg)"
      this.dpslide[0].style.left="0px";
      this.dpslide2[0].style.left="0px";
      this.opennews[0].style.right="-1000px";
      this.l1=true;
    }
  }
  opennewsmenu(){
    if(this.l2){
      this.opennews[0].style.right="0px";
      this.arrowrotate1[0].style.transform="rotate(180deg)"
      this.dpslide2[0].style.left="-1000px";
      this.l2=false;
    }
    else{
      this.opennews[0].style.right="-1000px";
      this.arrowrotate1[0].style.transform="rotate(0deg)"
      this.dpslide2[0].style.left="0px";
      this.l2=true;
    }
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
