(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+aI8":function(e,t,a){"use strict";a.r(t);var n=a("CcnG"),i=function(){},r=a("pMnS"),o=a("1JRN"),s=a("ZYCi"),l=a("Ip0R"),m=a("B2tc"),d=a("iwN1"),c=a("2W/C"),u=a("iPe9"),p=a("a18t"),f=a("fECr"),h=a("SetW"),g=a("Z3mE"),w=a("SbLv"),y=a("0zkG"),F=a("ChXE"),v=a("TyVa"),b=a("jPFz"),k=a("y+iE"),T=function(){function e(e,t,a,n,i,r,o,s,l){var m=this;this.pagetitle=e,this.metaservice=t,this.route=a,this.location=n,this.time=i,this.router=r,this.postservice=o,this.event=s,this.cookie=l,this.show=!1,this.title="Arena | Sports Social",this.metakey="Open Arena,Sports Social,Sports Arena nearby,Sports events nearby,Sports Activities nearby,Sports Grounds nearby, Connect to Sports players nearby,Find Sports players nearby",this.metades="See What's going around you in sports in the open Arena. Use Arena to find,connect,play, follow matches, players, academies, coaches and events in your favorite sport in your locality and around the world | stay connected to your sports world.",this.Matcharr=[],this.gendercheck="",this.selected="",this.number=[],this.timestamp=Math.floor(Date.now()/1e3),this.Sports=[{id:5,title:"Badminton"},{id:6,title:"Basketball"},{id:17,title:"Cricket"},{id:23,title:"Football"},{id:29,title:"Hockey"},{id:36,title:"Lawn Tennis"},{id:56,title:"Table Tennis"},{id:60,title:"Volleyball"}],this.count=0,this.arr=[],this.showloader=!1,this.pagetitle.setTitle(this.title),this.metaservice.updateTag({name:"title",content:this.title}),this.metaservice.updateTag({name:"keywords",content:this.metakey}),this.metaservice.updateTag({name:"description",content:this.metades}),this.metaservice.updateTag({property:"og:title",content:this.title}),this.metaservice.updateTag({property:"og:description",content:this.metades}),this.metaservice.updateTag({property:"og:keywords",content:this.metakey}),this.event.listentoroute().subscribe(function(e){m.Matcharr=[],m.arr=[],null===e?(m.openarenamatches(),m.selected="Open Arena"):(m.sportspecific(e),m.selected=e[0].toUpperCase(),m.selected=m.selected+e.slice(1))})}return e.prototype.openarenamatches=function(){var e=this;console.log(this.cookie.get("longitude"));var t,a,n,i,r=!1;this.location.getGeoLocation().then(function(o){e.cookie.check("longitude")&&(o.latitude=e.cookie.get("latitude"),o.longitude=e.cookie.get("longitude"));for(var s=0;s<e.Sports.length;s++)e.postservice.homeMatchFeed(o.latitude,o.longitude,e.Sports[s].id,e.timestamp).subscribe(function(o){for(var s in e.show=!0,e.count=e.count+1,o.Feed){var l,m,d;null===o.Feed[s].Team2name?(l="/assets/images/sportsocialteamlogo.png",o.Feed[s].Team2name="None"):l=o.Feed[s].Team2Pic,"mix"===(t=o.Feed[s].gender).toLowerCase()?t="Mix up ":"male"===t.toLowerCase()?t="Men's ":"female"===t.toLowerCase()&&(t="Women's ");var c=new String(new Date(1e3*o.Feed[s].startdatetime));e.startTime=c.slice(3,21),a=Date.now(),(a/=1e3)>(n=o.Feed[s].startdatetime)&&(a-n>86400?(null!==o.Feed[s].scoreTeam1&&null!==o.Feed[s].scoreTeam2||(e.startTime="Score Awaited",i=!1),null===o.Feed[s].Team2name&&(e.startTime="Match Abandoned",i=!1)):null!==o.Feed[s].scoreTeam1&&null!==o.Feed[s].scoreTeam2||(e.startTime="Score Awaited",i=!1)),(a===n||a<n)&&(e.startTime="Upcoming",i=!1,r=!0,"None"===o.Feed[s].Team2name&&(e.startTime="Waiting for oponent")),null!==o.Feed[s].scoreTeam1&&null!==o.Feed[s].scoreTeam2&&(i=!0,e.startTime="Match Finished"),0===o.Feed[s].CommentCount&&(o.Feed[s].CommentCount=!1),0===o.Feed[s].PromoteCount&&(o.Feed[s].PromoteCount=!1),0===o.Feed[s].WatchCount&&(o.Feed[s].WatchCount=!1),0===o.Feed[s].JoineeCount&&(o.Feed[s].JoineeCount=!1),0==(m=o.Feed[s].ageBracket)?d="Under 13":1==m?d="Under 15":2==m?d="Under 17":3==m?d="Under 19":4==m?d="Under 21":5==m?d="Under 23":-1==m&&(d="Open for All"),e.arr.push({feedid:o.Feed[s].feedid,Activity_name:o.Feed[s].Activity_name,userName:o.Feed[s].user_name,Uniquename:null==o.Feed[s].MatchStarterUniqueName?"":o.Feed[s].MatchStarterUniqueName,MatchStarterUniqueName:null==o.Feed[s].MatchStarterUniqueName?"":o.Feed[s].MatchStarterUniqueName,finished:i,upcoming:r,timestamp:o.Feed[s].startdatetime,result:null==o.Feed[s].scoreTeam1||null==o.Feed[s].scoreTeam2?e.time.ExactDate(o.Feed[s].startdatetime):"Match Finished",InsertedDate:o.Feed[s].InsertedDate,profile_image:o.Feed[s].profile_image,Venue_Name:o.Feed[s].Venue_Name,EventText:o.Feed[s].EventText,startdatetime:e.startTime,starttimestamp:o.Feed[s].startdatatime,gamename:o.Feed[s].GameName,GameId:o.Feed[s].GameId,Event_Image:o.Feed[s].Event_Image,coverpic:o.Feed[s].CoverPic,MatchStarterName:o.Feed[s].MatchStarterName,MatchStarterPhoto:o.Feed[s].MatchStarterPhoto,Team1Name:o.Feed[s].Team1name,Team1Pic:o.Feed[s].Team1Pic,Team2Name:o.Feed[s].Team2name,Team2Pic:l,scoreTeam1:null==o.Feed[s].scoreTeam1||null==o.Feed[s].scoreTeam2?"":o.Feed[s].scoreTeam1+" - ",scoreTeam2:null==o.Feed[s].scoreTeam2||null==o.Feed[s].scoreTeam1?"VS":o.Feed[s].scoreTeam2,gender:t,Profile_Photo:o.Feed[s].Profile_Photo,city:o.Feed[s].City,CommentCount:o.Feed[s].CommentCount,PromoteCount:o.Feed[s].PromoteCount,WatchCount:o.Feed[s].WatchCount,JoineeCount:o.Feed[s].JoineeCount,age:d}),e.startTime=e.arr[s].startdatetime}e.Sports.length===e.count&&e.sorting(e.arr)})})},e.prototype.openAppDownloadPopup=function(){this.router.navigate([{outlets:{AppDownload:["PopUp"]}}],{skipLocationChange:!0})},e.prototype.sportspecific=function(e){for(var t,a,n,i,r,o,s,l=this,m=!1,d=0;d<this.Sports.length;d++)this.Sports[d].title.toLowerCase()===e&&(t=this.Sports[d].id);this.location.getGeoLocation().then(function(e){l.postservice.homeMatchFeed(e.latitude,e.longitude,t,l.timestamp).subscribe(function(e){for(var t in l.show=!0,l.count=l.count+1,e.Feed){var d;null===e.Feed[t].Team2name?(d="/assets/images/sportsocialteamlogo.png",e.Feed[t].Team2name="None"):d=e.Feed[t].Team2Pic,a=e.Feed[t].gender,0==(o=e.Feed[t].ageBracket)?s="Under 13":1==o?s="Under 15":2==o?s="Under 17":3==o?s="Under 19":4==o?s="Under 21":5==o?s="Under 23":-1==o&&(s="Open for All"),"mix"===a.toLowerCase()?a="Mix up ":"male"===a.toLowerCase()?a="Men's ":"female"===a.toLowerCase()&&(a="Women's ");var c=new String(new Date(1e3*e.Feed[t].startdatetime));l.startTime=c.slice(3,21),n=Date.now(),(n/=1e3)>(i=e.Feed[t].startdatetime)&&(n-i>86400?(null!==e.Feed[t].scoreTeam1&&null!==e.Feed[t].scoreTeam2||(l.startTime="Score Awaited",r=!1),null===e.Feed[t].Team2name&&(l.startTime="Match Abandoned",r=!1)):null!==e.Feed[t].scoreTeam1&&null!==e.Feed[t].scoreTeam2||(l.startTime="Score Awaited",r=!1)),(n===i||n<i)&&(l.startTime="Upcoming",r=!1,m=!0),null!==e.Feed[t].scoreTeam1&&null!==e.Feed[t].scoreTeam2&&(r=!0,l.startTime="Match Finished"),l.Matcharr.push({feedid:e.Feed[t].feedid,Activity_name:e.Feed[t].Activity_name,userName:e.Feed[t].user_name,Uniquename:null==e.Feed[t].MatchStarterUniqueName?"":e.Feed[t].MatchStarterUniqueName,MatchStarterUniqueName:null==e.Feed[t].MatchStarterUniqueName?"":e.Feed[t].MatchStarterUniqueName,finished:r,upcoming:m,timestamp:e.Feed[t].startdatetime,result:null==e.Feed[t].scoreTeam1||null==e.Feed[t].scoreTeam2?l.time.ExactDate(e.Feed[t].startdatetime):"Match Finished",InsertedDate:e.Feed[t].InsertedDate,profile_image:e.Feed[t].profile_image,Venue_Name:e.Feed[t].Venue_Name,EventText:e.Feed[t].EventText,startdatetime:l.startTime,starttimestamp:e.Feed[t].startdatatime,gamename:e.Feed[t].GameName,GameId:e.Feed[t].GameId,Event_Image:e.Feed[t].Event_Image,coverpic:e.Feed[t].CoverPic,MatchStarterName:e.Feed[t].MatchStarterName,MatchStarterPhoto:e.Feed[t].MatchStarterPhoto,Team1Name:e.Feed[t].Team1name,Team1Pic:e.Feed[t].Team1Pic,Team2Name:e.Feed[t].Team2name,Team2Pic:d,scoreTeam1:null==e.Feed[t].scoreTeam1||null==e.Feed[t].scoreTeam2?"":e.Feed[t].scoreTeam1+" - ",scoreTeam2:null==e.Feed[t].scoreTeam2||null==e.Feed[t].scoreTeam1?"VS":e.Feed[t].scoreTeam2,gender:a,Profile_Photo:e.Feed[t].Profile_Photo,city:e.Feed[t].City,CommentCount:e.Feed[t].CommentCount,PromoteCount:e.Feed[t].PromoteCount,WatchCount:e.Feed[t].WatchCount,JoineeCount:e.Feed[t].JoineeCount,age:s})}})})},e.prototype.sorting=function(e){for(var t,a=e.length,n=0;n<a;n++)for(var i=0;i<a-1;i++)e[i].timestamp<e[i+1].timestamp&&(t=e[i],e[i]=e[i+1],e[i+1]=t);this.Matcharr=e},e.prototype.ngOnInit=function(){var e;this.route.params.subscribe(function(t){e=t.topic}),void 0===e?(this.openarenamatches(),this.selected="Open Arena"):(this.sportspecific(e),this.selected=e[0].toUpperCase(),this.selected=this.selected+e.slice(1))},e.prototype.ngOnDestroy=function(){this._masonry&&(this._removeAllSubscription.unsubscribe(),this._removeItemSubscription.unsubscribe(),this._removeFirstItemSubscription.unsubscribe())},e}(),x=a("ZYjt"),C=n["\u0275crt"]({encapsulation:2,styles:[["*{scroll-behavior:smooth}.matchfeed-rightside>h1{font-weight:lighter;border-bottom:1px solid silver;letter-spacing:2px;margin-bottom:20px;font-size:3em}.newbox{min-height:600px}.sidenav{margin-top:4%}.rightsidefooter{width:84%;float:right}.matchfeed-rightside{width:80%;float:right}.matchfeed-rightside>div{display:inline-block!important}#col-4{width:33%;margin-bottom:2%;vertical-align:top}#col-4>a{color:#000}@media screen and (min-width:200px) and (max-width:700px){#col-4{margin-left:7.5%;width:95%}.matchfeed-rightside{margin-top:20px;width:100%}.rightsidefooter{width:100%}.newbox{margin-top:45px}}@media screen and (min-width:701px) and (max-width:950px){.matchfeed-rightside{margin-top:20px;width:100%}.rightsidefooter{width:100%}#col-4{margin-left:4%;width:46%}@media screen and (min-width:701px) and (max-width:768px){#col-4{margin-left:3%;width:46%}}}@media screen and (min-width:951px) and (max-width:1100px){#col-4{margin-left:3%;width:46%}}"],o.a],data:{}});function N(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["class","spinner"],["src","assets/images/sports-social-loading.gif"]],null,null,null,null,null))],null,null)}function S(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,4,"div",[["id","col-4"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,t,a){var i=!0;return"click"===t&&(i=!1!==n["\u0275nov"](e,2).onClick(a.button,a.ctrlKey,a.metaKey,a.shiftKey)&&i),i},null,null)),n["\u0275did"](2,671744,null,0,s.m,[s.k,s.a,l.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),n["\u0275eld"](3,0,null,null,1,"sports-social-ss-match-card",[],null,null,null,m.b,m.a)),n["\u0275did"](4,114688,null,0,d.a,[s.k],{matchstartername:[0,"matchstartername"],userName:[1,"userName"],starttimestamp:[2,"starttimestamp"],coverpic:[3,"coverpic"],upcoming:[4,"upcoming"],team1pic:[5,"team1pic"],team2pic:[6,"team2pic"],scoreTeam1:[7,"scoreTeam1"],scoreTeam2:[8,"scoreTeam2"],gamename:[9,"gamename"],startdatetime:[10,"startdatetime"],InsertedDate:[11,"InsertedDate"],Uniquename:[12,"Uniquename"],city:[13,"city"],Venue_Name:[14,"Venue_Name"],MatchStarterUniqueName:[15,"MatchStarterUniqueName"],Team1Name:[16,"Team1Name"],Team2Name:[17,"Team2Name"],EventText:[18,"EventText"],JoineeCount:[19,"JoineeCount"],WatchCount:[20,"WatchCount"],PromoteCount:[21,"PromoteCount"],CommentCount:[22,"CommentCount"],gender:[23,"gender"],finished:[24,"finished"],age:[25,"age"]},null)],function(e,t){e(t,2,0,n["\u0275inlineInterpolate"](1,"/opencard/",t.context.$implicit.feedid,"")),e(t,4,1,[t.context.$implicit.MatchStarterName,t.context.$implicit.userName,t.context.$implicit.starttimestamp,t.context.$implicit.coverpic,t.context.$implicit.upcoming,t.context.$implicit.Team1Pic,t.context.$implicit.Team2Pic,t.context.$implicit.scoreTeam1,t.context.$implicit.scoreTeam2,t.context.$implicit.gamename,t.context.$implicit.startdatetime,t.context.$implicit.InsertedDate,t.context.$implicit.Uniquename,t.context.$implicit.city,t.context.$implicit.Venue_Name,t.context.$implicit.MatchStarterUniqueName,t.context.$implicit.Team1Name,t.context.$implicit.Team2Name,t.context.$implicit.EventText,t.context.$implicit.JoineeCount,t.context.$implicit.WatchCount,t.context.$implicit.PromoteCount,t.context.$implicit.CommentCount,t.context.$implicit.gender,t.context.$implicit.finished,t.context.$implicit.age])},function(e,t){e(t,1,0,n["\u0275nov"](t,2).target,n["\u0275nov"](t,2).href)})}function M(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,2,"div",[["class","rightsidefooter"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,1,"sports-social-backfooter",[],null,null,null,c.b,c.a)),n["\u0275did"](2,114688,null,0,u.a,[],null,null)],function(e,t){e(t,2,0)},null)}function U(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"sports-social-header",[],null,[["window","resize"]],function(e,t,a){var i=!0;return"window:resize"===t&&(i=!1!==n["\u0275nov"](e,1).onresize()&&i),i},p.b,p.a)),n["\u0275did"](1,4308992,null,0,f.a,[h.a,g.a,w.a],null,null),(e()(),n["\u0275eld"](2,0,null,null,2,"div",[["class","sidenav"]],null,null,null,null,null)),(e()(),n["\u0275eld"](3,0,null,null,1,"sports-social-newsidenav",[],null,null,null,y.b,y.a)),n["\u0275did"](4,114688,null,0,F.a,[s.k,s.a,g.a],null,null),(e()(),n["\u0275eld"](5,0,null,null,7,"div",[["class","newbox"]],null,null,null,null,null)),(e()(),n["\u0275eld"](6,0,null,null,6,"div",[["class","matchfeed-rightside"]],null,null,null,null,null)),(e()(),n["\u0275eld"](7,0,null,null,1,"h1",[],null,null,null,null,null)),(e()(),n["\u0275ted"](8,null,["",""])),(e()(),n["\u0275and"](16777216,null,null,1,null,N)),n["\u0275did"](10,16384,null,0,l.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,S)),n["\u0275did"](12,278528,null,0,l.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,M)),n["\u0275did"](14,16384,null,0,l.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,t){var a=t.component;e(t,1,0),e(t,4,0),e(t,10,0,0==a.Matcharr.length),e(t,12,0,a.Matcharr),e(t,14,0,0!==a.Matcharr.length)},function(e,t){e(t,8,0,t.component.selected)})}var P=n["\u0275ccf"]("sports-social-global-match-feed",T,function(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"sports-social-global-match-feed",[],null,null,null,U,C)),n["\u0275did"](1,245760,null,0,T,[x.j,x.i,s.a,k.a,b.a,s.k,v.a,g.a,w.a],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),_=a("GytN"),I=a("3ros"),$=a("wZCS"),A=a("i4Oa"),L=a("H6Li"),D=a("PpLr"),q=a("HUAu"),E=a("Bk60"),G=a("iXwx"),X=a("w/9u"),Y=a("UdFc");a.d(t,"GlobalMatchFeedModuleNgFactory",function(){return W});var W=n["\u0275cmf"](i,[],function(e){return n["\u0275mod"]([n["\u0275mpd"](512,n.ComponentFactoryResolver,n["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,P]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["\u0275mpd"](4608,l.NgLocalization,l.NgLocaleLocalization,[n.LOCALE_ID,[2,l["\u0275angular_packages_common_common_a"]]]),n["\u0275mpd"](4608,_.NgMasonryGridService,_.NgMasonryGridService,[n.PLATFORM_ID]),n["\u0275mpd"](1073742336,l.CommonModule,l.CommonModule,[]),n["\u0275mpd"](1073742336,s.n,s.n,[[2,s.t],[2,s.k]]),n["\u0275mpd"](1073742336,I.a,I.a,[]),n["\u0275mpd"](1073742336,$.a,$.a,[]),n["\u0275mpd"](1073742336,A.a,A.a,[]),n["\u0275mpd"](1073742336,L.a,L.a,[]),n["\u0275mpd"](1073742336,D.a,D.a,[]),n["\u0275mpd"](1073742336,q.a,q.a,[]),n["\u0275mpd"](1073742336,E.a,E.a,[]),n["\u0275mpd"](1073742336,G.a,G.a,[]),n["\u0275mpd"](1073742336,_.NgMasonryGridModule,_.NgMasonryGridModule,[]),n["\u0275mpd"](1073742336,X.a,X.a,[]),n["\u0275mpd"](1073742336,Y.a,Y.a,[]),n["\u0275mpd"](1073742336,i,i,[]),n["\u0275mpd"](1024,s.i,function(){return[[{path:"",component:T}]]},[])])})},"1JRN":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=["ng-masonry-grid-item{display:inline-block}.grid{max-width:100%;list-style:none;margin:30px auto;padding:0}.grid ng-masonry-grid-item{display:block;float:left;width:300px}.grid ng-masonry-grid-item.shown,.no-cssanimations .grid ng-masonry-grid-item,.no-js .grid ng-masonry-grid-item{opacity:1}.grid ng-masonry-grid-item a,.grid ng-masonry-grid-item img{outline:0;border:none;display:block;max-width:100%}.grid.effect-1 ng-masonry-grid-item.animate{-webkit-transform:translateY(200px);transform:translateY(200px);-webkit-animation:.65s forwards moveUp;animation:.65s forwards moveUp}@-webkit-keyframes moveUp{100%{-webkit-transform:translateY(0);opacity:1}}@keyframes moveUp{100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}.grid.effect-2 ng-masonry-grid-item.animate{-webkit-animation:.8s forwards fadeIn;animation:.8s forwards fadeIn}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.grid.effect-3 ng-masonry-grid-item.animate{-webkit-transform:scale(.6);transform:scale(.6);-webkit-animation:.65s ease-in-out forwards scaleUp;animation:.65s ease-in-out forwards scaleUp}@-webkit-keyframes scaleUp{100%{-webkit-transform:scale(1);opacity:1}}@keyframes scaleUp{100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.grid.effect-4{-webkit-perspective:1300px;perspective:1300px}.grid.effect-4 ng-masonry-grid-item.animate{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(400px) translateY(300px) rotateX(-90deg);transform:translateZ(400px) translateY(300px) rotateX(-90deg);-webkit-animation:.8s ease-in-out forwards fallPerspective;animation:.8s ease-in-out forwards fallPerspective}@-webkit-keyframes fallPerspective{100%{-webkit-transform:translateZ(0) translateY(0) rotateX(0);opacity:1}}@keyframes fallPerspective{100%{-webkit-transform:translateZ(0) translateY(0) rotateX(0);transform:translateZ(0) translateY(0) rotateX(0);opacity:1}}.grid.effect-5{-webkit-perspective:1300px;perspective:1300px}.grid.effect-5 ng-masonry-grid-item.animate{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:50% 50% -300px;transform-origin:50% 50% -300px;-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg);-webkit-animation:.8s ease-in-out forwards fly;animation:.8s ease-in-out forwards fly}@-webkit-keyframes fly{100%{-webkit-transform:rotateX(0);opacity:1}}@keyframes fly{100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}.grid.effect-6{-webkit-perspective:1300px;perspective:1300px}.grid.effect-6 ng-masonry-grid-item.animate{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotateX(-80deg);transform:rotateX(-80deg);-webkit-animation:.8s ease-in-out forwards flip;animation:.8s ease-in-out forwards flip}@-webkit-keyframes flip{100%{-webkit-transform:rotateX(0);opacity:1}}@keyframes flip{100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}.grid.effect-7{-webkit-perspective:1300px;perspective:1300px}.grid.effect-7 ng-masonry-grid-item.animate{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg);-webkit-animation:.8s ease-in-out forwards helix;animation:.8s ease-in-out forwards helix}@-webkit-keyframes helix{100%{-webkit-transform:rotateY(0);opacity:1}}@keyframes helix{100%{-webkit-transform:rotateY(0);transform:rotateY(0);opacity:1}}.grid.effect-8{-webkit-perspective:1300px;perspective:1300px}.grid.effect-8 ng-masonry-grid-item.animate{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:scale(.4);transform:scale(.4);-webkit-animation:.8s ease-in forwards popUp;animation:.8s ease-in forwards popUp}@-webkit-keyframes popUp{70%{-webkit-transform:scale(1.1);opacity:.8;-webkit-animation-timing-function:ease-out}100%{-webkit-transform:scale(1);opacity:1}}@keyframes popUp{70%{-webkit-transform:scale(1.1);transform:scale(1.1);opacity:.8;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@media screen and (max-width:900px){.grid ng-masonry-grid-item{width:48%}}@media screen and (max-width:400px){.grid ng-masonry-grid-item{width:100%}}"]}}]);