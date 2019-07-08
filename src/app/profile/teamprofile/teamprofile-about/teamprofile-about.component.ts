import { TeamprofileComponent } from './../teamprofile.component';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'sports-social-teamprofile-about',
  templateUrl: './teamprofile-about.component.html',
  styleUrls: ['./teamprofile-about.component.css']
})
export class TeamprofileAboutComponent implements OnInit {
  
  members;
  description;
  array=[];
  Matcharr=[];
  // @Input() member =[];
  constructor(
    private parent: TeamprofileComponent
  ) { }
  
  ngOnInit() {
    // console.log("about working");
    this.members = this.parent.members;
    this.description = this.parent.description;
    this.Matcharr = this.parent.past;
    console.log(this.description);

  }
}
