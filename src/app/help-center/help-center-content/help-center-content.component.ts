import { 
  Component, 
  OnInit, 
  HostListener,
  ViewChildren,
  ElementRef,
  Renderer2,
  QueryList,
  ViewChild
} from '@angular/core';

import { GetService } from '../../shared/services/get.service';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from '../../shared/services/link.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'SportSocial-help-center-content',
 templateUrl: './help-center-content.component.html',
  styleUrls: ['./help-center-content.component.css']
})
export class HelpCenterContentComponent implements OnInit {
  topicName="";
  windowNavbar:boolean=true;
  Keywords=[];
  topics = [];
  subtopics=[];
  topicId;
  topicname:string='';
  isDropdownIconclicked: boolean = false;
  pagetitle='Sports Social Help Center';
  top='';
  
  constructor(private getService: GetService, 
    private route:ActivatedRoute,
    private link:LinkService,
    private meta:Meta,
    private title:Title,
    private renderer:Renderer2
    ) { }

  @ViewChild('problems') problems:ElementRef;
  @ViewChildren('problem') problem: QueryList<any>

  AllTopics() {
    this.getService.getTopics().subscribe(res => {
      var body = JSON.parse(res._body);
      for (var i in body) {
        this.topics.push({
          id: body[i].id,
          name: body[i].name,
          icon: body[i].icon,
          shortDesc: body[i].shortDesc,
          namkaran:body[i].name
        
        });
        if(this.topicname!=''){
          if(this.topicname==body[i].name)
            this.topicId=body[i].id;
      }
        const url = 'https://www.sportsocial.in/' + this.strip(body[i].namkaran).replace(/\s/g, '-').toLowerCase();
        this.link.addTag({ rel: 'canonical', href: url } );
      }
      console.log(this.topics);
      console.log(this.topicname);
      if(this.topicname=='')
        this.topicId = this.topics[0].id;
      this.getSubTopics(this.topicId);
     
    }); 
  }
  strip(html) {
    const tmp = this.renderer.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}
  SubtopicsIconChange(id){
    this.subtopics=[];
    this.getSubTopics(id);
    this.getSeo(id);
  };
  
  getSubTopics(id){
  this.getService.getSubTopic(id).subscribe(res=>{
      var body = JSON.parse(res._body);
      for (const i in body) {
        this.subtopics.push({
          topic_id:body[i].topic_id,
          id: body[i].id,
          name: body[i].name,
          icon: body[i].icon,
          shortDesc: body[i].shortDesc
        });
      }
      console.log(this.subtopics);
  });
  }
getSeo(id){
  for(const topic in this.topics){
    if(this.topics[topic].id == id)
      this.top= this.topics[topic].name;
  }
  this.title.setTitle(this.top);
  this.meta.updateTag({name:'title',content:this.top});
}
 

  openDropdown() {
    this.isDropdownIconclicked = true;
  }
  closeDropdown() {
    this.isDropdownIconclicked = false;
  }
  
  
  ngOnInit() {
    this.title.setTitle(this.pagetitle);
    this.meta.updateTag({name:'title',content:this.pagetitle});
    this.meta.updateTag({name:'description',content:"How can we help you today? Using Sports Social, New to Sports Social? Learn the basics to get the most out of Sports Social. Having an issue contact us"});
    this.meta.updateTag({name:'keywords',content:"Sports Social Help,Sports Social Help Center,Customer care Sports Social,Contact Sports Social,Chase Your Sport,FAQ Sports Social,Sports Social Support"});
    if(this.route.snapshot.paramMap.has("topicname")){
       this.topicname = this.route.snapshot.paramMap.get("topicname");
    }
    this.AllTopics();
  }
  setCanonivalURL() {
    let key;
    if (this.Keywords[0].search(/ /g ) === -1) {
       key = this.Keywords[0] ;
    }else {
        key = this.Keywords[0].replace(/\s/g, '-');
    }
    const url = 'https://www.sportsocial.in/' + key
    + '/' + this.pagetitle.replace(/\s/g, '-') + '/' ;
    this.link.addTag({ rel: 'canonical', href: url } );
}
}
    /*
    if(window.innerWidth<900){
      this.windowNavbar=false;
      this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
      this.renderer.setStyle(this.problems.nativeElement,'width','100%')
    }
    else{
      this.windowNavbar=true;
      this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
      this.renderer.setStyle(this.problems.nativeElement,'width','80%')
    }
    if(window.innerWidth<500){
     // this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
      
    }
  }
 
  @HostListener('window:resize', []) onScreenResize() {
    if(window.innerWidth<800){
      this.windowNavbar=false;
      this.renderer.setStyle(this.problems.nativeElement,'display','block')
      this.renderer.setStyle(this.problems.nativeElement,'width','100%')
    }
    else{
      this.windowNavbar=true;
      this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
      this.renderer.setStyle(this.problems.nativeElement,'width','79%')
    }
    if(window.innerWidth<500){
      //this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
      this.windowNavbar = false;
      this.renderer.setStyle(this.problems.nativeElement, 'display', 'inline-block')
      this.renderer.setStyle(this.problems.nativeElement,'width','50%')
      
    }
  }*/

  /*mobile view*/
 

