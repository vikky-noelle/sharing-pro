import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Meta, Title} from '@angular/platform-browser'
import { GetService } from '../shared/services/get.service';

@Component({
  selector: 'app-add-que-ans',
  templateUrl: './add-que-ans.component.html',
  styleUrls: ['./add-que-ans.component.css']
})
export class AddQueAnsComponent implements OnInit {
  quesAns=[];
  Ans = "";
  img;
  constructor( private router: Router,
    private route: ActivatedRoute,
    private getService: GetService,
    private meta :Meta,
    private pagetitle:Title) {}

  ngOnInit() {
    const topicId = +this.route.snapshot.paramMap.get("topicId");
    const subtopicId = +this.route.snapshot.paramMap.get("subtopicId");
    console.log(topicId, " ", subtopicId);
    this.getQuesAns(topicId, subtopicId); 
  }

  getQuesAns(topicId: number, subtopicId: number) {
    this.getService.getQA(topicId, subtopicId).subscribe(res => {
      console.log(res);
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
      console.log(this.quesAns);
      this.Ans = this.quesAns[0].ans;
    });
  }
  
  getAns(id){
    for(const qu in this.quesAns){
      console.log(qu);
      if(this.quesAns[qu].id == id)
        this.Ans = this.quesAns[qu].ans;
    }
  }

  getImg(img){
    for(const image in this.quesAns){
      console.log(image);
      if(this.quesAns[img].icon==img){
          this.img= this.quesAns[img].icon;
      }
    }
  }
}
