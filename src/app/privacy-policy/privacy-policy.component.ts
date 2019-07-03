import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PrivacyPolicyComponent implements OnInit {

  title='Privacy Policy | Sports Social';
  description="Get Sports Social's privacy policy. If you have any questions related to this policy, please feel free to contact us. We will love t o hear from you";
  keywords="Privacy Policy Sports Social";
  constructor(private pagetitle: Title,
    private meta :Meta) { 
      this.pagetitle.setTitle(this.title);
    this.meta.updateTag({name:'title',content:this.title});
    this.meta.updateTag({name:'description',content:this.description});
    this.meta.updateTag({name:'keywords',content:this.keywords});
    this.meta.updateTag({property:'og:title',content:this.title});
    this.meta.updateTag({property:'og:description',content:this.description});
    this.meta.updateTag({property:'og:keywords',content:this.keywords});
    }

  ngOnInit() {
    

  }

}
