import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GetService } from '../shared/services/get.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {
  topics=[];
  constructor(private getService:GetService,
    private router:Router) { }
  AllTopics() {
    this.getService.getTopics().subscribe(res => {
      var body =JSON.parse(res._body);
      for (const i in body) {
        this.topics.push({
          id: body[i].id,
          name: body[i].name,
          icon: body[i].icon,
          shortDesc: body[i].shortDesc
        });
      }
      console.log(this.topics);
    });
  }
  send() {
    this.router.navigate(["addsubtopic"]);
  }
  ngOnInit() {
    this.AllTopics();
  }

}
