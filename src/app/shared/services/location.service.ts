import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationService {

  feedPageRequestObject: {
    page: String;
  };

  position: {
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

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  getGeoLocation( ) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const crd = pos.coords;
            console.log(crd);
            this.position = {
              latitude: crd.latitude,
              longitude: crd.longitude
            };
            resolve(this.position);
            console.log('Your current position is:');
            console.log(`Latitude is : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log('page no. is :'+this.feedPageRequestObject.page);
            console.log(`More or less ${crd.accuracy} meters.`);
          },
          (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            this.position = {
              latitude: 0,
              longitude: 0
            };
            resolve(this.position);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        );
    });
  }

}
