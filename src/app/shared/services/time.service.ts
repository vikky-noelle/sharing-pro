import { Injectable } from '@angular/core';

import { Observable, Subscription } from 'rxjs/Rx';

@Injectable()
export class TimeService {
    private future: Date;
    private futureString: string;
    private diff: number;
    private $counter: Observable<number>;
    private subscription: Subscription;
    private message: string;
  constructor() { }
  tellmethetime(string){
    var ny, mon, leap, nd, month="";
    leap=false;
    ny = Math.floor(string/86400);
    if(ny%4 === 0){
      leap=true;
    }
    mon = string/86400 - ny;
    nd = Math.floor(mon*365);
    ny = 1970 + ny;
    if(leap){
      if(nd < 31){
        month = "january";
        nd = nd - 31;
      }
      else if(nd <= 60 && nd >31){
        month = "february";
        nd = nd - 60;
      }
    } 
    else{
      if(nd < 31){
        month = "january";
        nd = nd - 31;
      }
      else if(nd <= 59 && nd >31){
        month = "february";
        nd = nd - 59;
      }
    }
    if(month.length===0){
    }
  }
  timePassed(i: string) {
    const writtenDate = new Date(parseInt(i, 10) * 1000);
    const presentDate = new Date();
    if (writtenDate.getDate() === presentDate.getDate() &&
        writtenDate.getMonth() === presentDate.getMonth() &&
        writtenDate.getFullYear() === presentDate.getFullYear()) {
          if (writtenDate.getHours() === presentDate.getHours()) {
            if (writtenDate.getMinutes() === presentDate.getMinutes()) {
              if (writtenDate.getSeconds() === presentDate.getSeconds()) {
                return 'Just Now';
              }else {
                return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
              }
            }else {
              return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago';
            }
          }else {
            return presentDate.getHours() - writtenDate.getHours() + ' hrs ago';
          }
    }else {
      return this.ExactDate(parseInt(i, 10));
    }
  }

  ExactDate(i: number) {
    const writtenDate = new Date(i * 1000);
    return  writtenDate.toDateString();
  }


  exactDate(i) {
    const dateOptions = { month: 'short', day: 'numeric' };
    const timeOpt = {hour: '2-digit', minute: '2-digit'};
    const matchDate = new Date(i);
    const presentDate = new Date();
    // console.log(matchDate.toLocaleDateString('en-US', dateOptions), matchDate.toLocaleTimeString('en-US', timeOpt));
    // console.log('Today at ' + matchDate.getHours() + ':' + matchDate.getMinutes());
    if ( matchDate.getUTCDate() === presentDate.getUTCDate()
      && matchDate.getFullYear() === presentDate.getFullYear()
      && matchDate.getMonth() === presentDate.getMonth()) {
       // console.log("he")
        return 'Today at ' + matchDate.toLocaleTimeString( 'en-US', timeOpt);
    } else {
      return  matchDate.toLocaleDateString('en-US', dateOptions) + ' at ' + matchDate.toLocaleTimeString('en-US', timeOpt);
    }
  }

  relativeDate( i ) {
    const months = [
      'Jan', 'Feb', 'March', 'April',  'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    const matchDate = new Date(i);
    const presentDate = new Date();
    if (matchDate.getDate() === presentDate.getDate() &&
        matchDate.getMonth() === presentDate.getMonth() &&
        matchDate.getFullYear() === presentDate.getFullYear()) {
          if (matchDate.getHours() === presentDate.getHours()) {
            if (matchDate.getMinutes() === presentDate.getMinutes()) {
              if (matchDate.getSeconds() === presentDate.getSeconds()) {
                return 'Just Now';
              }else {
                return presentDate.getSeconds() - matchDate.getSeconds() + ' sec ago';
              }
            }else {
              return presentDate.getMinutes() - matchDate.getMinutes() + ' min ago';
            }
          }else {
            return presentDate.getHours() - matchDate.getHours() + ' hrs ago';
          }
    }else {
      return matchDate.getDate() + ' ' + months[matchDate.getMonth()] + ' ' +  matchDate.getFullYear();
    }
  }
  newsDate(i) {
    const news = new Date(i);
    const dateOptions = { month: 'short', day: 'numeric' , year: 'numeric'};
    return news.toLocaleDateString('en-US', dateOptions);
  }

}
