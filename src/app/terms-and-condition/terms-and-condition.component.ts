import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sports-social-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TermsAndConditionComponent implements OnInit {

  constructor() { }
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
