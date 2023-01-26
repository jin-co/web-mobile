import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  observe!:Observable<string>
  constructor() { }

  showObserve(input:string) {
    this.observe = new Observable((observe) => {
      console.log('something: ', this.observe)
      observe.next(input)
    })
  } 
  
  getObserve() {
    return this.observe
  }
}
