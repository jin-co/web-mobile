import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Reservation } from 'src/app/models/reservation';
import { DataMenuService } from 'src/app/services/data-menu.service';
import { DataReservationService } from 'src/app/services/data-reservation.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus!: Menu[]
  loggedIn:boolean = false

  currentReservation!:Reservation

  currentRestaurantId!:number

  constructor(
    private menuService:DataMenuService,
    private dataService:DataService,
    private reservationService:DataReservationService
    ) { 
    this.menus = this.menuService.getMenus()
    this.currentRestaurantId = this.dataService.getCurrentRestaurant()
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.menus = this.menuService.getMenus()
    this.loggedIn = this.dataService.getLogStatus()
    console.log(this.dataService.getCurrentReservation())
  }

  selectMenu(i:string) {
    console.log(i)
    this.reservationService.addSelectedMenu(this.dataService.getCurrentReservation(), i)
  }

  unselectMenu(i:string) {
    console.log('u')
    console.log(i)
    this.reservationService.unselectMenu(this.dataService.getCurrentReservation(), i)
  }

  deleteMenu(i:string) {
    console.log(i)
    this.menuService.deleteMenu(i)
  }
}
