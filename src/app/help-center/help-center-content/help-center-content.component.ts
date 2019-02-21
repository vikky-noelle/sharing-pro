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

import { Router, ActivatedRoute } from '@angular/router';
import { GetService } from '../../shared/services/get.service';
import { PropertyService } from '../../shared/services/property.service';


@Component({
  selector: 'SportSocial-help-center-content',
 templateUrl: './help-center-content.component.html',
  styleUrls: ['./help-center-content.component.css']
})
export class HelpCenterContentComponent implements OnInit {

  windowNavbar:boolean=true;
  topics = [];
  subtopics=[];
  topicId;
  isDropdownIconclicked: boolean = false;
  
  
  constructor(private renderer:Renderer2,
    private getService: GetService, 
    private router: Router, private route: ActivatedRoute,
    private height: PropertyService
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
          shortDesc: body[i].shortDesc
        });
      }
      console.log(this.topics);
      this.topicId = this.topics[0].id;
      this.getSubTopics(this.topicId);
    }); 
  }
  SubtopicsIconChange(id){
    this.subtopics=[];
    this.getSubTopics(id);
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

  openDropdown() {
    this.isDropdownIconclicked = true;
  }
  closeDropdown() {
    this.isDropdownIconclicked = false;
  }
  
  
  ngOnInit() {
    this.AllTopics();
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
 

  
}
