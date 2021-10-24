import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatastoreService } from '../datastore.service';
import { ShoppingList } from '../models/shopping-list';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  pageTitle: string = "Grocery List"

  // item list
  shoppingLists: ShoppingList[] = [];
  
  // test
  isEmpty: boolean = true

  // validations
  quantityCtrl: FormControl = new FormControl(null, Validators.required)
  itemCtrl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.maxLength(16)
  ])

  inputGroup: FormGroup = new FormGroup({
    quantity: this.quantityCtrl,
    item: this.itemCtrl
  })

  constructor(
    private datastore: DatastoreService
  ) { }

  ngOnInit(): void {
    console.log(this.shoppingLists)
  }

  // stores data and reset input fields
  onSubmit(e: Event) {
    if (this.inputGroup.valid) {
      this.shoppingLists.push({
        quantity: this.quantityCtrl.value,
        item: this.itemCtrl.value
      })
      this.datastore.items.push(`${this.quantityCtrl.value} x ${this.itemCtrl.value}`);

      // changes the message on the buy list
      this.isEmpty = false;

      // reset input
      (e.currentTarget as HTMLFormElement).reset()
    }
  }

  // remove the item that is being clicked
  removeItem(idx: number) {
    console.log(idx)
    console.log(this.shoppingLists)
    // this.shoppingLists = this.shoppingLists.splice(idx, 1)
  }
}
