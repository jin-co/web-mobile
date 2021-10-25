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

  removeItem(obj: ShoppingList) {    
    this.datastore.items = this.datastore.items.filter(i => i !== obj)    
  }

  removeAll() {
    this.datastore.items.splice(0)
    console.log(this.datastore.items)
  }
}
