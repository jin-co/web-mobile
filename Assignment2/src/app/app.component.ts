import { Component, OnInit } from '@angular/core';
import { DatastoreService } from './datastore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Grocery List';
  
  changeTitle(pageTitle:string) {
    this.title = pageTitle
  }
  
  constructor(
    public datastore: DatastoreService
  ) {}

  ngOnInit() {
    //test
    // this.datastore.items = [
    //   {
    //     quantity: 1,
    //     item: "water"
    //   },
    //   {
    //     quantity: 2,
    //     item: "watermelon"
    //   },
    //   {
    //     quantity: 3,
    //     item: "waterfall"
    //   },
    //   {
    //     quantity: 4,
    //     item: "water who"
    //   },
    
    // ]

    this.datastore.items = JSON.parse(localStorage.getItem('list') || '')

    this.datastore.histories = JSON.parse(localStorage.getItem('purchased') || '')
  }
}
