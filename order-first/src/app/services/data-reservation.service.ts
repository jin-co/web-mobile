import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class DataReservationService {
  reservations!:Reservation[]
  constructor() { }

  getReservation() {
    return this.reservations
  }

  updateReservation(reservation:Reservation) {
    this.reservations.push(reservation)
  }
}
