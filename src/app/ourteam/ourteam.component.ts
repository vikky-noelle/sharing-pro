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
  Aniketdesc="Aniket Chaturvedi is the Tech Lead for Sport Social.He is a Full Stack Developer with vested interests in technology.A software engineer, responsible for leading a development team, and responsible for the quality of its technical deliverables."

  imgarr=[
    {name:"Nikhil Kanaujia",profile:"Co Founder & CEO",desc:this.Nikhildesc,url:"assets/images/football-min.jpg",fburl:""},
    {name:"Tushar Gangwar",profile:"MD & COO",desc:this.Tushardesc,url:"assets/images/football-min.jpg",fburl:""},
    {name:"Raghav Khandelwal",profile:"Director Finance and Strategy",desc:"",url:"assets/images/football-min.jpg",fburl:""},
    {name:"Aniket Chaturvedi",profile:"Tech Lead",desc:this.Aniketdesc,url:"assets/images/sport-social-team-aniket.png",fburl:""},
    {name:"Sourabh Arora",profile:"Front end web developer",desc:this.Sourabhdesc,url:"assets/images/sport-social-team-sourabh.png",fburl:this.sourabhFb},
    {name:"Kapil Pokheriyal",profile:"Android Developer",desc:"",url:"assets/images/sport-social-team-kapil.png",fburl:""},
    {name:"Harsh Punj",profile:"Business Development Manager",desc:"",url:"assets/images/football-min.jpg",fburl:""},
    {name:"Aditya Shastry",profile:"Content Writer",desc:"",url:"assets/images/football-min.jpg",fburl:""},
    {name:"Anubhav Bajpeyee",profile:"Marketing and Blog Manager",desc:"",url:"assets/images/football-min.jpg",fburl:""},
    {name:"Gopal Singh",profile:"UI/UX Designer",desc:"",url:"assets/images/sport-social-team-gopal.png",fburl:""},
    {name:"Abhinav Katiyar",profile:"Assistant Blog Manager",desc:"",url:"assets/images/football-min.jpg",fburl:""}
  ]
  ngOnInit() {
  }

}
