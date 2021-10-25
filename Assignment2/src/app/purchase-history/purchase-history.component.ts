import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { ShoppingList } from '../models/shopping-list';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {
  pageTitle: string = "Purchase History"
  constructor(
    public datastore: DatastoreService
  ) { }

  ngOnInit(): void {
  }

  // removes selected item
  removeItem(obj: ShoppingList) {    
    this.datastore.histories = this.datastore.histories.filter(i => i !== obj)
    localStorage.setItem('purchased', JSON.stringify(this.datastore.histories));     
  }

  // removes all the items
  removeAll() {
    this.datastore.histories.splice(0)
    localStorage.setItem('purchased', JSON.stringify(this.datastore.histories)); 
  }
}
