import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class DataReservationService {
  reservations!:Reservation[]
  reservation!:Reservation
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

  getReservations() {
    this.reservations.forEach((res, idx) => {
      if (res.reservationName == '') {
        this.reservations.splice(idx, 1)
      }      
    });
    return this.reservations
  }

  getCurrentReservation(tel:string):Reservation {
    if (tel != null) {
      this.reservations.forEach(res => {
        if (res.detail.tel === tel) {
          this.reservation = res          
        }
      });    
    }    
    return this.reservation
  }

  addReservation(reservation:Reservation) {
    this.reservations.push(reservation)
  }

  addSelectedMenu(tel:string, menu:string) {
    if (tel != null) {
      this.reservations.forEach(res => {
        if (res.detail.tel === tel) {
          res.menuSelected.push(menu)
        }
      });
    }
    console.log(this.reservations)
  }

  unselectMenu(tel:string, menu:string) {
    if (tel != null) {
      this.reservations.forEach(res => {
        if (res.detail.tel === tel) {
          let idx = res.menuSelected.indexOf(menu)
          res.menuSelected.splice(idx, 1)
        }
      });
    }
    console.log(this.reservations)
  }
}
