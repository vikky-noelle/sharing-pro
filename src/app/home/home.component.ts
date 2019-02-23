import {
  Component,
  OnInit,
  ViewEncapsulation,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
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

  constructor(private metaservice:Meta,
    private link:LinkService,
    @Inject(PLATFORM_ID)platformid:Object) 
    {   
        link.addTag(  { rel: 'canonical', href: 'https://www.sportsocial.in/'});
        metaservice.addTags([
          { name: 'description', content: `Sports Social: Chase Your Sport aims to create a sustainable
            platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
            career in sports.` },
          { name: 'keywords' , content: `Indian Sports Trends,Sports Social,Career in Sports,current trends
            in sports,Indian Sports History, Sports Social media,sports technology,Sports blog,Indian Sports
            Blog,Multiplayer Strategy Video Games,Health and Fitness Tips,Sports Analytics blog, Indian sports
            news,outlook in sports industry,future trends in sports,sports business trends, sports articles,
            sports management,Sports Social network india,sports jobs`},
          { name: 'title', content: 'Sports Social: Sports Digital Media and Networking Service'},
          { name: 'theme-color', content: '#4327a0'},
          { property: 'og:title', content: 'Sports Social: Sports Digital Media and Networking Service' },
          
          { property: 'og:description', content: `Sports Social Blog: Chase Your Sport aims to create a sustainable
          platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
          career in sports.`},
          { property: 'og:url', content:  'https://www.sportsocial.in/' },
          { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
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
          { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
        ]);
        this.isbrowser = isPlatformBrowser( platformid );
      
    }

  ngOnInit() {
  }

}
