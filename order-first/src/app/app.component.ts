import { Component, OnInit } from '@angular/core';
import { DataMenuService } from './services/data-menu.service';
import { DataReservationService } from './services/data-reservation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'order-first';

  constructor(
    private reservationService:DataReservationService,
    private menuService:DataMenuService
    ) {

  }

  // on initialization loads data from localStorage
  ngOnInit() {   
    this.reservationService.reservations = JSON.parse(localStorage.getItem("reservationList") || '')
        
    this.menuService.menus = JSON.parse(localStorage.getItem('menuList') || '')
  }
}
