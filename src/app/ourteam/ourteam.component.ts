import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  constructor() { }
sourabhFb="https://www.facebook.com/sourabh.arora.5011";

  Sourabhdesc="Sourabh handels the frontend developement at Sport Social,where he oversees the company's goal, including functionality of website & he actively involved in other departments of company.Sourabh holds a Masters in Computer application from National institute of technology."
  Tushardesc="Tushar Gangvar co-founded of Sporr Social Inc. in 2015 and returned as chief executiv officer in September 2016.Additionaly.Tushar Co-founder square, Where he serves as CEO and chairman"
  Nikhildesc="Nikhil Kanujiya co-founded of Sporr Social Inc. in 2015 and returned as chief executiv officer in September 2016.Additionaly.Nikhil Co-founder square, Where he serves as CEO and chairman"
  //Aniketdesc="Aniket Chaturvedi is the Tech Lead for Sport Social.He is a Full Stack Developer with vested interests in technology.A software engineer, responsible for leading a development team, and responsible for the quality of its technical deliverables."

  imgarr=[
    {name:"Sourabh Arora",profile:"Web Developer",desc:this.Sourabhdesc,url:"assets/images/football-min.jpg",fburl:this.sourabhFb},
    {name:"Tushar Gangvar",profile:"CEO",desc:this.Tushardesc,url:"assets/images/football-min.jpg"},
    {name:"Nikhil Kanujiya",profile:"CEO",desc:this.Nikhildesc,url:"assets/images/football-min.jpg"},
  //  {name:"Aniket Chaturvedi",profile:"Tech Lead",desc:this.Aniketdesc,url:"assets/images/IMG_20181020_190416.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"}
  ]
  ngOnInit() {
  }

}
