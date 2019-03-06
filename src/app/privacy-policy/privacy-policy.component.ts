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
  constructor(private pagetitle: Title,
    private meta :Meta) { }

  ngOnInit() {
    this.pagetitle.setTitle(this.title);
    this.meta.updateTag({name:'title',content:this.title});
    this.meta.updateTag({name:'description',content:"Get Sports Social's privacy policy. If you have any questions related to this policy, please feel free to contact us. We will love t o hear from you"});
    this.meta.updateTag({name:'keywords',content:'Privacy Policy Sports Social'});
  }

}
