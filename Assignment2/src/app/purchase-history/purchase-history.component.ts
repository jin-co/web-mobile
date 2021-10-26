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

  // flags for sorting
  quantityACS: boolean = true
  itemACS: boolean = true

  constructor(
    public datastore: DatastoreService
  ) { }

  ngOnInit(): void {
  }

  // removes selected item from the list and the local store
  removeItem(obj: ShoppingList) {    
    this.datastore.histories = this.datastore.histories.filter(i => i !== obj)
    localStorage.setItem('purchased', JSON.stringify(this.datastore.histories));     
  }

  // removes all the items from the list and the local store
  removeAll() {
    this.datastore.histories.splice(0)
    localStorage.setItem('purchased', JSON.stringify(this.datastore.histories)); 
  }

  // changes sort order in four ways
  // item(ascending | descending)
  // quantity(ascending | descending)
  toggleSort(num: number) {
    switch (num) {
      case 1:
        if (this.quantityACS) {
          this.datastore.histories.sort((a, b) => b.quantity - a.quantity)
        } else {
          this.datastore.histories.sort((a, b) => a.quantity - b.quantity)      
        }
        this.quantityACS = !this.quantityACS
        break;
    
      case 2:
        if (this.itemACS) {
          this.datastore.histories.sort((a, b) => a.item.toLowerCase().charCodeAt(0) - b.item.toLowerCase().charCodeAt(0))
        } else {
          this.datastore.histories.sort((a, b) => b.item.toLowerCase().charCodeAt(0) - a.item.toLowerCase().charCodeAt(0))
        }
        this.itemACS = !this.itemACS
        break;
    }
  }
}
