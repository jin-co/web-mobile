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
    let reservationList = localStorage.getItem("reservationList")
    if (reservationList != null) {
      this.reservationService.reservations = JSON.parse(reservationList)
    }
    
    let menuList = localStorage.getItem('menuList')
    if (menuList != null) {
      this.menuService.menus = JSON.parse(menuList)  
    }
  }
}
