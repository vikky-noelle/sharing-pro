import { 
  Component, 
  OnInit,
  HostListener,
  ViewChild
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LinkService } from '../shared/services/link.service';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent implements OnInit {

  pagetitle='Sports Social Help Center';
  description="How can we help you today? Using Sports Social, New to Sports Social? Learn the basics to get the most out of Sports Social. Having an issue contact us";
  metakeywords="Sports Social Help,Sports Social Help Center,Customer care Sports Social,Contact Sports Social,Chase Your Sport,FAQ Sports Social,Sports Social Support";
  Keywords=[];
  
  @ViewChild(HelpCenterComponent) helpCenter;
  togglableNav:boolean=false;
  constructor(private title:Title,
    private meta:Meta,
    private link:LinkService) { 
    this.title.setTitle(this.pagetitle);
    this.meta.updateTag({name:'title',content:this.pagetitle});
    this.meta.updateTag({name:'description',content:this.description});
    this.meta.updateTag({name:'keywords',content:this.metakeywords});
    this.meta.updateTag({property:'og:title',content:this.pagetitle});
    this.meta.updateTag({property:'og:description',content:this.description});
    this.meta.updateTag({property:'og:keywords',content:this.metakeywords});
}

  ngOnInit() {
    
  }
  setCanonivalURL() {
    let key;
    if (this.Keywords[0].search(/ /g ) === -1) {
       key = this.Keywords[0] ;
    }else {
        key = this.Keywords[0].replace(/\s/g, '-');
    }
    const url = 'https://www.sportsocial.in/' + key
    + '/' + this.pagetitle.replace(/\s/g, '-') + '/' ;
    this.link.addTag({ rel: 'canonical', href: url } );
}
  @HostListener('window:resize',[]) onScreenResize(){
    
  }
}
