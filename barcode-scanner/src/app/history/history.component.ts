import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  pageTitle: string = "Scan history"
  histories: string[] = ["h", "hh"]  // with service, no need for this
  constructor(
    public datastore: DatastoreService
  ) { }

  ngOnInit(): void {
  }

  // remove() {
  //   this.histories = this.histories.slice(0, -1)
  //   console.log('hh')
  // }

  // with service
  remove() {
    this.histories = this.datastore.scans.slice(0, -1)
    console.log('hh')
  }

}
