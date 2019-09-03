import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {
 title="Team behind Sports Social";
  constructor(private titleservice:Title,
    private metaservice:Meta) {
      this.titleservice.setTitle(this.title);
     }
sourabhFb="https://www.facebook.com/sourabh.arora.5011";

  Sourabhdesc="Sourabh handels the frontend developement at Sport Social,where he oversees the company's goal, including functionality of website & he actively involved in other departments of company.Sourabh holds a Masters in Computer application from National institute of technology."
  Tushardesc="Tushar Gangvar co-founded of Sport Social Inc. in 2015 and returned as chief executive officer in September 2016.Additionaly.Tushar Co-founder square, Where he serves as CEO and chairman"
  Nikhildesc="Nikhil Kanujiya co-founded of Sport Social Inc. in 2015 and returned as chief executive officer in September 2016.Additionaly.Nikhil Co-founder square, Where he serves as CEO and chairman"
  Aniketdesc="Aniket Chaturvedi is the Tech Lead for Sport Social.He is a Full Stack Developer with vested interests in technology.A software engineer, responsible for leading a development team, and responsible for the quality of its technical deliverables."
  Gopaldesc="Gathering and evaluating user requirements, in collaboration with product managers and engineers. Illustrating design ideas using storyboards, process flows and sitemaps. Designing graphic user interface elements, like menus, tabs and widgets.";
  imgarr=[
    {name:"Nikhil Kanaujia",profile:"Co Founder & CEO",desc:this.Nikhildesc,url:"",fburl:""},
    {name:"Tushar Gangwar",profile:"MD & COO",desc:this.Tushardesc,url:"",fburl:""},
    {name:"Raghav Khandelwal",profile:"Director Finance and Strategy",desc:"",url:"",fburl:""},
    {name:"Aniket Chaturvedi",profile:"Tech Lead",desc:this.Aniketdesc,url:"assets/images/sport-social-team-aniket.png",fburl:""},
    {name:"Sourabh Arora",profile:"Front end web developer",desc:this.Sourabhdesc,url:"assets/images/sport-social-team-sourabh.png",fburl:this.sourabhFb},
    {name:"Kapil Pokheriyal",profile:"Android Developer",desc:"",url:"assets/images/sport-social-team-kapil.png",fburl:""},
    {name:"Harsh Punj",profile:"Business Development Manager",desc:"",url:"",fburl:""},
    {name:"Aditya Shastry",profile:"Content Writer",desc:"",url:"",fburl:""},
    {name:"Anubhav Bajpeyee",profile:"Marketing and Blog Manager",desc:"",url:"",fburl:""},
    {name:"Gopal Singh",profile:"UI/UX Designer",desc:this.Gopaldesc,url:"assets/images/sport-social-team-gopal.png",fburl:""},
    {name:"Abhinav Katiyar",profile:"Assistant Blog Manager",desc:"",url:"",fburl:""}
  ]
  ngOnInit() {
  }

}
