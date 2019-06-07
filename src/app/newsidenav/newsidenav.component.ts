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
 c=document.getElementsByClassName('c') as HTMLCollectionOf<HTMLElement>;
  f=document.getElementsByClassName('f') as HTMLCollectionOf<HTMLElement>;
  b=document.getElementsByClassName('b') as HTMLCollectionOf<HTMLElement>;
  v=document.getElementsByClassName('v') as HTMLCollectionOf<HTMLElement>;
  t=document.getElementsByClassName('t') as HTMLCollectionOf<HTMLElement>;
  tt=document.getElementsByClassName('tt') as HTMLCollectionOf<HTMLElement>;
  h=document.getElementsByClassName('h') as HTMLCollectionOf<HTMLElement>;
  bd=document.getElementsByClassName('bd') as HTMLCollectionOf<HTMLElement>;
  newsone=document.getElementsByClassName('newsone') as HTMLCollectionOf<HTMLElement>;
  newsonea=document.getElementsByClassName('newsonea') as HTMLCollectionOf<HTMLElement>;
  resnav=document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
  aicon=document.getElementsByClassName('aicon') as HTMLCollectionOf<HTMLElement>;
  aiconn=document.getElementsByClassName('aiconn') as HTMLCollectionOf<HTMLElement>;
  damn=document.getElementsByClassName('con') as HTMLCollectionOf<HTMLElement>;
  dam=document.getElementsByClassName('conn') as HTMLCollectionOf<HTMLElement>;
  constructor(
    private router: Router,
    private route: ActivatedRoute
    // private clurl: NewspageComponent
  ) { }
  open() {
    this.resnav[0].style.left="0px";
  }

  close() {
    this.resnav[0].style.left="-600px";
  }

  openn(){
    if(this.l1===0){
      this.aiconn[0].style.transform="rotate(90deg)";
      this.damn[0].style.display="block";
      this.l1=1;
    }
    else{
      this.aiconn[0].style.transform="rotate(0deg)";
      this.l1=0;
      this.damn[0].style.display="none";
    }
  }
  opennn(){
    if(this.l2===0){
      this.l2=1;
      this.aicon[0].style.transform="rotate(90deg)";
      this.dam[0].style.display="block";
    }
    else{
      this.aicon[0].style.transform="rotate(0deg)";
      this.l2=0;
      this.dam[0].style.display="none";
    }
  }
  ngOnInit() {
    if(this.router.url.includes('/newspage')){
      this.dam[0].style.display="block";
      this.l2=1;
      this.aicon[0].style.transform="rotate(90deg)";
      this.newsone[0].style.backgroundColor=" rgb(71, 148, 148)";
      this.newsonea[0].style.color="white";
    }
    if(this.router.url.includes('/cricket')){
      console.log("it works");
      this.c[0].style.color="black";
    }
    if(this.router.url.includes('/football')){
      this.f[0].style.color="black";
    }
    if(this.router.url.includes('/basketball')){
      this.b[0].style.color="black";
    }
    if(this.router.url.includes('/volley')){
      this.v[0].style.color="black";
    }
    if(this.router.url.includes('/cricket')){
      this.t[0].style.color="tennis";
    }
    if(this.router.url.includes('/table')){
      this.tt[0].style.color="black";
    }
    if(this.router.url.includes('/hockey')){
      this.h[0].style.color="black";
    }
    if(this.router.url.includes('/badminton')){
      this.bd[0].style.color="black";
    }
    if(this.router.url.includes('/OpenArena')){
      this.damn[0].style.display="block";
      this.l1=1;
      this.aiconn[0].style.transform="rotate(90deg)";
    }
  }
  cliurlw(){
    document.getElementById("c").style.background="black";
  }

  cliurl(){
    // this.router.navigate(['/newspage', list]);
    this.clurl.ngOnInit();
    // this.router.navigate(['/newspage/cricket']);
    console.log("works");
    // this.router.navigateByUrl('/newspage/'+topic, {skipLocationChange: true}).then(()=>
    // this.router.navigate(["/newspage", topic]));    
    // this.ngOnInit();
  }
}
