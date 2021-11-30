import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class DataReservationService {
  reservations!:Reservation[]
  constructor() {
    this.reservations = [
      {
        restaurantName:'',
        reservationName:'',
        detail: {
          date:'',
          time:'',
          tel:''
        },
        numberOfPeople: 0,
        menuSelected:[]
      }
    ]    
  }

  getReservation() {
    return this.reservations
  }

  addReservation(reservation:Reservation) {
    this.reservations.push(reservation)
  }

  addSelectedMenu(tel:string, menu:string) {
    if (tel != null) {
      this.reservations.forEach(res => {
        if (res.detail.tel === tel) {
          res.menuSelected?.push(menu)
        }
      });
    }
  }

  unselectMenu(tel:string, menu:string) {
    if (tel != null) {
      this.reservations.forEach(res => {
        if (res.detail.tel === tel) {
          let idx = res.menuSelected.indexOf(menu)
          res.menuSelected?.splice(idx, 1)
        }
      });
    }
  }

  // updateCurrentReservation() {

  // }
}
