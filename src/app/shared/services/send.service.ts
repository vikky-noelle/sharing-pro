import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class SendService {

  constructor() { }
  data=new ReplaySubject();
  requestForData=new ReplaySubject();
  height=new ReplaySubject();
  innerHeight=new ReplaySubject();
}
