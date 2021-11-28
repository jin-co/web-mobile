import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { DataMenuService } from 'src/app/services/data-menu.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  menu!:Menu
  constructor(private menuService:DataMenuService) { }

  ngOnInit(): void {
  }

  onSubmit(e:Event) {
    e.preventDefault()
    console.log(e)
    this.menu = {
      restaurantId: 2,
      name: "h",
      subName: "d",
      imageURL: "e",
      description: ""
    }
  }
}
