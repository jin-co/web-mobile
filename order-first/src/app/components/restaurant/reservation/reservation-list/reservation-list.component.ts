import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { DataReservationService } from 'src/app/services/data-reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  reservations!:Reservation[]
  constructor(private reservationService:DataReservationService) {
    this.reservations = this.reservationService.getReservations()  
  }

  ngOnInit(): void {
  }
}
