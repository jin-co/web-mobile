import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { DataReservationService } from 'src/app/services/data-reservation.service';
import { DataRestaurantService } from 'src/app/services/data-restaurant.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit {
  currentReservation!:Reservation
  reservation!:Reservation

  constructor(
    private dataService:DataService,
    private reservationService:DataReservationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  // watches the changes and gets current reservation
  ngDoCheck() {    
    this.reservation = this.reservationService.getCurrentReservation(this.dataService.getCurrentReservation())
  }

  // onConfirm stores the reservations list and navigates to the main
  onConfirm() {
    localStorage.setItem('reservationList', JSON.stringify(this.reservationService.getReservations()))    
    this.router.navigate(['/'])
  }
}
