import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class PropertyService {

  constructor() { }

  ofHeader = new ReplaySubject();
  ofCarousel = new ReplaySubject();
  ofNavigationBar = new ReplaySubject();

}
