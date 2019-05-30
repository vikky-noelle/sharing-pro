import { Component} from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TimeService } from '../../shared/services/time.service';
import { PostService } from '../../shared/services/post.service';
import { LocationService } from '../../shared/services/location.service';

@Component({
  selector: 'sports-social-home-match-feed',
  templateUrl: './home-match-feed.component.html',
  styleUrls: ['./home-match-feed.component.css']
})
export class HomeMatchFeedComponent{

  Matcharr = [];
  gendercheck="";
  onesport;
  timestamp = Math.floor(Date.now()/1000);

  // posturl='https://test.sportsocial.in/poc/newfeed';
  // urlObj=[{ userid: "112",
  //           page: "1",
  //           timestamp: "1558615054000",
  //           token: "ndsjndsjknjksnndnjkks"
  //     }];
  constructor(
    private http:Http,
    private postservice:PostService,
    private time:TimeService,
    private location:LocationService,
    private router:Router
  ) { }

  Sports= [
    {id: 5, title: 'Badminton'},
    {id: 6, title: 'Basketball'},
    { id: 17,  title: 'Cricket'},
    {id: 23, title: 'Football'},
    {id: 29, title: 'Hockey'},
    {id: 36, title: 'Lawn Tennis'},
    {id: 56, title: 'Table Tennis'},
    {id: 60, title: 'Volleyball'}
  ];

  Games=[17,5,23,6,29,36,56,60];

  getlocation(){
    this.location.getGeoLocation().then((pos)=>{
      for(var i=0;i<this.Games.length;i++){
      console.log("thi is games",this.Games[i]);
      this.postservice.homeMatchFeed(pos['latitude'],pos['longitude'],this.Games[i],this.timestamp)
      .subscribe(data=>{
        // console.log("ahdadhaadhhjdgahdghadha",data["Feed"]);
        var arr=[];
          for(var i=0;i<data["Feed"].length;i++){
            arr.push({
              feedid:data["Feed"][i].feedid,
              Activity_name:data["Feed"][i].Activity_name,
              uniquename:data["Feed"][i].uniquename,
              InsertedDate:data["Feed"][i].InsertedDate,
              profile_image:data["Feed"][i].profile_image,
              Venue_Name:data["Feed"][i].Venue_Name,
              EventText:data["Feed"][i].EventText,
              startdatetime:data["Feed"][i].startdatetime,
              GameName:data["Feed"][i].GameName,
              GameId:data["Feed"][i].GameId,
              Event_Image:data["Feed"][i].Event_Image,
              MatchStarterName:data["Feed"][i].MatchStarterName,
              MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
              Team1name:data["Feed"][i].Team1name,
              Team1Pic:data["Feed"][i].Team1Pic,
              Team2name:data["Feed"][i].Team2name,
              Team2Pic:data["Feed"][i].Team2Pic,
              scoreTeam1:data["Feed"][i].scoreTeam1,
              scoreTeam2:data["Feed"][i].scoreTeam2,
              gender:data["Feed"][i].gender,
              Profile_Photo:data["Feed"][i].Profile_Photo,
              City:data["Feed"][i].City,
              CommentCount:data["Feed"][i].CommentCount,
              PromoteCount:data["Feed"][i].PromoteCount,
              WatchCount:data["Feed"][i].WatchCount,
            })
          }
          // var newstring=arr[i].gender;
          // console.log("adfjksfdjkgsfvsfgshjdhshfkgsjhffjhsgjfgfjsgghjsghdjfs",newstring);
          // if(newstring=="male"){
          //    this.gendercheck= newstring.replace("Men's");
          // }
          if(data["Feed"].length>0){
            this.Matcharr.push(arr);
          console.log("this is feed id of ",JSON.stringify(this.Matcharr.toString()));
          }
     });
      
    }
    });
  }
  openAppDownloadPopup() {
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }

  
  // openarenamatches(){
  //   this.http.post(this.posturl,this.urlObj)
  //   .subscribe(res=>{
  //     var body=res.json();
  //     console.log("hi this is my console",body);
  //     for(const i in body){
  //       this.Matcharr.push({
  //         feedid:body[i].feedid,
  //         userName:body[i].user_name,
  //         coverpic:body[i].CoverPic,
  //         gamename:body[i].gamename,
  //         startdatetime:  this.time.timePassed(body[i].startdatetime),
  //         InsertedDate:this.time.timePassed(body[i].InsertedDate),
  //         Uniquename:body[i].Uniquename,
  //         EventText:body[i].EventText,
  //         city:body[i].city,
  //         Venue_Name:body[i].Venue_Name,
  //         MatchStarterUniqueName:body[i].MatchStarterUniqueName,  
  //         Team1Name:body[i].Team1Name,
  //         Team2Name:body[i].Team2Name,
  //         Team1Pic:body[i].Team1Pic,
  //         Team2Pic:body[i].Team2Pic,
  //         WatchCount:body[i].WatchCount,
  //         PromoteCount:body[i].PromoteCount,
  //         CommentCount:body[i].CommentCount,
  //       });
  //        this.gendercheck=this.Matcharr[i].gender;
  //          if(this.gendercheck=="Male"){
  //         var HeShe= this.gendercheck.replace(this.Matcharr[i].gender,"Men's");
  //         console.log(HeShe);
  //       }
  //     }
  //   })
  // }
  
  ngOnInit() {
    this.getlocation();
    // this.openarenamatches();
  }

  

}


