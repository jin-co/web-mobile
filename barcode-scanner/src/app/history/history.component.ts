import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  pageTitle: string = "Scan history"
  histories: string[] = ["h", "hh"]
  constructor() { }

  ngOnInit(): void {
  }

  remove() {
    this.histories = this.histories.slice(0, -1)
    console.log('hh')
  }

}
