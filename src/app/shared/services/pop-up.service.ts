import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class PopUpService {

  constructor() { }

  ofCard = new ReplaySubject();

}
