import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-home',
  templateUrl: './observable-home.component.html',
  styleUrls: ['./observable-home.component.scss']
})
export class ObservableHomeComponent implements OnInit {
  private firstObsSubscription!: Subscription;

  constructor() {
  }

  ngOnInit() {
    // semi custom observable
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });

    // custom observable
    const customIntervalObservable = Observable.create((observer: { next: (arg0: number) => void; complete: () => void; error: (arg0: Error) => void; }) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });


    // this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
    //   return data > 0;
    // }), map((data: number) => {
    //   return 'Round: ' + (data + 1);
    // })).subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    //   alert(error.message);
    // }, () => {
    //   console.log('Completed!');
    // });
  }

  // for observables that i made, i have to unsubscribe after using it. this clears the subscription when i leave the component (without this the subscription won't stop)
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
