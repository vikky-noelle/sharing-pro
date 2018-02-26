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
import { TimeService } from '../../shared/services/time.service';
import { OpenMatchCardComponent } from '../../open-cards/open-match-card/open-match-card.component';
import { PostService } from '../../shared/services/post.service';
import { PopUpService } from '../../shared/services/pop-up.service';
import { Router, ActivatedRoute, ActivationStart } from '@angular/router';

@Component({
  selector: 'sports-social-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class MatchCardComponent implements OnInit {

  @ViewChild('actionsCount') actionsCount;
  @ViewChild('openMatchCard') openMatchcard;

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
  isClicked = false;
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

 @ViewChild('userImg') userImg;

  componentRef: ComponentRef<any>;

  constructor(
    private renderer: Renderer2,
    private time: TimeService,
    private resolver: ComponentFactoryResolver,
    private get: PostService,
    private id: PopUpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }


  removeActionsCountBar() {
    if ( this.promoteCount === 0 && this.watchCount === 0 && this.commentCount === 0 ) {
      this.renderer.setStyle( this.actionsCount.nativeElement, 'display', 'none');
    }
  }

  removeOpenCardFromDOM()  {
    this.renderer.setStyle(this.openMatchcard.nativeElement, 'position', 'fixed');
  }

  sendId(eventId) {
    this.isClicked = true;
    console.log(eventId);
    this.id.ofCard.next(eventId);
  }
  openPopUp(id, gameName, event) {
    console.log(this.activatedRoute.outlet);
    event.preventDefault();
    console.log(id, gameName);
    this.router.navigate( [ { outlets: { 'Match': [id]}} ], { skipLocationChange: true });
  }

 defaultImage() {
  this.renderer.setAttribute(this.userImg.nativeElement, 'src', '/assets/images/user-default.png');
 }

  ngOnInit() {
    // this.removeOpenCardFromDOM();
    this.removeActionsCountBar();
    this.activityDate = this.time.activityExactDate(this.activityDate);
    this.matchDate = this.time.relativeDate(parseInt(this.matchDate, 10) * 1000);


  }



}
