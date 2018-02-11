import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sports-social-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HelpCenterComponent implements OnInit {

  leftNavMenu: {
    title: string;
    image: string
  }[] = [
    {title: 'Home' , image: '/assets/images/sports-social-home.png'},
    {title: 'Your Profile' , image: '/assets/images/sports-social-profile.png'},
    {title: 'Your Sports Activities' , image: '/assets/images/sports-social-activity.png'},
    {title: 'Acoount Basics' , image: '/assets/images/sports-social-account.png'},
    {title: 'Playmates & Fans' , image: '/assets/images/sports-social-playmates.png'},
    {title: 'Connect' , image: '/assets/images/sports-social-connect.png'},
    {title: 'Search' , image: '/assets/images/sports-social-search.png'},
    {title: 'Media' , image: '/assets/images/sports-social-profile.png'},
    {title: 'Tagging & Mention' , image: '/assets/images/sports-social-tag.png'}
  ];

  rightNavMenu: {
    title: string;
    image: string
  }[] = [
    {title: 'Getting Started' , image: '/assets/images/sports-social-getting-started.png'},
    {title: 'Using My Locality' , image: '/assets/images/sports-social-locality.png'},
    {title: 'Suggest a feature' , image: '/assets/images/suggest-feature.png'},
    {title: 'Partnership' , image: '/assets/images/sports-social-partnership.png'},
    {title: 'Tournaments & Events' , image: '/assets/images/sports-social-events.png'},
    {title: 'Contribution & Rewards' , image: '/assets/images/sports-social-rewards.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
