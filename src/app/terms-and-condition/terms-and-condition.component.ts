import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TermsAndConditionComponent implements OnInit {

  title="Terms of use | Sports Social";
  description="To all the users living in India, our terms and conditions are in compliance with user agreement, privacy policy and all other incorporated policies";
  keywords="Terms of Service Sports Social,Terms and Conditions Sports Social,User agreement Sports Social";
  constructor(private pagetite:Title,
    private meta :Meta) { 
      this.pagetite.setTitle(this.title);
    this.meta.updateTag({name:'title',content:this.title});
    this.meta.updateTag({name:'description',content:this.description});
    this.meta.updateTag({name:'keywords',content:this.keywords});
    this.meta.updateTag({property:'og:title',content:this.title});
    this.meta.updateTag({property:'og:keywords',content:this.keywords});
    this.meta.updateTag({property:'og:description',content:this.description});
    }
    
  termsOfServices = [
    'Basic Terms',
    'Privacy',
    'Content of service',
    'Your Rights',
    'Your license to use service',
    'Sports Social Right',
    'Restrictions on content and use of the services',
    'Copyright Policy',
    'Ending these terms',
    'Disclaimer & Liability',
    'Entire Agreement'
  ];
  ngOnInit() {
    


  }

}
