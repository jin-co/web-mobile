import { Component, OnInit } from '@angular/core';
import { DataMenuService } from './services/data-menu.service';
import { DataReservationService } from './services/data-reservation.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'order-first';

  constructor(
    private dataService:DataService,
    private reservationService:DataReservationService,
    private menuService:DataMenuService
    ) {

  }

  ngOnInit() {   
    console.log(localStorage.getItem('reservationList')) 
    this.reservationService.reservations = JSON.parse(localStorage.getItem("reservationList") || '')
    
    console.log(localStorage.getItem('menuList')) 
    this.menuService.menus = JSON.parse(localStorage.getItem('menuList') || '')
  }
}
