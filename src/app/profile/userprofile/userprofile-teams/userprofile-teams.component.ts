import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post.service';
import { UserprofileComponent } from '../userprofile.component';
import { elementDef } from '@angular/core/src/view';

@Component({
  selector: 'sports-social-userprofile-teams',
  templateUrl: './userprofile-teams.component.html',
  styleUrls: ['./userprofile-teams.component.css']
})
export class UserprofileTeamsComponent implements OnInit {

  paramuserid;
  pageno=1;
  array=[];
  Age;
  show:boolean=false;
  public teamId;
  constructor(
    private postservice:PostService,
    private userprofileComponent:UserprofileComponent
  ) { }

  getuserid(){
    this.paramuserid=this.userprofileComponent.userid;
    console.log('this is paramuserid',this.paramuserid);
  }


  getTeamData(){
        this.postservice.UserProfileTeams(this.paramuserid,this.pageno).subscribe(
          data=>{
            this.show=true;
            if(data["RandomTeams"].length>0){
              console.log("matched");
            }
            for(var i=0;i<data["RandomTeams"].length;i++){
              this.teamId=data["RandomTeams"][i].TeamId;
              var status;
              status = this.getTeamId(this.teamId);
              var agebracket= data["RandomTeams"][i].TeamCategory;
              // console.log("thi sia is age brancter",agebracket);
                    if(agebracket == 0){
                      this.Age="Under 13";
                    }
                    else if(agebracket ==1){
                      this.Age="Under 15";
                    }
                    else if(agebracket ==2){
                      this.Age="Under 17";
                    }
                    else if(agebracket ==3){
                      this.Age="Under 19";
                    } 
                    else if(agebracket ==4){
                      this.Age="Under 21";
                    }
                    else if(agebracket ==5){
                      this.Age="Under 23";
                    }
                    else if(agebracket ==6 || agebracket ==-1){
                      this.Age="Open for All";
                    }
                  this.array.push({
                  // captain: this.getTeamId(this.teamId),
                  TeamId:data["RandomTeams"][i].TeamId,
                  TeamCategory:this.Age,
                  GameName:data["RandomTeams"][i].GameName,
                  TeamCity:data["RandomTeams"][i].TeamCity,
                  Slogan:data["RandomTeams"][i].Slogan,
                  TeamName:data["RandomTeams"][i].TeamName,
                  GameId:data["RandomTeams"][i].GameId,
                  CaptainUserId:data["RandomTeams"][i].CaptainUserId,
                  TeamType:data["RandomTeams"][i].TeamType,
                  Description:data["RandomTeams"][i].Description,
                  TeamUserName:data["RandomTeams"][i].TeamUserName,
                  Profile_Photo:data["RandomTeams"][i].Profile_Photo,
                  Cover_Photo:data["RandomTeams"][i].Cover_Photo,
                  FanCount:data["RandomTeams"][i].FanCount,
                  MemberCount:data["RandomTeams"][i].MemberCount,
                  MatchCount:data["RandomTeams"][i].MatchCount
                });
            }
            if(data["RandomTeams"].length>0==undefined){
              this.pageno=this.pageno+1;
              this.getTeamData();
            }
          }); 
    }  

  getTeamId(teamid){
    this.postservice.TeamProfile("99999",teamid).subscribe(
      res=>{
        if(this.paramuserid==res["Details"].CaptainUserId){
        }
        else{
          return false;
        }
      });

  }



  ngOnInit() {
    
    this.getuserid();
    this.getTeamData();
    // this.getTeamId(this.teamId);

  }

}
