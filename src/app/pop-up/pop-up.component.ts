import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  Renderer2,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { TimeService } from '../shared/services/time.service';
import { OpenMatchCardComponent } from '../open-cards/open-match-card/open-match-card.component';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'sports-social-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PopUpComponent implements OnInit {


  @ViewChild('openMatchCard', { read: ViewContainerRef}) openMatchCardContainer;

  componentRef: ComponentRef<any>;

  activityid = {
    commentid: 1005,
    promoteid: 1004,
    watchid: 1009
  };

  constructor(
    private renderer: Renderer2,
    private time: TimeService,
    private resolver: ComponentFactoryResolver,
    private get: PostService,
  ) { }



  createComponent(id) {
    console.log('id', id);
    this.openMatchCardContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(OpenMatchCardComponent);
    this.componentRef = this.openMatchCardContainer.createComponent(factory);
    this.get.singleMatchData(id, 0, this.activityid.commentid, 0, 1).subscribe(
      (res) => {
        console.log(res);
        this.componentRef.instance.matchImage = res['EventInfo'][0].event_image;
        this.componentRef.instance.matchText = res['EventInfo'][0].EventText;
        this.componentRef.instance.promoteCount = res['EventInfo'][0].PromoteCount;
        this.componentRef.instance.watchCount = res['EventInfo'][0].WatchCount;
        this.componentRef.instance.joineeCount = res['EventInfo'][0].EventJoineeCount;
        this.componentRef.instance.venueName = res['EventInfo'][0].Venue_Name;
        this.componentRef.instance.creatorName = res['EventInfo'][0].user_name;
        this.componentRef.instance.gameName = res['EventInfo'][0].gamename;
        this.componentRef.instance.timeRemaining = res['EventInfo'][0].CreationDate;
        this.componentRef.instance.creatorImage = res['EventInfo'][0].profile_photo;
        this.componentRef.instance.matchDate = res['EventInfo'][0].StartTime;
        // tslint:disable-next-line:forin
        for ( const i in res['EventJoineesInfo'] ) {
          this.componentRef.instance.joinees.push({
            name: res['EventJoineesInfo'][i].FirstName + res['EventJoineesInfo'][i].LastName,
            image: res['EventJoineesInfo'][i].profilephoto
          });
        }
      }
    );
  }

  ngOnInit() {
  }

}
