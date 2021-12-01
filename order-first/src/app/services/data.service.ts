import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentRestaurantId!:number
  currentReservation!:string
  loggedIn!:boolean
  selectedMenu!:Menu
  constructor() { 
    this.selectedMenu = {
      restaurantId: 0,
      name: '',
      subName: '',
      imageURL: '',
      description: ''
    }
  }

  getCurrentRestaurant() {
    return this.currentRestaurantId
  }

  setCurrentRestaurant(id:number) {
    this.currentRestaurantId = id
  }

  getCurrentReservation():string {
    return this.currentReservation
  }

  setCurrentReservation(tel:string) {
    this.currentReservation = tel
  }

  logIn(validate:boolean) {
    this.loggedIn = validate
  }

  getLogStatus() {
    return this.loggedIn
  }

  getSelectedMenu() {
    return this.selectedMenu
  }

  setSelectedMenu(menu:Menu) {
    this.selectedMenu = menu
  }
}
