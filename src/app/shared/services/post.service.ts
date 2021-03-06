import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
  
  connectObj = {
      sportCode: Number,
      sport: String,
      ageCode: Number,
      ageBracket: Number,
      genderBracket: String
  }
  userprofilefollowerObj=[{
    userid:Number,
    profileid:Number,
    page:Number,
    timestamp:Number
  }]

  userprofileFansObj=[{
    userid:Number,
    profileid:Number,
    page:Number,
    timestamp:Number
  }]
  
  upcomingmatchesobj={
    venueid: String,
    timestamp: Number,
    page: Number,
    userid: String,  
  }
  localityteams={
    LocalityId: Number
  }
  userprofileobj={
      userid:String,
      profileid:String,
      page:Number,
      currentdate:String
   }
   localityobj={
    userid:String,
    venueid:String,
 }
   userprofileplaymateObj=[
     {
      userid:String,
      profileid:String,
      page:Number,
      timestamp:Number
     }
   ]
   userProfielTeamObj={
     userid:String,
     page:Number
   }
   userParticularMatchesObj=[{
    userid:String,
    profileid:String,
    page:Number,
    currentdate:String
   }]
   userProfileAboutObj={
    userid:String,
    profileid:String,
    page:Number,
    currentdate:String
   }

   fanobj=[{
    userid:String,
    profileid:String,
    page:Number,
    timestamp:Number
   }]
   memberobj=[{
    teamid:String,
    userid:String,
    timestamp:Number
   }]

   teamprofileobj={
    userid:String,
    teamid:String,
 }

  paramIdObj:{
    eventid:string;
  }

  loc: {
    latitude: String,
    longitude: String
  };
  BlogId: {
    blogid: string;
  };

  singleMatchReqObj = [];

  homematchfeedObj= {
    latitude:Number,
    longitude:Number,
    gameid:Number,
    timestamp:Number
  }

  matchFeedReqObj = {
    latitude: Number,
    longitude: Number,
    page: Number,
    gameid: Number
  };

  newsFeedRequestObject: {
    page: string;
    game: string
  };

  blogRequestObject: {
    name: string,
    page: number
  };
  
  tvdataobject: [
    {
      id: string,
      name: string,
      icon: string,
      shortDesc: string
    }
  ]
  
  lvdataobject: [
    {
      id: string,
      name: string,
      icon: string,
      shortDesc: string
    }
  ]
  url = [
    'https://test.sportsocial.in/poc/matchinfo',
   'https://test.sportsocial.in/poc/activityuserdetails',
   'https://test.sportsocial.in/poc/activityuserdetailsWeb'
   ];

  constructor(private http: HttpClient) { }

  globalNewsFeed( pageNo, game) {
    this.newsFeedRequestObject = {
      page: pageNo,
      game: game
    };
    console.log(this.newsFeedRequestObject);
    return this.http.post('https://testnews.sportsocial.in/api/news/', this.newsFeedRequestObject);
  }

  blogData(i: number, s: string) {
    this.blogRequestObject = {
      name: s,
      page: i
    };
   // console.log(this.Page);
    return this.http.post('https://test.chaseyoursport.com/loadblogdata', this.blogRequestObject);
  }

  globalMatchFeed(lat, long, page, gameid) {
    this.matchFeedReqObj = {
      latitude: lat,
      longitude: long,
      page: page,
      gameid: gameid
    };
    console.log(this.matchFeedReqObj);
    return this.http.post('https://test.sportsocial.in/web/webfeed', this.matchFeedReqObj);
    // return this.http.post('https://test.sportsocial.in/poc/webfeed', this.matchFeedReqObj);
  }

  homeMatchFeed(lat,long,Gameid,timest){
      this.homematchfeedObj={
        latitude:lat,
        longitude:long,
        gameid:Gameid,
        timestamp:timest
      }
      return this.http.post('https://test.sportsocial.in/web/webfeed',this.homematchfeedObj);
  }

  OpenOneMatchCard(id){
    this.paramIdObj={
      eventid:id
    }
    return this.http.post('https://test.sportsocial.in/web/webmatchinfoV1',this.paramIdObj);
  }

  singleMatchData(eventid, userid, activityid, urlId, page) {
    this.singleMatchReqObj = [{
      'eventid': eventid,
      'userid': userid,
      'activityid': activityid,
      'page': page
    }];
    console.log(this.singleMatchReqObj);
    return this.http.post(this.url[urlId], this.singleMatchReqObj);
  }

  singleNewsData(id) {
    return this.http.post('https://testnews.sportsocial.in/api/newsById', { id: id} );
  }

  insertTopics(topic) {
    console.log(topic)
    return this.http.post('https://helpcenter.chaseyoursport.com/save/topic', topic);
  }
  insertSubTopics(subtopic) {
    return this.http.post('https://helpcenter.chaseyoursport.com/save/subTopics', subtopic);
  }
  insertQuesAns(QA) {
    return this.http.post('https://helpcenter.chaseyoursport.com/save/QA', QA);
  }

  singleBlogSmallDesc(id: string) {
    this.BlogId = {
      blogid: id
    };
   // console.log(this.BlogId);
    return this.http.post('https://test.chaseyoursport.com/loadSingleBlogDataSmallDesc', this.BlogId)
    .map((response: Response) => response.json());
  }

  saveformdata(dataObject){
    return this.http.post('https://test.sportsocial.in/web/webcontactus',dataObject);
  }

  Teamviewdata(tvdataobject){
    return this.http.post('https://test.sportsocial.in/web/webTeamStatic', tvdataobject);
  }

  Localityviewdata(lvdataobject){
    return this.http.post('https://test.sportsocial.in/web/webLocalityStatic', lvdataobject);
  }

  UserProfile(userid,profileid,page,currentdate){
    this.userprofileobj={
      userid:userid,
      profileid:profileid,
      page:page,
      currentdate:currentdate
    }
    return this.http.post('https://test.sportsocial.in/poc/getUserDetails',this.userprofileobj);
  }

  UserProfielPlaymate(userid,profileid,page,timestamp){
    this.userprofileplaymateObj=[{
        userid:userid,
        profileid:profileid,
        page:page,
        timestamp:timestamp
    }];
      return this.http.post('https://test.sportsocial.in/poc/getPlaymatesNew',this.userprofileplaymateObj);
  }
  UserProfileTeams(userid,page){
    this.userProfielTeamObj={
      userid:userid,
      page:page
    }
    return this.http.post('https://test.sportsocial.in/team/getTeamsNew',this.userProfielTeamObj);
  }
  UsersParticularMatches(userid,profileid,page,currentdate){
      this.userParticularMatchesObj=[{
        userid:userid,
        profileid:profileid,
        page:page,
        currentdate:currentdate
      }]
      return this.http.post('https://test.sportsocial.in/user/usermatchesPastFuture',this.userParticularMatchesObj);
  }
  UserProfileAbout(userid,profileid,page,currentdate){
      this.userProfileAboutObj={
        userid:userid,
        profileid:profileid,
        page:page,
        currentdate:currentdate
      }
      return this.http.post('https://test.sportsocial.in/poc/getUserDetails',this.userProfileAboutObj);
  }

  TeamProfile(userid,teamid){
    this.teamprofileobj={
      userid:userid,
      teamid:teamid,
    }
    return this.http.post('https://test.sportsocial.in/team/getTeamDetails',this.teamprofileobj);
  }
  getFan(userid,teamid, timestamp, page){
    this.fanobj=[{
      userid:userid,
      profileid:teamid,
      page: page,
      timestamp: timestamp
    }];
    return this.http.post('https://test.sportsocial.in/poc/getFansNew',this.fanobj);
  }
  getMembers(teamid,userid, timestamp){
    this.memberobj=[{
      teamid:teamid,
      userid:userid,
      timestamp: timestamp
    }];
    return this.http.post('https://test.sportsocial.in/team/getTeamMembers',this.memberobj);
  }
  getLocalityDetails(userid,venueid){
    this.localityobj={
      userid:userid,
      venueid:venueid,
    };
    return this.http.post('https://test.sportsocial.in/venue/getvenueslotdetails_V1',this.localityobj);
  }
  getLocalityTeams(localityid){
    this.localityteams={
      LocalityId:localityid,
    };
    return this.http.post('https://test.sportsocial.in/venue/getLocalityTeams',this.localityteams);
  }
  getUpcomingMatches(userid, venueid, timestamp, page){
    this.upcomingmatchesobj={
      venueid:venueid,
      page: page,
      timestamp: timestamp,
      userid:userid,
    };
    return this.http.post('https://test.sportsocial.in/poc/getVenueUpcomingMatches',this.upcomingmatchesobj);
  }

  getUserProfileFans(userid,profileid,page,timestamp){
    this.userprofileFansObj=[{
      userid:userid,
      profileid:profileid,
      page:page,
      timestamp:timestamp
    }]
    return this.http.post('https://test.sportsocial.in/poc/getFansNew',this.userprofileFansObj);
  }

  getUserProfileFollowers(userid,profileid,page,timestamp){
    this.userprofilefollowerObj =[{
      userid:userid,
      profileid:profileid,
      page:page,
      timestamp:timestamp
    }]
    return this.http.post('https://test.sportsocial.in/poc/getFanFollowing',this.userprofilefollowerObj);
  }

  getconnectusersfilter(sportCode,sport,ageCode,ageBracket,genderBracket){
    this.connectObj ={
     sportCode: sportCode,
     sport: sport,
     ageCode: ageCode,
     ageBracket: ageBracket,
     genderBracket 
    }
    return this.http.post('https://test.sportsocial.in/web/WebConnectFilter',this.connectObj);
 
  }
  
  getconnectusers(){
    return this.http.post('https://test.sportsocial.in/web/WebConnect', {});
  }

  getconnectteams(){
    return this.http.post('https://test.sportsocial.in/web/WebTeams', {});
  }

  getconnectlocality(){
    return this.http.post('https://test.sportsocial.in/web/WebLocality', {});
  }
}
