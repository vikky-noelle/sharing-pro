import { 
  Component, 
  OnInit, 
  ViewChildren,
  ElementRef,
  QueryList,
  ViewChild
} from '@angular/core';

import { GetService } from '../../shared/services/get.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkService } from '../../shared/services/link.service';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'SportSocial-help-center-content',
 templateUrl: './help-center-content.component.html',
  styleUrls: ['./help-center-content.component.css']
})
export class HelpCenterContentComponent implements OnInit {
  ptopic =[];
  topicName="";
  windowNavbar:boolean=true;
  Keywords=[];
  topics = [];
  subtopics=[];
  topicId;
  topicname:string='';
  isDropdownIconclicked: boolean = false;
  pagetitle='Sports Social Help Center';
  description="How can we help you today? Using Sports Social, New to Sports Social? Learn the basics to get the most out of Sports Social. Having an issue contact us";
  metakeywords="Sports Social Help,Sports Social Help Center,Customer care Sports Social,Contact Sports Social,Chase Your Sport,FAQ Sports Social,Sports Social Support";
  top='';
  sub: Subscription;
  constructor(private getService: GetService,
    private router: Router, 
    private route:ActivatedRoute,
    private link:LinkService,
    private meta:Meta,
    private title:Title,
    ) { }

  @ViewChild('problems') problems:ElementRef;
  @ViewChildren('problem') problem: QueryList<any>
  hide=document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;


  // Getting topics
  AllTopics() {
    this.getService.getTopics().subscribe(res => {
      var body = JSON.parse(res._body);
      for (const i in body) {
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
        // const url = 'https://www.sportsocial.in/' + this.strip(body[i].namkaran).replace(/\s/g, '-').toLowerCase();
        // this.link.addTag({ rel: 'canonical', href: url } );
      }
      console.log(this.topics);
      console.log(this.topicname);
      if(this.topicname=='')
        this.topicId = this.topics[0].id;
        this.getSubTopics(this.topicId);
     
    }); 
  }
//   strip(html) {
//     const tmp = this.renderer.createElement('DIV');
//     tmp.innerHTML = html;
//     return tmp.textContent || tmp.innerText || '';
// }
  SubtopicsIconChange(id){
    this.subtopics=[];
    this.getSubTopics(id);
    this.getSeo(id);
  };
  
  getSubTopics(id){
  this.getService.getSubTopic(id).subscribe(res=>{
      var body = JSON.parse(res._body);
      this.subtopics=[];
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
  showw() {
    this.hide[0].style.display="block";
    console.log('show working');
 
}
home() {
  this.router.navigate(['/HelpCenter']); 
}
close(){
  this.hide[0].style.display="none";
}
  getdata(topic_id, topic_name, id){
    const qid=0;
    this.ptopic[0]=topic_id;
    this.ptopic[1]=topic_name;
    this.ptopic[2]=id;
    this.router.navigate(['/HelpCenter/' + topic_name], {queryParams: {topic_id: topic_id, id: id, qid:qid, name:topic_name}}); 
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
    this.meta.updateTag({name:'description',content:this.description});
    this.meta.updateTag({name:'keywords',content:this.metakeywords});
    this.meta.updateTag({property:'og:title',content:this.pagetitle});
    this.meta.updateTag({property:'og:description',content:this.description});
    this.meta.updateTag({property:'og:keywords',content:this.metakeywords});

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
    
