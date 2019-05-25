import { PostService } from './../shared/services/post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sports-social-localitypage',
  templateUrl: './localitypage.component.html',
  styleUrls: ['./localitypage.component.css']
})
export class LocalitypageComponent implements OnInit {
  @Input() photo: string;
  mview;
  service=[];
  lvdata = [];
  constructor(private post:PostService) { }

  ngOnInit() {
    this.lmv();
    if(window.innerWidth <= 700) {
      this.mview = 0;
    }
    else {
      this.mview = 1;
    }
  }

  lmv() {
    this.post.Localityviewdata(this.service)
    .subscribe(
      (response) => {
      for(const i in response){
        if(+i == 0) {
          this.photo = response[i].shortDesc;
        }
        else {
        this.lvdata.push({
          id: response[i].id,
          name: response[i].name,
          icon: response[i].icon,
          shortDesc: response[i].shortDesc,
        });
        }  
      }  
    },
    (error) => console.log(error)
    );
  }

}
