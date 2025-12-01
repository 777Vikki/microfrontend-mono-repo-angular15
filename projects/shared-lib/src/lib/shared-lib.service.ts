import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {
  private dataSubject = new Subject<string>();
  data$ = this.dataSubject.asObservable();

  constructor() { }

  sendMessage(msg: string) {
    this.dataSubject.next(msg);
  }
}
