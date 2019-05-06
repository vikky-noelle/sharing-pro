import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Http } from '@angular/http';
import { PostService } from '../shared/services/post.service';
import { Contactus } from '../contactus';

@Component({
  selector: 'sports-social-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  body;
  
  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search' ) public searchElement: ElementRef;
  lat: number = 28.4700264/*=28.473660*/;
  lng: number = 77.0889223/*=77.086710*/;
  zoom: number = 15;
  constructor(private http:Http,private post:PostService) {  }

  registerform:FormGroup;

  onsubmit(savedata:Contactus){
    this.post.saveformdata(savedata).subscribe((res)=>{
      console.log("this is forom data",res);
      window.location.reload();
    })
  }

  ngOnInit() {

     
  }

}
