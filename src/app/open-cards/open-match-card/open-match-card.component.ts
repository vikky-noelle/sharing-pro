import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  Renderer2
} from '@angular/core';
import { TimeService } from '../../shared/services/time.service';
import { PostService } from '../../shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sports-social-open-match-card',
  templateUrl: './open-match-card.component.html',
  styleUrls: ['./open-match-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OpenMatchCardComponent implements OnInit {

  activityid = {
    commentid: 1005,
    promoteid: 1004,
    watchid: 1009
  };

  @ViewChild('openCard') openCard;
  @ViewChild('userImg') userImg;

  @Input()  timeRemaining: string;
  @Input()  gameName: string;
  @Input()  creatorImage: string;
  @Input()  creatorName: string;
  @Input()  matchDate: string;
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

  constructor(
    private renderer: Renderer2,
    private time: TimeService,
    private get: PostService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  defaultImage() {
    this.renderer.setAttribute(this.userImg.nativeElement, 'src', '/assets/images/user-default.png');
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
        this.timeRemaining = res['EventInfo'][0].CreationDate;
        this.creatorImage = res['EventInfo'][0].profile_photo;
        this.matchDate = res['EventInfo'][0].StartTime;
        // tslint:disable-next-line:forin
        for ( const i in res['EventJoineesInfo'] ) {
          this.joinees.push({
            name: res['EventJoineesInfo'][i].FirstName + res['EventJoineesInfo'][i].LastName,
            image: res['EventJoineesInfo'][i].profilephoto
          });
        }
      }
    );
    this.get.singleMatchData(id, 0, this.activityid.commentid, 1, 1).subscribe(
      (res) => {
        console.log(res);
        // tslint:disable-next-line:forin
        for ( const i in res[0] ) {
          this.comments.push({
            userName: res[0][i].user_name,
            commentDate: res[0][i].InsertedDate,
            uniqueName: res[0][i].UniqueName,
            comment: '',
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

  ngOnInit() {
   console.log(this.watchers, this.comments, this.joinees, this.promoters);
   this.activeRoute.params.subscribe(
     (param) => {
       console.log(param.id);
       this.getMatchData(param.id);
     }
   );
  }

}
