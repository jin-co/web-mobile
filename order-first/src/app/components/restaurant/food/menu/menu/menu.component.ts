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
  }

  ngDoCheck() {
    this.menus = this.menuService.getMenus()
  }
}
