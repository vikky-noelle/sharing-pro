(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{G4jc:function(e,n,t){"use strict";t.r(n);var o=t("CcnG"),l=function(){},i=t("pMnS"),s=t("ghpE"),r=t("1JRN"),a=t("GytN"),u=t("ellD"),c=t("e0+Q"),d=t("ZYCi"),p=t("jPFz"),m=t("a18t"),g=t("fECr"),w=t("SetW"),h=t("HP8k"),f=t("EfPX"),v=t("ZYjt"),N=t("sugK"),b=t("9k3z"),y=t("z4/S"),C=t("Ip0R"),I=t("1haT"),x=t("fp1T"),M=t("Yfbq"),k=function(){function e(e,n,t,o){this.newsData=e,this.renderer=n,this.pagetitle=t,this.metaservice=o,this.title="Around the World | Sports Social",this.metakey="Sports news from around the world,latest sports news,latest cricket news,football news,tennis news,pro kabbadi news,Hocket news",this.metades="Sports Social Around the World Provides the latest news and stories in sports,sports trends,sports business, international tournaments, cricket news,football news, tennis news, hockey news etc. stay tuned",this.News=[],this.prevPageNo=0,this.nextPageNo=0}return e.prototype.globalNewsFeed=function(e){var n=this;this.newsData.globalNewsFeed(this.nextPageNo,"all").then(function(e){n.News=n.News.concat(e)}).catch(function(e){console.log(e)})},e.prototype.nextPage=function(e){this.prevPageNo=e,this.globalNewsFeed(e)},e.prototype.onWindowScroll=function(e){console.log(Math.floor(scrollY/700),scrollY),this.nextPageNo=Math.floor(scrollY/700),this.nextPageNo>0&&this.prevPageNo<this.nextPageNo&&this.nextPage(this.nextPageNo)},e.prototype.ngOnInit=function(){this.globalNewsFeed(this.nextPageNo),this.pagetitle.setTitle(this.title),this.metaservice.updateTag({name:"title",content:this.title}),this.metaservice.updateTag({name:"keywords",content:this.metakey}),this.metaservice.updateTag({name:"description",content:this.metades}),this.metaservice.updateTag({property:"og:title",content:this.title}),this.metaservice.updateTag({property:"og:description",content:this.metades}),this.metaservice.updateTag({property:"og:keywords",content:this.metakey})},e.prototype.ngOnDestroy=function(){this._masonry&&(this._removeAllSubscription.unsubscribe(),this._removeItemSubscription.unsubscribe(),this._removeFirstItemSubscription.unsubscribe())},e}(),P=o["\u0275crt"]({encapsulation:2,styles:[[""],r.a],data:{}});function R(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["class","spinner"],["src","assets/images/sports-social-loading.gif"]],null,null,null,null,null))],null,null)}function F(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,3,"ng-masonry-grid-item",[["class","col-4"]],null,null,null,null,null)),o["\u0275did"](1,4407296,null,0,a.NgMasonryGridDirective,[o.ElementRef,a.NgMasonryGridComponent,o.PLATFORM_ID,a.NgMasonryGridService],null,null),(e()(),o["\u0275eld"](2,0,null,null,1,"sports-social-news-card",[],null,null,null,u.b,u.a)),o["\u0275did"](3,114688,null,0,c.a,[o.Renderer2,d.k,p.a],{newsId:[0,"newsId"],newsImage:[1,"newsImage"],sourceImage:[2,"sourceImage"],sourceName:[3,"sourceName"],desc:[4,"desc"],likeCount:[5,"likeCount"],shareCount:[6,"shareCount"],commentCount:[7,"commentCount"],url:[8,"url"],insertedDate:[9,"insertedDate"],publishedAt:[10,"publishedAt"],title:[11,"title"]},null)],function(e,n){e(n,1,0),e(n,3,1,[n.context.$implicit.newsId,n.context.$implicit.newsImage,n.context.$implicit.sourceImage,n.context.$implicit.source,n.context.$implicit.desc,n.context.$implicit.likeCount,n.context.$implicit.shareCount,n.context.$implicit.commentCount,n.context.$implicit.url,n.context.$implicit.insertedDate,n.context.$implicit.publishedAt,n.context.$implicit.title])},null)}function S(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"sports-social-header",[],null,[["window","resize"]],function(e,n,t){var l=!0;return"window:resize"===n&&(l=!1!==o["\u0275nov"](e,1).onresize()&&l),l},m.b,m.a)),o["\u0275did"](1,4308992,null,0,g.a,[w.a],null,null),(e()(),o["\u0275eld"](2,0,null,null,1,"sports-social-carousel",[],null,[["window","resize"],["window","scroll"]],function(e,n,t){var l=!0;return"window:resize"===n&&(l=!1!==o["\u0275nov"](e,3).onresize()&&l),"window:scroll"===n&&(l=!1!==o["\u0275nov"](e,3).onscroll()&&l),l},h.b,h.a)),o["\u0275did"](3,114688,null,0,f.a,[o.Renderer2,w.a,w.a,v.j,v.i],null,null),(e()(),o["\u0275eld"](4,0,null,null,1,"sports-social-navigation-bar",[],null,[["window","resize"],["window","scroll"],[null,"mouseover"]],function(e,n,t){var l=!0;return"window:resize"===n&&(l=!1!==o["\u0275nov"](e,5).onresize()&&l),"window:scroll"===n&&(l=!1!==o["\u0275nov"](e,5).onscroll()&&l),"mouseover"===n&&(l=!1!==o["\u0275nov"](e,5).onHover(t)&&l),l},N.b,N.a)),o["\u0275did"](5,114688,null,0,b.a,[w.a,w.a,o.Renderer2,d.a,o.NgZone,v.i,v.j],null,null),(e()(),o["\u0275eld"](6,0,null,null,6,"ng-masonry-grid",[],null,null,null,y.b,y.a)),o["\u0275did"](7,1294336,null,0,a.NgMasonryGridComponent,[o.PLATFORM_ID,o.ElementRef,a.NgMasonryGridService],{masonryOptions:[0,"masonryOptions"],useAnimation:[1,"useAnimation"],useImagesLoaded:[2,"useImagesLoaded"]},null),o["\u0275pod"](8,{transitionDuration:0,gutter:1}),(e()(),o["\u0275and"](16777216,null,0,1,null,R)),o["\u0275did"](10,16384,null,0,C.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),o["\u0275and"](16777216,null,0,1,null,F)),o["\u0275did"](12,278528,null,0,C.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),o["\u0275eld"](13,0,null,null,1,"sports-social-footer",[],null,[["window","scroll"]],function(e,n,t){var l=!0;return"window:scroll"===n&&(l=!1!==o["\u0275nov"](e,14).onscroll()&&l),l},I.b,I.a)),o["\u0275did"](14,114688,null,0,x.a,[],null,null)],function(e,n){var t=n.component;e(n,1,0),e(n,3,0),e(n,5,0),e(n,7,0,e(n,8,0,"0.4s",2),!0,!0),e(n,10,0,0==t.News.length),e(n,12,0,t.News),e(n,14,0)},null)}var z=o["\u0275ccf"]("sports-social-global-news-feed",k,function(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"sports-social-global-news-feed",[],null,[["window","scroll"]],function(e,n,t){var l=!0;return"window:scroll"===n&&(l=!1!==o["\u0275nov"](e,1).onWindowScroll(t)&&l),l},S,P)),o["\u0275did"](1,245760,null,0,k,[M.a,o.Renderer2,v.j,v.i],null,null)],function(e,n){e(n,1,0)},null)},{},{},[]),D=t("q4oO"),T=t("UpbY"),A=t("H6Li"),G=t("PpLr"),L=t("HUAu"),O=t("iXwx");t.d(n,"GlobalNewsFeedModuleNgFactory",function(){return $});var $=o["\u0275cmf"](l,[],function(e){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,s.a,z]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[o.LOCALE_ID,[2,C["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,a.NgMasonryGridService,a.NgMasonryGridService,[o.PLATFORM_ID]),o["\u0275mpd"](1073742336,C.CommonModule,C.CommonModule,[]),o["\u0275mpd"](1073742336,d.o,d.o,[[2,d.u],[2,d.k]]),o["\u0275mpd"](1073742336,D.a,D.a,[]),o["\u0275mpd"](1073742336,T.a,T.a,[]),o["\u0275mpd"](1073742336,A.a,A.a,[]),o["\u0275mpd"](1073742336,G.a,G.a,[]),o["\u0275mpd"](1073742336,L.a,L.a,[]),o["\u0275mpd"](1073742336,O.a,O.a,[]),o["\u0275mpd"](1073742336,a.NgMasonryGridModule,a.NgMasonryGridModule,[]),o["\u0275mpd"](1073742336,l,l,[]),o["\u0275mpd"](1024,d.i,function(){return[[{path:"",component:k}]]},[])])})}}]);