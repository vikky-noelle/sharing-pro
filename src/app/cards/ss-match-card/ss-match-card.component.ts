import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sports-social-ss-match-card',
  templateUrl: './ss-match-card.component.html',
  styleUrls: ['./ss-match-card.component.css']
})
export class SsMatchCardComponent implements OnInit {

  @Input() feedid:string;
  @Input() eventid:string;
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
  @Input() age:string;
  @Input() Ontime:string;
  @Input() Ondate:string;
  @Input() matchstarterid:string;
  @Input() VenueId:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openmatchcard(gamename, eventid){
    this.router.navigate(['/matchcenter', gamename, eventid]);
  }
  openuserprofile(id, name){
    name = name.replace(/ /g,"-");
    console.log(name);
    // this.router.navigate(['/profile', name, id, 'about']);
  }
  openpopup(){
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }
  openlocality(id, venue){
    // console.log("working"+id);
    venue = venue.replace(/ /g,"-");
    venue = venue.replace(/,/g,"");
    this.router.navigate(['/locality', venue, 'cricket'], {queryParams: {id: id}});
  }
}
