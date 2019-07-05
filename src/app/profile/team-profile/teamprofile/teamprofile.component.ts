import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-teamprofile',
  templateUrl: './teamprofile.component.html',
  styleUrls: ['./teamprofile.component.css']
})
export class TeamprofileComponent implements OnInit {
  
  opensubheader = document.getElementsByClassName('sub-header') as HTMLCollectionOf<HTMLElement>;
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
    // alert("scrolling");
    // console.log(window.pageYOffset);
    if(window.pageYOffset > 370){
      this.opensubheader[0].style.display="block";
    }
    else{
      this.opensubheader[0].style.display="none";
    }
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
  };

}
