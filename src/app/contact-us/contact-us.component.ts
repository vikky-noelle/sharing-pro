
import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators,FormsModule } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Http } from '@angular/http';
import { PostService } from '../shared/services/post.service';
import { Contactus2 } from '../contactus2';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form = new Contactus2();
  title="Contact | Sports Social";
  description="You can contact Sports Social support and customer care for any issues you are facing related to app, website, blog or any of other product. You can chat with us on Whatsapp, Email us, Call us. For more information to know about sports social you can also visit our helpcenter";
  keywords="Contact Sports Social,Customer Care Sports Social,Email Sports Social,Phone Number Sports Social,Sports Social Office,Sports Social Enquiry,Sports Social Gurgaon" 
  
  

  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search' ) public searchElement: ElementRef;
  lat: number = 28.4700264/*=28.473660*/;
  lng: number = 77.0889223/*=77.086710*/;
  zoom: number = 15;
  formresponse;
  constructor(private http:Http,private post:PostService,
    private metattitle:Title,
    private metaservice:Meta) { 
      this.metattitle.setTitle(this.title);
      this.metaservice.updateTag({name:'title',content:this.title});
      this.metaservice.updateTag({name: 'keywords' , content: this.keywords});
      this.metaservice.updateTag({name: 'description', content: this.description});
      this.metaservice.updateTag({property:'og:title',content:this.title});
      this.metaservice.updateTag({property:'og:keywords',content:this.keywords});
      this.metaservice.updateTag({property:'og:description',content:this.description});
     }

  onsubmit(form2:Contactus2){
    this.post.saveformdata(form2).subscribe((res)=>{
      console.log("this is forom data",res[0].status);
      this.formresponse=res;
      // window.location.reload();
    })
  }

  windowReload(){
    window.location.reload();
  }
  // popup = document.getElementsByClassName('popup') as HTMLCollectionOf<HTMLElement>;
  // openpopup(){
  //       this.popup[0].style.display="block";
  //     }
  //     closepopup(){
  //       this.popup[0].style.display="none";
  //     }


  ngOnInit() {
  }  
}
















// import { Component, OnInit } from '@angular/core';
// import { MapsAPILoader } from '@agm/core';
// import { ViewChild, ElementRef, NgZone, } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, Validators,FormsModule } from '@angular/forms';
// import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
// import { Http } from '@angular/http';
// import { PostService } from '../shared/services/post.service';
// import { Contactus2 } from '../contactus2';
// import { Title, Meta } from '@angular/platform-browser';

// @Component({
//   selector: 'sports-social-contact-us',
//   templateUrl: './contact-us.component.html',
//   styleUrls: ['./contact-us.component.css']
// })
// export class ContactUsComponent implements OnInit {
//   form = new Contactus2();
//   title="Contact | Sports Social";
//   description="You can contact Sports Social support and customer care for any issues you are facing related to app, website, blog or any of other product. You can chat with us on Whatsapp, Email us, Call us. For more information to know about sports social you can also visit our helpcenter";
//   keywords="Contact Sports Social,Customer Care Sports Social,Email Sports Social,Phone Number Sports Social,Sports Social Office,Sports Social Enquiry,Sports Social Gurgaon" 
  

//   @ViewChild('places') places: GooglePlaceDirective;
//   @ViewChild('search' ) public searchElement: ElementRef;
//   lat: number = 28.4700264;
//   lng: number = 77.0889223;
//   zoom: number = 15;
//   formresponse;
//   constructor(private http:Http,
//     private post:PostService,
//     private metattitle:Title,
//     private metaservice:Meta) { 
//     this.metattitle.setTitle(this.title);
//     this.metaservice.updateTag({name:'title',content:this.title});
//     this.metaservice.updateTag({name: 'keywords' , content: this.keywords});
//     this.metaservice.updateTag({name: 'description', content: this.description});
//     this.metaservice.updateTag({property:'og:title',content:this.title});
//     this.metaservice.updateTag({property:'og:keywords',content:this.keywords});
//     this.metaservice.updateTag({property:'og:description',content:this.description});
//      }

//   onsubmit(form2:Contactus2){
//     this.post.saveformdata(form2).subscribe((res)=>{
//       console.log("this is forom data",res[0].status);
//       this.formresponse=res;
//       window.location.reload();
//     })
//   }
  
//   

//   ngOnInit() {
    
    
//   }  
// }
