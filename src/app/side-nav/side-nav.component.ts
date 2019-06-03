import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  selectedItem;
  resnav=document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
  constructor() { }

  tempSports = [
    { id: 17,title: 'Sports-Social Arena',icon:'/assets/images/cricket (2).png'},
    {id: 23, title: 'International Arena',icon:'/assets/images/soccer-ball-variant (2).png'},
    {id: 6, title: 'News',icon:'/assets/images/basketball (2).png'},
    // {id: 36, title: 'Open Arena',icon:'/assets/images/tennis (4).png'},
    // {id: 5, title: 'News',icon:'/assets/images/badminton-shuttle.png'},
    // {id: 29, title: 'Hockey',icon:'/assets/images/field-hockey (2).png'},
    // {id: 56, title: 'Table Tennis',icon:'/assets/images/ping-pong (2).png'},
    // {id: 60, title: 'Volleyball',icon:'/assets/images/volleyball.png'},
  ];
  
  open() {
    this.resnav[0].style.display="block";
  }
  close() {
    this.resnav[0].style.display="none";
  }
  onClick(item) {
    this.selectedItem = item;
  }

  ngOnInit() {
  }


  
}
