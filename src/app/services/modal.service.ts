import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ModalService {

  loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  showLoading() {
    console.log("In service function");
    this.loading.next(true);
  }

  hideLoading() {
    this.loading.next(false);
  }
}
