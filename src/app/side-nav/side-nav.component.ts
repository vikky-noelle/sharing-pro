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
    { id: 17,title: 'Live Matches',icon:'/assets/images/cricket (2).png'},
    {id: 23, title: 'Previous Matches',icon:'/assets/images/soccer-ball-variant (2).png'},
    {id: 6, title: 'Upcoming Matches',icon:'/assets/images/basketball (2).png'},
    {id: 36, title: 'Open Arena',icon:'/assets/images/tennis (4).png'},
    {id: 5, title: 'News',icon:'/assets/images/badminton-shuttle.png'},
    // {id: 29, title: 'Hockey',icon:'/assets/images/field-hockey (2).png'},
    // {id: 56, title: 'Table Tennis',icon:'/assets/images/ping-pong (2).png'},
    // {id: 60, title: 'Volleyball',icon:'/assets/images/volleyball.png'},
  ];
  
  open() {
    console.log('working');
    this.resnav[0].style.display="block";
  }
  onClick(item) {
    this.selectedItem = item;
  }

  ngOnInit() {
  }


  
}
