import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  constructor() { }

  imgarr=[
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"},
    {url:"assets/images/football-min.jpg"}
  ]
  ngOnInit() {
  }

}
