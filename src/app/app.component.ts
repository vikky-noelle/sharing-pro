import { Component, HostBinding } from '@angular/core';
// import { MessagingService } from './shared/services/messaging.service';


@Component({
  selector: 'sports-social-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false
})
export class AppComponent {
  title = 'app';
  message;
  msg;
  

  constructor( ) { 
   
    
  }

  ngOnInit() {
    // const userId = 'user001';
    // this.messagingService.requestPermission(userId)
    // this.messagingService.receiveMessage()
    // this.message = this.messagingService.currentMessage
    // console.log("Hey user this is my message:"+JSON.stringify(this.message));
  }
}
