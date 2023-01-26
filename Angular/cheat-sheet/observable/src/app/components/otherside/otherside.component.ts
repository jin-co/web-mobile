import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-otherside',
  templateUrl: './otherside.component.html',
  styleUrls: ['./otherside.component.css'],
})
export class OthersideComponent implements OnInit {
  data!: string;
  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {
    // this.observableService.getObserve()?.subscribe((data) => {
    //   this.data = data
    //   console.log(data)
    // });
    this.observableService.getObserve()?.subscribe({
      next() {console.log('h')},
      error() {console.log('h')},
      complete() {console.log('h')},
    })
  }
}
