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
  ComponentFactory
} from '@angular/core';
import { TimeService } from '../../shared/services/time.service';
import { OpenMatchCardComponent } from '../../open-cards/open-match-card/open-match-card.component';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'sports-social-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class MatchCardComponent implements OnInit {

  @ViewChild('actionsCount') actionsCount;

 /*  @Input()  creatorId: string;

  @Input()  creatorUserName: string; */
  @Input()  creatorName: string;
  @Input()  creatorImage: string;
  @Input()  eventId: string;
  @Input()  doerId: string;
  @Input()  doerName: string;
  @Input()  doerPic: string;
 /*  @Input()  doerUserName: string; */
  @Input()  matchImage: string;
  @Input()  matchText: string;
  @Input()  joineeCount: string;
  @Input()  commentCount: number;
  @Input()  promoteCount: number;
  @Input()  watchCount: number;
  @Input()  activityName: string;
  @Input()  activityDate: string;
  @Input()  matchDate: string;
  @Input()  gameName: string;
  @Input()  venueName: string;
  @Input()  restrictionCount: string;

  comments: {
    userName: string;
    userImage: string;
    commentDate: string;
    comment: string;
  } [] = [] ;

  promoters: {
    name: string;
    image: string
  } [];

  watchers: {
    name: string;
    image: string
  } [];

  joinees: {
    name: string;
    image: string
  } [];

  images: {
    url: string
  } [];

  activityid = {
    commentid: 1005,
    promoteid: 1004,
    watchid: 1009
  };

  @ViewChild('openMatchCard', { read: ViewContainerRef}) openMatchCardContainer;

  componentRef: ComponentRef<any>;

  constructor(
    private renderer: Renderer2,
    private time: TimeService,
    private resolver: ComponentFactoryResolver,
    private get: PostService
  ) { }


  removeActionsCountBar() {
    if ( this.promoteCount === 0 && this.watchCount === 0 && this.commentCount === 0 ) {
      this.renderer.setStyle( this.actionsCount.nativeElement, 'display', 'none');
    }
  }

  createComponent(id) {
    console.log(id);
    this.openMatchCardContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(OpenMatchCardComponent);
    this.componentRef = this.openMatchCardContainer.createComponent(factory);
    this.componentRef.instance.matchImage = this.matchImage;
    this.componentRef.instance.matchDate = this.matchDate;
    this.componentRef.instance.matchText = this.matchText;
    this.componentRef.instance.promoteCount = this.promoteCount;
    this.componentRef.instance.watchCount = this.watchCount;
    this.componentRef.instance.joineeCount = this.joineeCount;
    this.componentRef.instance.creatorImage = this.creatorImage;
    this.componentRef.instance.creatorName = this.creatorName;
    this.componentRef.instance.timeRemaining = this.matchDate;
    this.componentRef.instance.venueName = this.venueName;
    this.componentRef.instance.gameName = this.gameName;
    this.get.singleMatchData(id, 0, this.activityid.commentid, 1).subscribe(
      (res) => {

      }
    );
    this.get.singleMatchData(id, 0, this.activityid.commentid, 1).subscribe(
      (res) => {

      }
    );
    this.get.singleMatchData(id, 0, this.activityid.promoteid, 1).subscribe(
      (res) => {

      }
    );
    this.get.singleMatchData(id, 0, this.activityid.watchid, 1).subscribe(
      (res) => {

      }
    );
    this.get.singleMatchData(id, 0, 0 , 0).subscribe(
      res => {
         console.log(res['comment']);
         const commentData = res['comment'];
        // tslint:disable-next-line:forin
        for ( const i in commentData) {
          this.componentRef.instance.comments.push({
            userName: commentData[i].name,
            uniqueName: commentData[i].uniqueName,
            userImage: commentData[i].userImage,
            comment: commentData[i].comment,
            commentDate: this.time.relativeDate(commentData[i].commentDate)
          });
        }
       // console.log(this.comments);
      //  this.componentRef.instance.comments = this.comments;

        // tslint:disable-next-line:forin
        for ( const i in res['promote'] ) {
          this.componentRef.instance.promoters.push({
            name: res['promote'][i].name,
            image: res['promote'][i].image
          });
        }
        // this.componentRef.instance.promoters = this.promoters;

        // tslint:disable-next-line:forin
        for ( const i in res['watch'] ) {
          this.componentRef.instance.watchers.push({
            name: res['watch'][i].name,
            image: res['watch'][i].image
          });
        }
        // this.componentRef.instance.watchers = this.watchers;

        // tslint:disable-next-line:forin
        for ( const i in res['EventJoineesInfo'] ) {
          this.componentRef.instance.joinees.push({
            name: res['EventJoineesInfo'][i].FirstName + res['EventJoineesInfo'][i].LastName,
            image: res['EventJoineesInfo'][i].profilephoto
          });
        }
        // this.componentRef.instance.joinees = this.joinees;
      }
    );
  }

  ngOnInit() {
    this.removeActionsCountBar();
    this.activityDate = this.time.activityExactDate(this.activityDate);
    this.matchDate = this.time.relativeDate(parseInt(this.matchDate, 10) * 1000);


  }



}
