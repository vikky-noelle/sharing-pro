import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SportSocial-help-center-header',
  templateUrl: './help-center-header.component.html',
  styleUrls: ['./help-center-header.component.css']
})
export class HelpCenterHeaderComponent implements OnInit {

  quickAnswers:{ques:string,url:string}[]=[
    {ques:"How to use Sports Social in your locality?",url:"#"},
    {ques:"What is Open Arena?",url:"#"},
    {ques:"How to inform playmates about my match?",url:"#"},
    {ques:"How to connect with people having similar level of expertise?",url:"#"},
    {ques:"How to postpone my match?",url:"#"},
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
