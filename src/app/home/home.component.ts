import {
  Component,
  OnInit,
  ViewEncapsulation,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { LinkService } from '../shared/services/link.service';

@Component({
  selector: 'sports-social-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class HomeComponent implements OnInit {

  isbrowser:boolean;
  Keywords=[];
 
  constructor(private metaservice:Meta,
    private link:LinkService,
    private titleservice:Title,
    @Inject(PLATFORM_ID)platformid:Object) 
    {   
        link.addTag(  { rel: 'canonical', href: 'https://www.sportsocial.in/'});
        metaservice.addTags([
          { name: 'theme-color', content: '#4327a0'},
          { property: 'og:image', content: 'https://prod.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
          { property: 'og:site_name', content: 'Sport Social' },
          { property: 'fb:app_id', content: '1750709328507665'},
          { name: 'facebook:creator', content: '@SourabhArora'},
          { name: 'twitter:card', content: 'summary_large_image'},
          { name: 'twitter:site', content: '@Sportsoical'},
          { name: 'twitter:creator', content: '@SourabhArora'},
          { name: 'twitter:title', content: 'Sports Social: Sports Digital Media and Networking Service'},
          { name: 'twitter:description', content: `Sports Social Blog: Chase Your Sport aims to create a sustainable
          platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
          career in sports.`},
          { name: 'twitter:image:src', content: 'https://prod.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
        ]);
        this.isbrowser = isPlatformBrowser( platformid );
      
    }

  ngOnInit() {
    this.titleservice.setTitle("Sports Social: Making it easier to play around");
  }

//   setCanonivalURL() {
//     let key;
//     if (this.Keywords[0].search(/ /g ) === -1) {
//        key = this.Keywords[0] ;
//     }else {
//         key = this.Keywords[0].replace(/\s/g, '-');
//     }
//     const url = 'https://www.sportsocial.in/' + key
//     + '/' + this.title.replace(/\s/g, '-') + '/' ;
//     this.link.addTag({ rel: 'canonical', href: url } );
// }

}
