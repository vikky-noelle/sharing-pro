import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SportSocial-help-center-footer',
  templateUrl: './help-center-footer.component.html',
  styleUrls: ['./help-center-footer.component.css']
})
export class HelpCenterFooterComponent implements OnInit {
  footer:{name?:string,Url:string,image?:string}[]=[
    {name:"About" ,Url:"/About"},
    {name:"Blog" ,Url:"#"},
    {name:"App" ,Url:"#"},
    {name:"Terms and Condition" ,Url:"#"},
    {name:"Privacy Policy" ,Url:"#"},
    {name:"Open Arena" ,Url:"#"},
    {name:"Around The World" ,Url:"#"},
    {Url:"#",image:"/assets/images/insta.png"},
    {Url:"#",image:"/assets/images/twitter.png"},
    {Url:"#",image:"/assets/images/youtube.jpg"},
    {Url:"#",image:"/assets/images/facebook.jpg"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
