import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Reservation } from 'src/app/models/reservation';
import { DataMenuService } from 'src/app/services/data-menu.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus!: Menu[]

  currentReservation!:Reservation

  currentRestaurantId!:number

  constructor(
    private menuService:DataMenuService,
    private dataService:DataService
    ) { 
    this.menus = this.menuService.getMenus()
    this.currentRestaurantId = this.dataService.getCurrentRestaurant()
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.menus = this.menuService.getMenus()
    console.log(this.dataService.getCurrentReservation())
  }

  selectMenu() {
    console.log('s')

  }

  unselectMenu() {
    console.log('u')
  }
}
