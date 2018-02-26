import { Injectable } from '@angular/core';
import { PostService } from './post.service';

@Injectable()
export class NewsService {

  globalArena = [];

  constructor(
    private get: PostService
  ) { }

  globalNewsFeed( page, gameName ) {
    return new Promise( ( resolve, reject) => {
      this.get.globalNewsFeed( page, gameName ).subscribe(
        res => {
          const data = res;
           console.log(data);
          // tslint:disable-next-line:forin
          for ( const i in data ) {
            this.globalArena.push({
              type: data[i].feedType,
              commentCount: data[i].commentCount,
              likeCount: data[i].likeCount,
              shareCount: data[i].shareCount,
              publishedAt: data[i].publishedAt,
              gameName: data[i].gameName,
              newsId: data[i]._id,
              newsImage: data[i].newsImage,
              sourceImage: data[i].sourceImage,
              source: data[i].source,
              title: data[i].title,
              url: data[i].url,
              desc: data[i].desc
            });
          }
          resolve(this.globalArena.slice(this.globalArena.length - 15, this.globalArena.length));
         },
        err => {
          const errObj = { 'err': err, 'message': 'Something went wrong with News feed!' };
          reject(errObj);
        }
      );
    });
  }


}
