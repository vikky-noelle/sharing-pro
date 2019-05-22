import { Subscription } from 'rxjs/Rx';
import { HelpCenterContentComponent } from './../help-center/help-center-content/help-center-content.component';
import { Component, OnInit ,Renderer2} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Meta, Title} from '@angular/platform-browser'
import { GetService } from '../shared/services/get.service';
import { PostService } from '../shared/services/post.service';
import { SharedService } from '../help-center/help-center-content/sharedservice';
import { QueryValueType } from '@angular/compiler/src/core';


@Component({
  selector: 'app-add-que-ans',
  templateUrl: './add-que-ans.component.html',
  styleUrls: ['./add-que-ans.component.css'],
  providers: [HelpCenterContentComponent],
})
export class AddQueAnsComponent implements OnInit {
   quesAns=[];
   datastr = [];
  
  Ans = "";
  mobv=0;
  Ques="";
  img;
  topicId;
  name;
  qques;
  subtopicId;
  sub: Subscription;
  hide=document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
  blog:{title:string,question:string,answer:string}={title:'',question:'',answer:''};

  constructor( private router: Router,
    private route: ActivatedRoute,
    private sharedservice: SharedService,
    private getService: GetService,
    private load:PostService,
    private meta :Meta,
    private pagetitle:Title,
    private renderer: Renderer2) {}

  ngOnInit() {
    this.datastr=this.sharedservice.userToEdit;
    console.log("lalalala" + this.datastr);
    this.topicId=this.datastr[0];
    this.name=this.datastr[1];
    this.subtopicId=this.datastr[2];
    console.log("wooohoooo" + this.topicId)
    this.getQuesAns(this.topicId, this.subtopicId); 
    console.log("hello",this.name);
    if(window.innerWidth <= 700){
      this.mobv = 1;
      console.log("yeah");
    }

  }
  home() {
    this.router.navigate(['/HelpCenter']); 
  }
  close() {
    this.hide[0].style.display="none";
  }
  strip(html) {
    const tmp = this.renderer.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}
showw() {
  this.hide[0].style.display="block";
}
  getQuesAns(topicId: number, subtopicId: number) {
    this.getService.getQA(topicId, subtopicId).subscribe(res => {
      const body = JSON.parse(res._body);
      for (const i in body) {
        this.quesAns.push({
          id: body[i].id,
          topic_id: body[i].topic_id,
          subtopic_id: body[i].subtopic_id,
          subtopic_name:body[i].subtopic_name,
          ques: body[i].ques,
          qques:body[i].ques.replace(/\s/g, "_"),
          ans: body[i].ans,
          icon: body[i].icon
        });
        
      }
      this.Ans = this.quesAns[0].ans;
      this.Ques = this.quesAns[0].ques;
      this.img = this.quesAns[0].icon;
    });
  }
  
  getAns(id){
    for(const qu in this.quesAns){
      if(this.quesAns[qu].id == id)
        this.Ans = this.quesAns[qu].ans;
        this.Ques = this.quesAns[qu].ques;
        this.qques = this.quesAns[qu].qques;
        this.img = this.quesAns[qu].icon;
    }
    const convertedhtml=this.strip(this.Ans)
   this.meta.updateTag({name:'description',content:convertedhtml});
  this.getQues(id);
  }
  
  getQues(id){
    for(const qu in this.quesAns){
      if(this.quesAns[qu].id == id)
        this.Ques = this.quesAns[qu].ques;
    }
   const convertedhtml= this.strip(this.Ques);
    this.pagetitle.setTitle(convertedhtml);
    this.meta.updateTag({name:'title',content:convertedhtml});
  }
  getsubtopicseo(){

  }

  getImg(img){
    for(const image in this.quesAns){
      //console.log(image);
      if(this.quesAns[img].icon==img){
          this.img= this.quesAns[img].icon;
      }
    }
  }

}
