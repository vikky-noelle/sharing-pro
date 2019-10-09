import { Router, ActivatedRoute } from '@angular/router';
import { NewspageComponent } from './../newspage/newspage.component';
import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from '../shared/services/interaction.service';

@Component({
  selector: 'sports-social-newsidenav',
  templateUrl: './newsidenav.component.html',
  styleUrls: ['./newsidenav.component.css']
})
export class NewsidenavComponent implements OnInit {
  

  @Input() clurl: NewspageComponent;
  l1=0;
  l2=0;
  l3=0;
  list1=['cricket', 'football', 'basketball', 'volleyball', 'tennis', 'table tennis', 'hockey', 'badminton'];
  list2=['cricket', 'football', 'basketball', 'volleyball', 'tennis', 'table tennis', 'hockey', 'badminton'];
  
  newsone=document.getElementsByClassName('newsone') as HTMLCollectionOf<HTMLElement>;
  newsonea=document.getElementsByClassName('newsonea') as HTMLCollectionOf<HTMLElement>;
  connect=document.getElementsByClassName('connect') as HTMLCollectionOf<HTMLElement>;
  connectone=document.getElementsByClassName('connect-one') as HTMLCollectionOf<HTMLElement>;

  openarena=document.getElementsByClassName('openarena') as HTMLCollectionOf<HTMLElement>;
  openarena1=document.getElementsByClassName('openarena1') as HTMLCollectionOf<HTMLElement>;
  arrowicon=document.getElementsByClassName('arrowicon') as HTMLCollectionOf<HTMLElement>;
  arrowiconconnect=document.getElementsByClassName('arrowicon-connect') as HTMLCollectionOf<HTMLElement>;
  arrowiconn=document.getElementsByClassName('arrowiconn') as HTMLCollectionOf<HTMLElement>;
  openmenu=document.getElementsByClassName('openarenaopen') as HTMLCollectionOf<HTMLElement>;
  openmenu1=document.getElementsByClassName('newsopen') as HTMLCollectionOf<HTMLElement>;
  openmenu2=document.getElementsByClassName('connectopen') as HTMLCollectionOf<HTMLElement>;

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
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private event: InteractionService
  ) 
  { 
  }
 
  routechange(topic){
    this.event.routechangefunction(topic);
  }
  openn(){
    if(this.l1===0){
      this.arrowiconn[0].style.transform="rotate(90deg)";
      this.openmenu[0].style.display="block";
      this.l1=1;
      this.arrowicon[0].style.transform="rotate(0deg)";
      this.l2=0;
      this.openmenu1[0].style.display="none";
    }
    else{
      this.arrowiconn[0].style.transform="rotate(0deg)";
      this.l1=0;
      this.openmenu[0].style.display="none";
    }
  }
  opennn(){
    if(this.l2===0){
      this.l2=1;
      this.arrowicon[0].style.transform="rotate(90deg)";
      this.openmenu1[0].style.display="block";
      this.arrowiconn[0].style.transform="rotate(0deg)";
      this.l1=0;
      this.openmenu[0].style.display="none";
    }
    else{
      this.arrowicon[0].style.transform="rotate(0deg)";
      this.l2=0;
      this.openmenu1[0].style.display="none";
    }
  }
  // open connect menu
  openconnect(){
    if(this.l3===0){
      this.l3=1;
      this.arrowiconconnect[0].style.transform="rotate(90deg)";
      this.openmenu2[0].style.display="block";
      this.arrowiconn[0].style.transform="rotate(0deg)";
      this.arrowicon[0].style.transform="rotate(0deg)";
      this.l1=0;
      this.l2=0;
      this.openmenu[0].style.display="none";
      this.openmenu1[0].style.display="none";
    }
    else{
      this.arrowiconconnect[0].style.transform="rotate(0deg)";
      this.l3=0;
      this.openmenu2[0].style.display="none";
    }
  }
  ngOnInit() {
    if(this.router.url.includes('/news')){
      this.l2=1;
      this.arrowicon[0].style.transform="rotate(90deg)";
      this.newsone[0].style.backgroundColor=" rgb(71, 148, 148)";
      this.newsonea[0].style.color="white";
      this.openmenu1[0].style.display="block";
    }
    if(this.router.url.includes('/OpenArena')){
      this.openmenu[0].style.display="block";
      this.l1=1;
      this.arrowiconn[0].style.transform="rotate(90deg)";
      this.openarena[0].style.backgroundColor=" rgb(71, 148, 148)";
      this.openarena1[0].style.color="white";
    }   
    
    
  }
}
