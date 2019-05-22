import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private userId;

  set userToEdit(userId) {
    this.userId = userId;
  }

  get userToEdit() {
    return this.userId;
  }

}