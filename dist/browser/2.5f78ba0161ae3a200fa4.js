(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{BvhX:function(e,n,t){"use strict";t.r(n);var l=t("CcnG"),a=function(){},o=t("pMnS"),i=t("ghpE"),r=t("1JRN"),u=t("ZYCi"),c=t("Ip0R"),s=t("+5cj"),m=t("WHsL"),d=t("jPFz"),p=t("TyVa"),g=t("HraD"),h=t("ellD"),N=t("e0+Q"),f=t("GytN"),y=t("a18t"),v=t("fECr"),w=t("SetW"),b=t("HP8k"),x=t("EfPX"),C=t("ZYjt"),I=t("sugK"),P=t("9k3z"),A=t("z4/S"),$=t("1haT"),k=t("fp1T"),R=t("EUsW"),T=t("Yfbq"),S=function(){function e(e,n,t,l,a,o,i,r,u){this.matchData=e,this.newsData=n,this.renderer=t,this.activeRoute=l,this.router=a,this.zone=o,this.load=i,this.metaservice=r,this.pagetitle=u,this.globalArena=[],this.prevPageNo=0,this.nextPageNo=0,this.urlChanged=!1,this.Sports=[{id:0,title:"Popular"},{id:17,title:"Cricket"},{id:23,title:"Football"},{id:6,title:"Basketball"},{id:36,title:"Lawn Tennis"},{id:5,title:"Badminton"},{id:29,title:"Hockey"},{id:56,title:"Table Tennis"},{id:60,title:"Volleyball"}]}return e.prototype.reloadPage=function(){this.zone.runOutsideAngular(function(){location.reload()})},e.prototype.globalFeed=function(){var e=this;this.activeRoute.params.subscribe(function(n){e.gameName!==n.sport&&void 0!==e.gameName&&(console.log("true",e.gameName,n.sport),e.reloadPage()),e.gameName=n.sport,e.gameId=e.Sports.find(function(n){return n.title===e.gameName}).id,console.log(e.gameName,e.gameId);var t=e.matchData.globalMatchFeed(e.nextPageNo,e.gameId),l=e.newsData.globalNewsFeed(e.nextPageNo,e.gameName.toLowerCase());Promise.all([t,l]).then(function(n){console.log(n),e.globalArena=e.globalArena.concat(n[0]).concat(n[1]),console.log(e.globalArena)}).catch(function(e){console.log("err",e)})})},e.prototype.nextPage=function(e){this.prevPageNo=e,this.globalFeed()},e.prototype.onWindowScroll=function(e){this.nextPageNo=Math.floor(scrollY/2400),this.nextPageNo>0&&this.prevPageNo<this.nextPageNo&&(this.nextPage(this.nextPageNo),console.log("nextPage",this.nextPageNo,e))},e.prototype.ngOnInit=function(){this.globalFeed(),this.pagetitle.setTitle(this.gameName),this.metaservice.updateTag({name:"title",content:this.gameName}),this.metaservice.updateTag({name:"description",content:"See What's going around you in "+this.gameName+" in the "+this.gameName+" Arena. Use "+this.gameName+" Arena to find,connect,play, follow "+this.gameName+" matches, players, academies, coaches, events etc. in your locality and around the world | stay connected to your "+this.gameName+" world"}),this.metaservice.updateTag({name:"keywords",content:this.gameName+"Arena,Sports Social "+this.gameName+","+this.gameName+" Grounds Nearby,"+this.gameName+" Events Nearby, "+this.gameName+" Matches Nearby, Connect "+this.gameName+" Players, Play "+this.gameName+", Find "+this.gameName+" Players,Find "+this.gameName+" Academies,"+this.gameName+" Tournaments Nearby"}),this.metaservice.updateTag({property:"og:title",content:this.gameName}),this.metaservice.updateTag({property:"og:description",content:"See What's going around you in "+this.gameName+" in the "+this.gameName+" Arena. Use "+this.gameName+" Arena to find,connect,play, follow "+this.gameName+" matches, players, academies, coaches, events etc. in your locality and around the world | stay connected to your "+this.gameName+" world"}),this.metaservice.updateTag({property:"og:keywords",content:this.gameName+"Arena,Sports Social "+this.gameName+","+this.gameName+" Grounds Nearby,"+this.gameName+" Events Nearby, "+this.gameName+" Matches Nearby, Connect "+this.gameName+" Players, Play "+this.gameName+", Find "+this.gameName+" Players,Find "+this.gameName+" Academies,"+this.gameName+" Tournaments Nearby"})},e.prototype.ngOnDestroy=function(){console.log("destroy"),this._masonry&&(this._removeAllSubscription.unsubscribe(),this._removeItemSubscription.unsubscribe(),this._removeFirstItemSubscription.unsubscribe())},e}(),F=l["\u0275crt"]({encapsulation:2,styles:[["*{box-sizing:border-box}#col-4{margin-left:2.7%;width:30%}@media screen and (max-width:768px){#col-4{width:48%;margin-left:1%}}@media screen and (max-width:500px){#col-4{width:100%}}"],r.a],data:{}});function D(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["class","spinner"],["src","assets/images/sports-social-loading.gif"]],null,null,null,null,null))],null,null)}function L(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,6,null,null,null,null,null,null,null)),(e()(),l["\u0275eld"](1,0,null,null,3,"h1",[["class","type"]],null,null,null,null,null)),(e()(),l["\u0275eld"](2,0,null,null,2,"a",[["routerLink","/OpenArena"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var a=!0;return"click"===n&&(a=!1!==l["\u0275nov"](e,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&a),a},null,null)),l["\u0275did"](3,671744,null,0,u.n,[u.k,u.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),l["\u0275ted"](-1,null,["Open Arena >>"])),(e()(),l["\u0275eld"](5,0,null,null,1,"sports-social-match-card",[["class","cards"]],null,null,null,s.b,s.a)),l["\u0275did"](6,114688,[["matchCard",4]],0,m.a,[l.Renderer2,d.a,l.ComponentFactoryResolver,p.a,g.a,u.k,u.a],{creatorName:[0,"creatorName"],creatorImage:[1,"creatorImage"],eventId:[2,"eventId"],doerId:[3,"doerId"],doerName:[4,"doerName"],doerPic:[5,"doerPic"],matchImage:[6,"matchImage"],matchText:[7,"matchText"],joineeCount:[8,"joineeCount"],commentCount:[9,"commentCount"],promoteCount:[10,"promoteCount"],watchCount:[11,"watchCount"],activityName:[12,"activityName"],activityDate:[13,"activityDate"],matchDate:[14,"matchDate"],gameName:[15,"gameName"],venueName:[16,"venueName"],restrictionCount:[17,"restrictionCount"]},null)],function(e,n){e(n,3,0,"/OpenArena"),e(n,6,1,[n.parent.context.$implicit.creatorName,n.parent.context.$implicit.creatorImage,n.parent.context.$implicit.eventId,n.parent.context.$implicit.doerId,n.parent.context.$implicit.doerName,n.parent.context.$implicit.doerPic,n.parent.context.$implicit.matchImage,n.parent.context.$implicit.matchText,n.parent.context.$implicit.joineeCount,n.parent.context.$implicit.commentCount,n.parent.context.$implicit.promoteCount,n.parent.context.$implicit.watchCount,n.parent.context.$implicit.activityName,n.parent.context.$implicit.activityDate,n.parent.context.$implicit.matchDate,n.parent.context.$implicit.gameName,n.parent.context.$implicit.venueName,n.parent.context.$implicit.restrictionCount])},function(e,n){e(n,2,0,l["\u0275nov"](n,3).target,l["\u0275nov"](n,3).href)})}function M(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,6,null,null,null,null,null,null,null)),(e()(),l["\u0275eld"](1,0,null,null,3,"h1",[["class","type"]],null,null,null,null,null)),(e()(),l["\u0275eld"](2,0,null,null,2,"a",[["routerLink","/AroundTheWorld"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var a=!0;return"click"===n&&(a=!1!==l["\u0275nov"](e,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&a),a},null,null)),l["\u0275did"](3,671744,null,0,u.n,[u.k,u.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),l["\u0275ted"](-1,null,["Around The World >>"])),(e()(),l["\u0275eld"](5,0,null,null,1,"sports-social-news-card",[["class","cards"]],null,null,null,h.b,h.a)),l["\u0275did"](6,114688,null,0,N.a,[l.Renderer2,u.k,d.a],{newsId:[0,"newsId"],newsImage:[1,"newsImage"],sourceImage:[2,"sourceImage"],sourceName:[3,"sourceName"],desc:[4,"desc"],likeCount:[5,"likeCount"],shareCount:[6,"shareCount"],commentCount:[7,"commentCount"],url:[8,"url"],insertedDate:[9,"insertedDate"],publishedAt:[10,"publishedAt"],title:[11,"title"]},null)],function(e,n){e(n,3,0,"/AroundTheWorld"),e(n,6,1,[n.parent.context.$implicit.newsId,n.parent.context.$implicit.newsImage,n.parent.context.$implicit.sourceImage,n.parent.context.$implicit.source,n.parent.context.$implicit.desc,n.parent.context.$implicit.likeCount,n.parent.context.$implicit.shareCount,n.parent.context.$implicit.commentCount,n.parent.context.$implicit.url,n.parent.context.$implicit.insertedDate,n.parent.context.$implicit.publishedAt,n.parent.context.$implicit.title])},function(e,n){e(n,2,0,l["\u0275nov"](n,3).target,l["\u0275nov"](n,3).href)})}function z(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,5,"ng-masonry-grid-item",[["id","col-4"]],null,null,null,null,null)),l["\u0275did"](1,4407296,null,0,f.NgMasonryGridDirective,[l.ElementRef,f.NgMasonryGridComponent,l.PLATFORM_ID,f.NgMasonryGridService],null,null),(e()(),l["\u0275and"](16777216,null,null,1,null,L)),l["\u0275did"](3,16384,null,0,c.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),l["\u0275and"](16777216,null,null,1,null,M)),l["\u0275did"](5,16384,null,0,c.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){e(n,1,0),e(n,3,0,1===n.context.$implicit.type),e(n,5,0,0===n.context.$implicit.type)},null)}function O(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l["\u0275and"](16777216,null,null,1,null,z)),l["\u0275did"](2,278528,null,0,c.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),l["\u0275and"](0,null,null,0))],function(e,n){e(n,2,0,n.component.globalArena)},null)}function G(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"sports-social-header",[],null,[["window","resize"]],function(e,n,t){var a=!0;return"window:resize"===n&&(a=!1!==l["\u0275nov"](e,1).onresize()&&a),a},y.b,y.a)),l["\u0275did"](1,4308992,null,0,v.a,[w.a],null,null),(e()(),l["\u0275eld"](2,0,null,null,1,"sports-social-carousel",[],null,[["window","resize"],["window","scroll"]],function(e,n,t){var a=!0;return"window:resize"===n&&(a=!1!==l["\u0275nov"](e,3).onresize()&&a),"window:scroll"===n&&(a=!1!==l["\u0275nov"](e,3).onscroll()&&a),a},b.b,b.a)),l["\u0275did"](3,114688,null,0,x.a,[l.Renderer2,w.a,w.a,C.j,C.i],null,null),(e()(),l["\u0275eld"](4,0,null,null,1,"sports-social-navigation-bar",[],null,[["window","resize"],["window","scroll"],[null,"mouseover"]],function(e,n,t){var a=!0;return"window:resize"===n&&(a=!1!==l["\u0275nov"](e,5).onresize()&&a),"window:scroll"===n&&(a=!1!==l["\u0275nov"](e,5).onscroll()&&a),"mouseover"===n&&(a=!1!==l["\u0275nov"](e,5).onHover(t)&&a),a},I.b,I.a)),l["\u0275did"](5,114688,null,0,P.a,[w.a,w.a,l.Renderer2,u.a,l.NgZone,C.i,C.j],null,null),(e()(),l["\u0275eld"](6,0,null,null,6,"ng-masonry-grid",[],null,null,null,A.b,A.a)),l["\u0275did"](7,1294336,null,0,f.NgMasonryGridComponent,[l.PLATFORM_ID,l.ElementRef,f.NgMasonryGridService],{masonryOptions:[0,"masonryOptions"],useAnimation:[1,"useAnimation"],useImagesLoaded:[2,"useImagesLoaded"]},null),l["\u0275pod"](8,{transitionDuration:0,gutter:1}),(e()(),l["\u0275and"](16777216,null,0,1,null,D)),l["\u0275did"](10,16384,null,0,c.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),l["\u0275and"](16777216,null,0,1,null,O)),l["\u0275did"](12,16384,null,0,c.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),l["\u0275eld"](13,0,null,null,1,"sports-social-footer",[],null,[["window","scroll"]],function(e,n,t){var a=!0;return"window:scroll"===n&&(a=!1!==l["\u0275nov"](e,14).onscroll()&&a),a},$.b,$.a)),l["\u0275did"](14,114688,null,0,k.a,[],null,null)],function(e,n){var t=n.component;e(n,1,0),e(n,3,0),e(n,5,0),e(n,7,0,e(n,8,0,"0.4s",2),!0,!0),e(n,10,0,0===t.globalArena.length),e(n,12,0,t.globalArena.length>0),e(n,14,0)},null)}var _=l["\u0275ccf"]("sports-social-sports-specific-feed",S,function(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"sports-social-sports-specific-feed",[],null,[["window","scroll"]],function(e,n,t){var a=!0;return"window:scroll"===n&&(a=!1!==l["\u0275nov"](e,1).onWindowScroll(t)&&a),a},G,F)),l["\u0275did"](1,245760,null,0,S,[R.a,T.a,l.Renderer2,u.a,u.k,l.NgZone,p.a,C.i,C.j],null,null)],function(e,n){e(n,1,0)},null)},{},{},[]),E=t("q4oO"),W=t("UpbY"),j=t("3ros"),H=t("wZCS"),K=t("i4Oa"),V=t("xtEQ"),U=t("H6Li"),Y=t("iXwx"),Z=t("HUAu"),B=t("PpLr");t.d(n,"SportsSpecificFeedModuleNgFactory",function(){return J});var J=l["\u0275cmf"](a,[],function(e){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,i.a,_]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[l.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,f.NgMasonryGridService,f.NgMasonryGridService,[l.PLATFORM_ID]),l["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),l["\u0275mpd"](1073742336,u.o,u.o,[[2,u.u],[2,u.k]]),l["\u0275mpd"](1073742336,E.a,E.a,[]),l["\u0275mpd"](1073742336,W.a,W.a,[]),l["\u0275mpd"](1073742336,j.a,j.a,[]),l["\u0275mpd"](1073742336,H.a,H.a,[]),l["\u0275mpd"](1073742336,K.a,K.a,[]),l["\u0275mpd"](1073742336,V.a,V.a,[]),l["\u0275mpd"](1073742336,U.a,U.a,[]),l["\u0275mpd"](1073742336,Y.a,Y.a,[]),l["\u0275mpd"](1073742336,Z.a,Z.a,[]),l["\u0275mpd"](1073742336,B.a,B.a,[]),l["\u0275mpd"](1073742336,f.NgMasonryGridModule,f.NgMasonryGridModule,[]),l["\u0275mpd"](1073742336,a,a,[]),l["\u0275mpd"](1024,u.i,function(){return[[{path:"",component:S}]]},[])])})}}]);