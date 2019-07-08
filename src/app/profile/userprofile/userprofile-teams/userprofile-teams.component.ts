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
  pageno;
  array=[];
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
    for(var i=0;i<10;i++){
      this.pageno=i;
        this.postservice.UserProfileTeams(this.paramuserid,this.pageno).subscribe(
          data=>{
        
        
            for(var i=0;i<data["RandomTeams"].length;i++){
              this.teamId=data["RandomTeams"][i].TeamId;
              var status;
              status = this.getTeamId(this.teamId);
              console.log(this.getTeamId(this.teamId));
                  this.array.push({
                  // captain: this.getTeamId(this.teamId),
                  TeamId:data["RandomTeams"][i].TeamId,
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
                }); 
                
                // console.log("this is teamid",this.teamId);
                // console.log("this is array",this.array);
            }
          });  
      }  
  }

  getTeamId(teamid){
    this.postservice.TeamProfile("99999",teamid).subscribe(
      res=>{
        // console.log(res["Details"].CaptainUserId);

        if(this.paramuserid==res["Details"].CaptainUserId){
          console.log("working");
          
        
        }
        else{
          console.log("not working");
          return false;
        }
    
      }
    );

  }



  ngOnInit() {
    
    this.getuserid();
    this.getTeamData();
    // this.getTeamId(this.teamId);

  }

}
