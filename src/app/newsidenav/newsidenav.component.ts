import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NewspageComponent } from './../newspage/newspage.component';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'sports-social-newsidenav',
  templateUrl: './newsidenav.component.html',
  styleUrls: ['./newsidenav.component.css']
})
export class NewsidenavComponent implements OnInit {
  

  @Input() clurl: NewspageComponent;
  l1=0;
  l2=0;
  list1=['cricket', 'football', 'basketball', 'volleyball', 'tennis', 'table tennis', 'hockey', 'badminton'];
  list2=['cricket', 'football', 'basketball', 'volleyball', 'tennis', 'table tennis', 'hockey', 'badminton'];
  
  cricket=document.getElementsByClassName('cricket') as HTMLCollectionOf<HTMLElement>;
  football=document.getElementsByClassName('football') as HTMLCollectionOf<HTMLElement>;
  basketball=document.getElementsByClassName('basketball') as HTMLCollectionOf<HTMLElement>;
  volleyball=document.getElementsByClassName('volleyball') as HTMLCollectionOf<HTMLElement>;
  tennis=document.getElementsByClassName('tennis') as HTMLCollectionOf<HTMLElement>;
  tabletennis=document.getElementsByClassName('tabletennis') as HTMLCollectionOf<HTMLElement>;
  hockey=document.getElementsByClassName('hockey') as HTMLCollectionOf<HTMLElement>;
  badminton=document.getElementsByClassName('badminton') as HTMLCollectionOf<HTMLElement>;
  openarenaul = document.getElementsByClassName('openarenaul') as HTMLCollectionOf<HTMLElement>;
  newspageul = document.getElementsByClassName('newspageul') as HTMLCollectionOf<HTMLElement>;
  cricket1=document.getElementsByClassName('cricket1') as HTMLCollectionOf<HTMLElement>;
  football1=document.getElementsByClassName('football1') as HTMLCollectionOf<HTMLElement>;
  basketball1=document.getElementsByClassName('basketball1') as HTMLCollectionOf<HTMLElement>;
  volleyball1=document.getElementsByClassName('volleyball1') as HTMLCollectionOf<HTMLElement>;
  tennis1=document.getElementsByClassName('tennis1') as HTMLCollectionOf<HTMLElement>;
  tabletennis1=document.getElementsByClassName('tabletennis1') as HTMLCollectionOf<HTMLElement>;
  hockey1=document.getElementsByClassName('hockey1') as HTMLCollectionOf<HTMLElement>;
  badminton1=document.getElementsByClassName('badminton1') as HTMLCollectionOf<HTMLElement>;
  
  
  newsone=document.getElementsByClassName('newsone') as HTMLCollectionOf<HTMLElement>;
  newsonea=document.getElementsByClassName('newsonea') as HTMLCollectionOf<HTMLElement>;
  openarena=document.getElementsByClassName('openarena') as HTMLCollectionOf<HTMLElement>;
  openarena1=document.getElementsByClassName('openarena1') as HTMLCollectionOf<HTMLElement>;
  arrowicon=document.getElementsByClassName('arrowicon') as HTMLCollectionOf<HTMLElement>;
  arrowiconn=document.getElementsByClassName('arrowiconn') as HTMLCollectionOf<HTMLElement>;
  openmenu=document.getElementsByClassName('openarenaopen') as HTMLCollectionOf<HTMLElement>;
  openmenu1=document.getElementsByClassName('newsopen') as HTMLCollectionOf<HTMLElement>;
  constructor(
    private router: Router,
    private route: ActivatedRoute
    // private clurl: NewspageComponent
  ) { }
  // open() {
  //   this.resnav[0].style.left="0px";
  // }

  // close() {
  //   this.resnav[0].style.left="-600px";
  // }

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
  ngOnInit() {
    if(this.router.url === '/newspage'){
      this.openmenu1[0].style.display="block";
      this.l2=1;
      this.arrowicon[0].style.transform="rotate(90deg)";
      this.newsone[0].style.backgroundColor=" rgb(71, 148, 148)";
      this.newsonea[0].style.color="white";
      this.newspageul[0].style.color="black";
    }
    if(this.router.url === '/OpenArena'){
      console.log(this.router.url);
      this.openmenu[0].style.display="block";
      this.l1=1;
      this.arrowiconn[0].style.transform="rotate(90deg)";
      this.openarena[0].style.backgroundColor=" rgb(71, 148, 148)";
      this.openarena1[0].style.color="white";
      this.openarenaul[0].style.color="black";
    }
    if(this.router.url.includes('newspage/cricket')){
      this.cricket[0].style.color="black";
    }
    if(this.router.url.includes('newspage/football')){
      this.football[0].style.color="black";
    }
    if(this.router.url.includes('newspage/basketball')){
      this.basketball[0].style.color="black";
    }
    if(this.router.url.includes('newspage/volley')){
      this.volleyball[0].style.color="black";
    }
    if(this.router.url.includes('newspage/tennis')){
      console.log("working");
      this.tennis[0].style.color="black";
    }
    if(this.router.url.includes('newspage/table')){
      this.tabletennis[0].style.color="black";
    }
    if(this.router.url.includes('newspage/hockey')){
      this.hockey[0].style.color="black";
    }
    if(this.router.url.includes('newspage/badminton')){
      this.badminton[0].style.color="black";
    }
    if(this.router.url.includes('/OpenArena')){
      this.openmenu[0].style.display="block";
      this.l1=1;
      this.arrowiconn[0].style.transform="rotate(90deg)";
    }
    if(this.router.url.includes('OpenArena/cricket')){
      this.cricket1[0].style.color="black";
    }
    if(this.router.url.includes('OpenArena/football')){
      this.football1[0].style.color="black";
    }
    if(this.router.url.includes('OpenArena/basketball')){
      this.basketball1[0].style.color="black";
    }
    if(this.router.url.includes('OpenArena/volley')){
      this.volleyball1[0].style.color="black";
    }
    if(this.router.url.includes('OpenArena/tennis')){
      console.log("working");
      this.tennis1[0].style.color="black";
    }
    if(this.router.url.includes('OpenArena/table')){
      this.tabletennis1[0].style.color="black";
    }
    if(this.router.url.includes('OpenArena/hockey')){
      this.hockey1[0].style.color="black";
    }
    if(this.router.url.includes('OpenArena/badminton')){
      this.badminton1[0].style.color="black";
    }
  }
}
