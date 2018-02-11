import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  Renderer2
} from '@angular/core';
import { TimeService } from '../../shared/services/time.service';

@Component({
  selector: 'sports-social-open-match-card',
  templateUrl: './open-match-card.component.html',
  styleUrls: ['./open-match-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OpenMatchCardComponent implements OnInit {

  @ViewChild('openCard') openCard;

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
    private time: TimeService
  ) { }

  close() {
    this.renderer.setStyle(this.openCard.nativeElement, 'display', 'none');
  }

  removeActionBar () {
    if (this.promoteCount === '0' && this.watchCount === '0' && this.joineeCount === '0') {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
   console.log(this.watchers, this.comments, this.joinees, this.promoters);
  }

}
