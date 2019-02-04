import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../shared/services/get.service';


@Component({
  selector: 'app-sub-topic',
  templateUrl: './sub-topic.component.html',
  styleUrls: ['./sub-topic.component.css']
})
export class SubTopicComponent implements OnInit {
  subTopics = [];
  constructor(private route:ActivatedRoute,
    private getService:GetService) { }
  getSubtopic() {
    const topic_id = +this.route.snapshot.paramMap.get("id");
    console.log(topic_id);
    this.getService.getSubTopic(topic_id).subscribe(res => {
      for (const i in res) {
        this.subTopics.push({
          id: res[i].id,
          topic_id: res[i].topic_id,
          name: res[i].name,
          icon: res[i].icon,
          shortDesc: res[i].shortDesc
        });
      }

      console.log(this.subTopics);
    });
  }
  ngOnInit() {
    this.getSubtopic();
  }

}
