import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private reservationService:DataReservationService,
    private router:Router
    ) { 
    this.menus = this.menuService.getMenus()
    this.currentRestaurantId = this.dataService.getCurrentRestaurant()
  }

  ngOnInit(): void {
  }

  // updates menus and log status when changed
  ngDoCheck() {
    this.menus = this.menuService.getMenus()
    this.loggedIn = this.dataService.getLogStatus()
  }

  // adds the menu from the reservation menu list
  selectMenu(i:string) {
    this.reservationService.addSelectedMenu(this.dataService.getCurrentReservation(), i)
  }

  // unselects the menu from the reservation menu list
  unselectMenu(i:string) {
    this.reservationService.unselectMenu(this.dataService.getCurrentReservation(), i)
  }

  // deletes the menu selected
  deleteMenu(i:string) {
    this.menuService.deleteMenu(i)
  }

  // onClick saves the selected menu and navigates to update form
  updateMenu(i:string) {
    this.dataService.setSelectedMenu(this.menuService.getSelectedMenu(i))
    this.router.navigate(['/restaurant/owner/menu/update'])
  }
}
