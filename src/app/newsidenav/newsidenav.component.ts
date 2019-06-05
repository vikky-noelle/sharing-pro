import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-newsidenav',
  templateUrl: './newsidenav.component.html',
  styleUrls: ['./newsidenav.component.css']
})
export class NewsidenavComponent implements OnInit {
  
  l1=0;
  l2=0;
  list1=['cricket', 'football', 'basketball'];
  list2=['cricket', 'football', 'basketball'];
  resnav=document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
  damn=document.getElementsByClassName('con') as HTMLCollectionOf<HTMLElement>;
  dam=document.getElementsByClassName('conn') as HTMLCollectionOf<HTMLElement>;
  constructor() { }
  open() {
    console.log('lalala');
    this.resnav[0].style.left="0px";
  }

  close() {
    this.resnav[0].style.left="-500px";
  }

  openn(){
    if(this.l1===0){
      this.damn[0].style.display="block";
      this.l1=1;
    }
    else{
      this.l1=0;
      this.damn[0].style.display="none";
    }
  }
  opennn(){
    if(this.l2===0){
      this.l2=1;
      this.dam[0].style.display="block";
    }
    else{
      this.l2=0;
      this.dam[0].style.display="none";
    }
  }
  ngOnInit() {
  }

}
