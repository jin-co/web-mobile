import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentRestaurantId!:number
  currentReservation!:string
  constructor() { }

  getCurrentRestaurant() {
    return this.currentRestaurantId
  }

  setCurrentRestaurant(id:number) {
    this.currentRestaurantId = id
  }

  getCurrentReservation() {
    return this.currentReservation
  }

  setCurrentReservation(tel:string) {
    this.currentReservation = tel
  }
}
