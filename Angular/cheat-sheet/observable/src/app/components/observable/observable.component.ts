import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  input!: string;
  what!: string;
  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {}

  onClick() {
    this.observableService.showObserve(this.input)
  }
}
