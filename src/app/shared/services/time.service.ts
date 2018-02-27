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
    console.log(matchDate.toLocaleDateString('en-US', dateOptions), matchDate.toLocaleTimeString('en-US', timeOpt));
    // console.log('Today at ' + matchDate.getHours() + ':' + matchDate.getMinutes());
    if ( matchDate.getUTCDate() === presentDate.getUTCDate()
      && matchDate.getFullYear() === presentDate.getFullYear()
      && matchDate.getMonth() === presentDate.getMonth()) {
       // console.log("he")
        return 'Today at ' + matchDate.toLocaleTimeString( 'en-US', timeOpt);
    } else {
      return 'On ' + matchDate.toLocaleDateString('en-US', dateOptions) + ' at ' + matchDate.toLocaleTimeString('en-US', timeOpt);
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

  timeToStart(i) {
    const matchDate = new Date(i);
    const presentDate = new Date();
    if (matchDate < presentDate) {
      return '0';
    }
    this.$counter = Observable.interval(1000).map((x) => {
      this.diff = Math.floor((matchDate.getTime() - new Date().getTime()) / 1000);
      console.log(x);
      return x;
    });
  }

  dhms(t) {
    let days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
        days + 'd',
        hours + 'h',
        minutes + 'm',
        seconds + 's'
    ].join(' ');
  }

}
