import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InteractionService {
    private _listners = new Subject<any>();
    private _response = new Subject<any>();

    listen(): Observable<any> {
       return this._listners.asObservable();
    }
    listentoroute(): Observable<any> {
        return this._response.asObservable();
     }

    interactfunction(array) {
       this._listners.next(array);
    }
    routechangefunction(arr: String){
        console.log("working");
        this._response.next(arr);
    }

}