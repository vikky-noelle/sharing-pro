import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

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


  activityExactDate(i: string) {
    const months = [
      'Jan', 'Feb', 'March', 'April',  'May', 'June', 'July', 'Aug',  'Sept', 'Oct', 'Nov', 'Dec'
    ];
    const matchDate = new Date(i);
    const presentDate = new Date();
    // console.log('Today at ' + matchDate.getHours() + ':' + matchDate.getMinutes());
    if ( matchDate.getUTCDate() === presentDate.getUTCDate()
      && matchDate.getFullYear() === presentDate.getFullYear()
      && matchDate.getMonth() === presentDate.getMonth()) {
       // console.log("he")
        return 'Today at' + matchDate.getHours() + ':' + matchDate.getMinutes();
    } else {
      return 'On ' + months[matchDate.getMonth()] + ' '
          + matchDate.getUTCDate() + ' at ' + matchDate.getHours() + ':' + matchDate.getMinutes();
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

}
