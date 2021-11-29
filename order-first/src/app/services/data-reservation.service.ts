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
}
