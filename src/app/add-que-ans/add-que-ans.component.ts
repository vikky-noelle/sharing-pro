import { Component, OnInit ,Renderer2} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Meta, Title} from '@angular/platform-browser'
import { GetService } from '../shared/services/get.service';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-add-que-ans',
  templateUrl: './add-que-ans.component.html',
  styleUrls: ['./add-que-ans.component.css']
})
export class AddQueAnsComponent implements OnInit {
   quesAns=[];
  // quesAns:{
  //   id: string,
  //         topic_id: string,
  //         subtopic_id:string ,
  //         subtopic_name:string,
  //         ques: string,
  //         ans: string,
  //         icon: string
  // }[]=[];
  Ans = "";
  Ques="";
  img;
  
  blog:{title:string,question:string,answer:string}={title:'',question:'',answer:''};
  constructor( private router: Router,
    private route: ActivatedRoute,
    private getService: GetService,
    private load:PostService,
    private meta :Meta,
    private pagetitle:Title,
    private renderer: Renderer2) {}

  ngOnInit() {
    const topicId = +this.route.snapshot.paramMap.get("topicId");
    const subtopicId = +this.route.snapshot.paramMap.get("subtopicId");
    this.getQuesAns(topicId, subtopicId); 
    console.log("hello",this.quesAns);

  }
  strip(html) {
    const tmp = this.renderer.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
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
          ans: body[i].ans,
          icon: body[i].icon
        });
        
      }
      this.Ans = this.quesAns[0].ans;
    });
  }
  getAns(id){
    for(const qu in this.quesAns){
      if(this.quesAns[qu].id == id)
        this.Ans = this.quesAns[qu].ans;
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
