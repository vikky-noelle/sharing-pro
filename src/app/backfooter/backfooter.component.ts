import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-backfooter',
  templateUrl: './backfooter.component.html',
  styleUrls: ['./backfooter.component.css']
})
export class BackfooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topscroll(){
    window.scrollTo(0,0);
  }
}
