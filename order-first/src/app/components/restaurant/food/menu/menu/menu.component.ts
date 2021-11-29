import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { DataMenuService } from 'src/app/services/data-menu.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus!: Menu[]

  //test
  currentRestaurantId!:number

  constructor(
    private menuService:DataMenuService,
    private curResDataService:DataService
    ) { 
    this.menus = this.menuService.getMenus()
    this.currentRestaurantId = this.curResDataService.getCurrentRestaurant()

  }

  ngOnInit(): void {
    console.log('menu onInit curResId: ', this.currentRestaurantId)
    console.log('menu onInit curResId from service' ,this.curResDataService.getCurrentRestaurant())
  }

  ngDoCheck() {
    this.menus = this.menuService.getMenus()
    console.log('menu doChekc curResId', this.currentRestaurantId)
    console.log('menu doChekc curResId from service', this.curResDataService.getCurrentRestaurant())
    console.log('menu doChekc menus', this.menuService.getMenus())
  }
}
