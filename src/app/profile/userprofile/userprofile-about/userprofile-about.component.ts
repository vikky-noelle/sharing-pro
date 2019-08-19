import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../../../shared/services/post.service';
import { UserprofileComponent } from '../userprofile.component';

@Component({
  selector: 'sports-social-userprofile-about',
  templateUrl: './userprofile-about.component.html',
  styleUrls: ['./userprofile-about.component.css']
})
export class UserprofileAboutComponent implements OnInit {

  @ViewChild('game') game:ElementRef;
  @ViewChild('gameblock') gameblock:ElementRef;

  paramUserid;
  array=[];
  temparray=[];
  temparray2=[];
  constructor(
    private postservice:PostService,
    private userprofileComponent:UserprofileComponent
  ) { }

  getUserid(){
    this.paramUserid=this.userprofileComponent.userid;
  }
  getUserdetails(){
    var count=-1, tempname=null, count2=0;
    var date = Math.floor(Date.now()/1000);
    var GameInterestgameid, Gamesquestionid,QuestionDataQuestiontext,answer,GameInterestgamename;
    this.postservice.UserProfileAbout(this.paramUserid,this.paramUserid,1,date).subscribe(
      res=>{

          for(var i=0;i<res["GamesInterest"].length;i++){
            GameInterestgameid = res["GamesInterest"][i].gameid;
            GameInterestgamename= res["GamesInterest"][i].gamename;
            count2=0;
              for(var j=0; j<res["Games"].length;j++){
                if(GameInterestgameid == res["Games"][j].Gameid){
                  for(var loop=0; loop<res["Games"][j].QuestionData.length;loop++){
                    Gamesquestionid = res["Games"][j].QuestionData[loop].QuestionId;
                    QuestionDataQuestiontext=res["Games"][j].QuestionData[loop].Questiontext;

                      for(var k = 0; k<res["UserInterestDetails"].length; k++){
                        if(Gamesquestionid == res["UserInterestDetails"][k].QuestionId){
                          answer = res["UserInterestDetails"][k].Answer;
                        
                          if(answer.length==0){
                            break;
                          }
                          if(GameInterestgamename != tempname){
                            this.temparray2.push({
                              gamename: GameInterestgamename
                            });
                            count=count+1;
                          }
                          tempname = GameInterestgamename;
                          count2=count2+1;
                          this.temparray.push({
                            gameid: GameInterestgameid,
                            gamename: res["GamesInterest"][i].gamename,
                            questiontext: QuestionDataQuestiontext,
                            Questionid: Gamesquestionid,
                            answer: answer
                          });
                          break;
                        }
                      }
                  }
                  if(count2!=0){
                    this.array.push({
                      gamename: this.temparray2[count].gamename.toUpperCase(),
                      gamedetails: this.temparray
                    });

                  }
                  else{
                    this.temparray=[];
                  }
 
                } 
              }
              
              
              // this.temparray.push({
              //   gameid: GameInterestgameid,
              //   gamename: res["GamesInterest"][i].gamename,
              //   questiontext: QuestionDataQuestiontext,
              //   Questionid: Gamesquestionid,
              //   answer: answer
              // });
          }
       });
  }

  leftScroll(){
    this.game.nativeElement.scrollLeft -=this.gameblock.nativeElement.clientWidth;
  }
  rightScroll(){
    this.game.nativeElement.scrollLeft +=this.gameblock.nativeElement.clientWidth;
  }

  ngOnInit() {
    this.getUserid();
    this.getUserdetails();
  }

}
