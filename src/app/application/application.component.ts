import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from '../shared/services/seo.service';


@Component({
  selector: 'sports-social-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent implements OnInit {

    title='Download the Sports Social App from Google PlayStore'
  constructor(private titleservice:Title,
    private metaservice:Meta) { }

  ngOnInit() {
    this.titleservice.setTitle(this.title);
    this.metaservice.updateTag({name:'title',content:this.title});
    this.metaservice.updateTag({name: 'keywords' , content: "Sports Social,Sports Social App,Best Sports app India,Play Your Sport,Sports Networking app,Sports Profile,Playmates,Sports Fans,Connect to Sports players,Sports Venues Near by,Sports app,All Sports app,Free Sports App,Online Sports App"});
    this.metaservice.updateTag({name: 'description', content: "Sports Social app is your personal sports manager that lets you maintain your sports profile,Making your sports & fitness groups (Playmates), Follow others sports activities and create a fan following , Connect with other sports enthusiasts, Discover sports and fitness activities near you and much more. You can also locate the Venues Nearby for more than 10 Sports including Cricket, Football, Lawn Tennis, Badminton etc."});
  }

}
