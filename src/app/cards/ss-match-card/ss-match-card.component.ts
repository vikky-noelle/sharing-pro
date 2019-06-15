import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sports-social-ss-match-card',
  templateUrl: './ss-match-card.component.html',
  styleUrls: ['./ss-match-card.component.css']
})
export class SsMatchCardComponent implements OnInit {

  @Input() feedid:string;
  @Input() matchstartername:string;
  @Input() userName:string;
  @Input() starttimestamp:string;
  @Input() coverpic:string;
  @Input() upcoming:string;
  @Input() team1pic: string;
  @Input() team2pic: string;
  @Input() scoreTeam1: string;
  @Input() scoreTeam2: string;
  @Input() gamename:string;
  @Input() startdatetime: string;
  @Input() InsertedDate:string;
  @Input() Uniquename:string;
  @Input() city:string;
  @Input() Venue_Name:string;
  @Input() MatchStarterUniqueName:string;
  @Input() Team1Name:string;
  @Input() Team2Name:string;
  @Input() EventText:string;
  @Input() JoineeCount:string;
  @Input() WatchCount:string;
  @Input() PromoteCount:string;
  @Input() CommentCount:string;
  @Input() gender:string;
  @Input() finished:boolean;

  constructor(private router:Router) { }

  openAppDownloadPopup() {
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }

  ngOnInit() {
  }

}
