import { Injectable } from '@angular/core';
import { LocationService } from './location.service';
import { PostService } from './post.service';

@Injectable()
export class MatchDataService {

  globalArena = [];

  constructor(
    private loc: LocationService,
    private get: PostService
  ) { }

  getActivityName( activityid ) {
    if ( activityid === 1002 ) {
      return 'Joined';
    }
    if ( activityid === 1004 ) {
      return 'Promoted';
    }
    if ( activityid === 1009 ) {
      return 'Watching';
    }
    if ( activityid === 1005 ) {
      return 'Commented';
    }
    if ( activityid === 1001 ) {
      return 'Created';
    }
  }

  globalMatchFeed( page, gameid ) {
    return new Promise( (resolve, reject) => {
      this.loc.getGeoLocation()
      .then( (pos) => {
        this.get.globalMatchFeed( pos['latitude'], pos['longitude'], page, gameid ).subscribe(
          res => {
            const data = res['Feed'];
            // tslint:disable-next-line:forin
            for ( const i in data ) {
              this.globalArena.push({
                eventId: data[i].eventid,
                creatorImage: data[i].creatorImage,
                creatorName: data[i].creatorName,
                type: data[i].feedtype,
                doerId: data[i].doerId,
                doerName: data[i].user_name,
                doerPic: data[i].Profile_Photo,
                matchText: data[i].EventText,
                matchImage: data[i].Event_Image,
                activityDate: data[i].InsertedDate,
                matchDate:  data[i].startdatetime,
                restrictionCount: data[i].restrictionCount,
                joineeCount: data[i].JoineeCount,
                commentCount: data[i].CommentCount,
                watchCount: data[i].WatchCount,
                promoteCount: data[i].PromoteCount,
                venueName: data[i].Venue_Name,
                gameName: data[i].GameName,
                activityName: this.getActivityName(data[i].ActivityId)
              });
            }
            resolve(this.globalArena.slice( page * 15, (page + 1) * 15));
          },
          err => {
            const errObj = { 'err': err, 'message': 'Something went wrong with Match feed!' };
            reject(errObj);
          }
        );
      }).catch( (err) => {
        console.log('err', err);
      });
    });
  }

}
