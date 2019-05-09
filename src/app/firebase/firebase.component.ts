import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'sports-social-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  mycourse:any[];

  constructor(db:AngularFireDatabase) {
    db.list('/courses').valueChanges().subscribe(courses=>{
      this.mycourse=courses;
      console.log("hey shaurya this is courses of fcm:",this.mycourse);
  })
   }

  ngOnInit() {
  }

}
