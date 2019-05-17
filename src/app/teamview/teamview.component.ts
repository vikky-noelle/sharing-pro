import { Component, OnInit } from '@angular/core';
import { GetService } from '../shared/services/get.service';

@Component({
  selector: 'sports-social-teamview',
  templateUrl: './teamview.component.html',
  styleUrls: ['./teamview.component.css']
})
export class TeamviewComponent implements OnInit {
  
  service = '';
  constructor(private get:GetService) { }

  ngOnInit() {
    this.tmv();
  }
  // anchor scroll
  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  tmv() {
    this.get.getTeamviewData()
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
