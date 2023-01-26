import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  observe!:Observable<string>
  constructor() { }

  showObserve(input:string) {
    this.observe = new Observable(o => {
      o.next(input)
    })
  }
}
