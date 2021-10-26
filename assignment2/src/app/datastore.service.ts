// Service that controls the item list and purchage history

import { Injectable } from '@angular/core';
import { ShoppingList } from './models/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  items: ShoppingList[] = []
  histories: ShoppingList[] = []
  constructor() { }
}
