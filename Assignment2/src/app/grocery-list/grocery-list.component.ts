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
  // shoppingLists: ShoppingList[] = [];

  // test local
  // localStore: ShoppingList[] = [];
  
  // check if the shopping list is empty
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

  // dependency injection to use service
  constructor(
    public datastore: DatastoreService
  ) { }

  ngOnInit(): void {
    console.log(localStorage)
  }

  // stores data and reset input fields
  onSubmit(e: Event) {
    if (this.inputGroup.valid) {
      // this.shoppingLists.push({
      //   quantity: this.quantityCtrl.value,
      //   item: this.itemCtrl.value
      // })      

      // changes the message on the buy list
      this.isEmpty = false;      

      // using service
      this.datastore.items.push({
        quantity: this.quantityCtrl.value,
        item: this.itemCtrl.value
      });

      // test local
      localStorage.setItem('list', JSON.stringify(this.datastore.items));

      // reset input
      (e.currentTarget as HTMLFormElement).reset()
    }
  }
  
  // remove selected item from the list and add it to the history
  removeItem(obj: ShoppingList) {    
    this.datastore.histories.push(obj)
    localStorage.setItem('purchased', JSON.stringify(this.datastore.histories)); 

    this.datastore.items = this.datastore.items.filter(i => i !== obj)   
    localStorage.setItem('list', JSON.stringify(this.datastore.items)); 
  }
}
