import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { DataMenuService } from 'src/app/services/data-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus!: Menu[]

  constructor(private menuService:DataMenuService) { 
    this.menus = this.menuService.getMenus()
  }

  ngOnInit(): void {
    
  }
}
