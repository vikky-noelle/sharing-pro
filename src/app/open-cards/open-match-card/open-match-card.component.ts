import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  Renderer2,
  OnDestroy
} from '@angular/core';
import { TimeService } from '../../shared/services/time.service';
import { PostService } from '../../shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'sports-social-open-match-card',
  templateUrl: './open-match-card.component.html',
  styleUrls: ['./open-match-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OpenMatchCardComponent implements OnInit, OnDestroy {

  activityid = {
    commentid: 1005,
    promoteid: 1004,
    watchid: 1009
  };
  private subscription: Subscription;
  private _diff: number;

   _days: number;

   _hours: number;

   _minutes: number;

  private _seconds: number;
  @ViewChild('openCard') openCard;
 // @ViewChild('userImg') userImg;

  @Input()  timeRemaining: string;
  @Input()  gameName: string;
  @Input()  creatorImage: string;
  @Input()  creatorName: string;
  @Input()  matchDate;
  @Input()  venueName: string;
  @Input()  matchText: string;
  @Input()  matchImage: string;
  @Input()  joineeCount: string;
  @Input()  joinees: {
              name: string;
              image: string
            } [] = [];
  @Input()  promoteCount: string;
  @Input()  promoters: {
              name: string;
              image: string
            } [] = [];
  @Input()  watchCount: string;
  @Input()  watchers: {
              name: string;
              image: string
            } [] = [];
  @Input()  commentCount: string;
  @Input()  comments: {
              userName: string;
              commentDate: string;
              uniqueName: string;
              comment: string;
              userImage: string;
            } [] = [];
            images: {
              image: string,
              text: string,
              likeCount: number,
              commentCount: number
            } [] = [];

  constructor(
    private renderer: Renderer2,
    private time: TimeService,
    private get: PostService,
    private   activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  defaultImage(event) {
    console.log(event);
    event.target.src = '/assets/images/user-default.png';
  }

  close() {
    this.router.navigate([ { outlets: { 'Match': null}}]);
  }

  removeActionBar () {
    if (this.promoteCount === '0' && this.watchCount === '0' && this.joineeCount === '0') {
      return false;
    } else {
      return true;
    }
  }

  getMatchData(id) {
    this.get.singleMatchData(id, 0, this.activityid.commentid, 0, 1).subscribe(
      (res) => {
        console.log(res);
        this.matchImage = res['EventInfo'][0].event_image;
        this.matchText = res['EventInfo'][0].EventText;
        this.promoteCount = res['EventInfo'][0].PromoteCount;
        this.watchCount = res['EventInfo'][0].WatchCount;
        this.joineeCount = res['EventInfo'][0].EventJoineeCount;
        this.venueName = res['EventInfo'][0].Venue_Name;
        this.creatorName = res['EventInfo'][0].user_name;
        this.gameName = res['EventInfo'][0].gamename;
        this.timeRemaining = res['EventInfo'][0].StartTime;
        this.creatorImage = res['EventInfo'][0].profile_photo;
        this.matchDate = this.time.exactDate( parseInt(res['EventInfo'][0].StartTime, 10) * 1000  );
        // tslint:disable-next-line:forin
        for ( const i in res['EventJoineesInfo'] ) {
          this.joinees.push({
            name: res['EventJoineesInfo'][i].FirstName + res['EventJoineesInfo'][i].LastName,
            image: res['EventJoineesInfo'][i].profilephoto
          });
        }
        console.log(res['Images'].length);
        if ( res['Images'].length > 0) {
          // tslint:disable-next-line:forin
          for ( const i in res['Images'] ) {
            console.log(res['Images'][i]);
            this.images.push({
              image: res['Images'][i].imagepath,
              text: res['Images'][i].Text === undefined ? ' ' : res['Images'][i].Text,
              likeCount: res['Images'][i].likecount ===  null ? '0' : res['Images'][i].likecount,
              commentCount:  res['Images'][i].commentcount ===  null ? '0' : res['Images'][i].commentcount
            });
          }
        } else {
          this.images.push({
            image: this.matchImage,
            text: '',
            likeCount: 0,
            commentCount: 0
          });
        }
      }
    );
    this.get.singleMatchData(id, 0, this.activityid.commentid, 2, 1).subscribe(
      (res) => {
        console.log(res);
        // tslint:disable-next-line:forin
        for ( const i in res[0] ) {
          this.comments.push({
            userName: res[0][i].user_name,
            commentDate: this.time.ExactDate(res[0][i].InsertedDate) ,
            uniqueName: res[0][i].UniqueName,
            comment: res[0][i].Comment,
            userImage: res[0][i].profile_image,
          });
        }
      }
    );
    this.get.singleMatchData(id, 0, this.activityid.watchid, 1, 1).subscribe(
      (res) => {
        console.log(res);
        // tslint:disable-next-line:forin
        for ( const i in res[0] ) {
          this.watchers.push({
            name: res[0][i].user_name,
            image: res[0][i].profile_image,
          });
        }
      }
    );
    this.get.singleMatchData(id, 0, this.activityid.promoteid, 1, 1).subscribe(
      (res) => {
        console.log(res);
        // tslint:disable-next-line:forin
        for ( const i in res[0] ) {
          this.promoters.push({
            name: res[0][i].user_name,
            image: res[0][i].profile_image,
          });
        }
      }
    );
  }

  getDays(t) {
    let days;
    days = Math.floor(t / 86400);

    return days;
  }

  getHours(t) {
      let days, hours;
      days = Math.floor(t / 86400);
      t -= days * 86400;
      hours = Math.floor(t / 3600) % 24;

      return hours;
  }

  getMinutes(t) {
      let days, hours, minutes;
      days = Math.floor(t / 86400);
      t -= days * 86400;
      hours = Math.floor(t / 3600) % 24;
      t -= hours * 3600;
      minutes = Math.floor(t / 60) % 60;

      return minutes;
  }

  getSeconds(t) {
      let days, hours, minutes, seconds;
      days = Math.floor(t / 86400);
      t -= days * 86400;
      hours = Math.floor(t / 3600) % 24;
      t -= hours * 3600;
      minutes = Math.floor(t / 60) % 60;
      t -= minutes * 60;
      seconds = t % 60;

      return seconds;
  }

  openAppDownloadPopup() {
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }


  ngOnInit() {
   console.log(this.watchers, this.comments, this.joinees, this.promoters);
   this.activeRoute.params.subscribe(
     (param) => {
       console.log(param.id);
       this.getMatchData(param.id);
      // console.log('b', this.images);
       this.subscription =  Observable.interval(1000).map((x) => {
        this._diff = +(this.timeRemaining) - Date.parse(new Date().toString()) / 1000;
       // console.log(this._diff, Date.parse(new Date().toString()) / 1000, this.timeRemaining );
        }).subscribe((x) => {
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
           // console.log( this._days + 'd', this._hours + 'h', this._minutes + 'm', this._seconds + 's', this.getSeconds(this._diff));
        });
      }
   );
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
