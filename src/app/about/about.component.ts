import { Component, 
    OnInit ,
    HostListener,
    ViewChild,
    ElementRef,
    Renderer2
} from '@angular/core';
import { SendService } from '../shared/services/send.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  private marginTop;
  descTitle="Sports social is";
  descTitleDisplay="";
  desc="Sports digital media and Networking Service that helps you to see\
   what's going around in your locality and around the globe right now & let's\
    you chase your passion to play your favourite sport."
  descDisplay=""
  
  @ViewChild('blog') blog:ElementRef;
  @ViewChild('blogImg') blogImg:ElementRef;
  @ViewChild('socialFeed') socialFeed:ElementRef;
  @ViewChild('socialFeedImg') socialFeedImg:ElementRef;

//@ViewChild('desc') desc:ElementRef;

  image=["/assets/images/car1.jpg",
          "/assets/images/car2.jpg",
          "/assets/images/car3.jpeg",
          "/assets/images/car4.jpg",
          "/assets/images/car5.jpg",
          "/assets/images/car6.jpg"]
  constructor(private margin:SendService,private renderer:Renderer2) {
    this.margin.height.subscribe(
      (top)=>this.marginTop=top
    )
    
   }

  ngOnInit() {
    // console.log(this.desc.nativeElement.textContent);
    this.typeWriterTitle(this.descTitle,0); 
    setTimeout(function() {
      var i=0;
      i++;
      if(i<=5){}
      console.log(i)
    }, 1000);
    this.typeWriter(this.desc,0);

   
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.margin.height.subscribe(
      (top)=>{
        this.marginTop=top;
      }
    )
  }

  leftScroll(){
    this.blog.nativeElement.scrollLeft -=this.blogImg.nativeElement.clientWidth;
    this.socialFeed.nativeElement.scrollLeft -=this.socialFeedImg.nativeElement.clientWidth;
  }
  rightScroll(){
    this.blog.nativeElement.scrollLeft +=this.blogImg.nativeElement.clientWidth;
    this.socialFeed.nativeElement.scrollLeft +=this.socialFeedImg.nativeElement.clientWidth;
  }

  typeWriter(text:string,n:number){
    if(n<text.length){
      this.descDisplay+=(this.desc[n]);
      n++;
      setTimeout(()=> {
       this.typeWriter(this.desc,n);
      }, 30);
    }
  }
  typeWriterTitle(text:string,n:number){
    if(n<text.length){
      this.descTitleDisplay+=(text[n]);
      n++;
      setTimeout(()=> {
       this.typeWriterTitle(text,n);
      }, 40);
    }
  }
  
} 

