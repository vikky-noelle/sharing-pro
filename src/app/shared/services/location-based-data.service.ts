import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationBasedDataService {

  feedPageRequestObject: {
    page: String;
  };

  feedPositionRequestObject: {
    latitude: number;
    longitude: number;
  };

  constructor(
    private http: HttpClient
  ) { }

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  /* success(pos) {
    const crd = pos.coords;
    console.log(crd);
    this.position = {
      lat: crd.latitude,
      long: crd.longitude
    };
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  } */

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  getGeoLocation( ) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const crd = pos.coords;
        console.log(crd);
        this.feedPositionRequestObject = {
          latitude: crd.latitude,
          longitude: crd.longitude
        };
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      },
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  }

 /*  globalFeed( pageNo, type) {
    this.feedPageRequestObject = {
      page: pageNo,
      type: type
    };
    const feedRequestObject = { ...this.feedPageRequestObject, ...this.feedPositionRequestObject };
    console.log(feedRequestObject);
    return this.http.post('https://atg.sportsocial.in/feed/globalfeed', feedRequestObject);
  }
 */
  globalMatchFeed(pageNo) {
    this.feedPageRequestObject = {
      page: pageNo
    };
    const feedRequestObject = { ...this.feedPageRequestObject, ...this.feedPositionRequestObject };
    console.log(feedRequestObject);
    return this.http.post('https://test.sportsocial.in/poc/webfeed', feedRequestObject);
  }
}
