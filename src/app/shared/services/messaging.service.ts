import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { take, catchError, timestamp } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Http,Response } from '@angular/http';
import { Options } from 'selenium-webdriver/edge';

@Injectable()
export class MessagingService {

  currentMessage = new BehaviorSubject(this.currentMessage);
  posturl="http://35.176.65.124:2200/tokens/";
  TokenAvailable:string;
  body;

  constructor(
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging,
    private afs: AngularFirestore,
    private http:Http )
    
    {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  /**
   * update token in firebase database
   * 
   * @param userId userId as a key 
   * @param token token as a value
   */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        
        const data = {};
        data[userId] = token
        this.angularFireDB.object('fcmTokens/').update(data)
      })
  }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        this.TokenAvailable=token;
        console.log(token);
        this.updateToken(userId, token);
        this.sendToken(token);
      }   
      ,
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }

    );
    
  }


  sendToken(tkn:string){
    this.body={
      generatedToken:tkn
    }
    this.http.post(this.posturl,this.body).subscribe((res)=>{})
  }



//    saveToken(user, token): void {
//      console.log("hey this is user", user,"and this is token of saveing data",token);
//     const currentTokens = user.fcmTokens || { }
//     // If token does not exist in firestore, update db
//     if (!currentTokens[token]) {
//       const userRef = this.afs.collection('users').doc(user.uid)
//       const tokens = { ...currentTokens, [token]: true }
//       userRef.update({ fcmTokens: tokens })
//     }
// }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next("payload");
      })
    }
}
