import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  selectedItem;
  data=1;
  resnav=document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
  constructor() { }

  open() {
    console.log('lalala');
    this.resnav[0].style.left="0px";
  }

  close() {
    this.resnav[0].style.left="-500px";
  }
  openn(){
    this.data=0;
  }
  ngOnInit() {
  }


  
}
