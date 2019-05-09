import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  constructor() { }
sourabhFb="https://www.facebook.com/login.php?skip_api_login=1&api_key=1783378011931155&kid_directed_site=0&app_id=1783378011931155&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fclient_id%3D1783378011931155%26state%3Dsource%253Df%2526%26response_type%3Dcode%26sdk%3Dphp-sdk-6.0-dev%26redirect_uri%3Dhttps%253A%252F%252Flogin.naukri.com%252FnLogin%252FCallbackController.php%26scope%3Demail%252Cuser_birthday%252Cuser_location%252Cuser_hometown%252Cuser_work_history%252Cuser_education_history%26ret%3Dlogin%26fallback_redirect_uri%3Daea3999e-d504-1d5a-d3f0-bd5a84f671d1&cancel_url=https%3A%2F%2Flogin.naukri.com%2FnLogin%2FCallbackController.php%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dsource%253Df%2526%23_%3D_&display=page&locale=en_GB";

  Sourabhdesc="Sourabh handels the frontend developement at Sport Social,where he oversees the company's goal, including functionality of website & he actively involved in other departments of company.Sourabh holds a Masters in Computer application from National institute of technology."
  Tushardesc="Tushar Gangvar co-founded of Sporr Social Inc. in 2015 and returned as chief executiv officer in September 2016.Additionaly.Tushar Co-founder square, Where he serves as CEO and chairman"
  Nikhildesc="Nikhil Kanujiya co-founded of Sporr Social Inc. in 2015 and returned as chief executiv officer in September 2016.Additionaly.Nikhil Co-founder square, Where he serves as CEO and chairman"
  Aniketdesc="Aniket Chaturvedi is the Tech Lead for Sport Social.He is a Full Stack Developer with vested interests in technology.A software engineer, responsible for leading a development team, and responsible for the quality of its technical deliverables."

  imgarr=[
    {name:"Sourabh Arora",profile:"Web Developer",desc:this.Sourabhdesc,url:"assets/images/football-min.jpg",fburl:this.sourabhFb},
    {name:"Tushar Gangvar",profile:"CEO",desc:this.Tushardesc,url:"assets/images/football-min.jpg"},
    {name:"Nikhil Kanujiya",profile:"CEO",desc:this.Nikhildesc,url:"assets/images/football-min.jpg"},
    {name:"Aniket Chaturvedi",profile:"Tech Lead",desc:this.Aniketdesc,url:"assets/images/IMG_20181020_190416.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"}
  ]
  ngOnInit() {
  }

}
