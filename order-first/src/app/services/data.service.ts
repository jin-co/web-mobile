import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentRestaurantId!:number
  constructor() { }

  getCurrentRestaurant() {
    return this.currentRestaurantId
  }

  setCurrentRestaurant(id:number) {
    this.currentRestaurantId = id
  }
}
