import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ModalService {

  constructor() { }

  show: BehaviorSubject<boolean> = new BehaviorSubject(false);

  toggle() {
    this.show.next(!this.show.value);
  }

  watch() {
    return this.show.asObservable();
  }

}
