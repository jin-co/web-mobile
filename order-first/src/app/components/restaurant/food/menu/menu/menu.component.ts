import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus!: Menu[]

  constructor() { }

  ngOnInit(): void {
    this.menus = [
      {
        name: 'Shiba Inu',
        subName: 'Dog Breed',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti qui debitis ullam, tenetur natus odit nemo consequatur dolore voluptatem explicabo! Natus incidunt nobis perspiciatis itaque, aperiam iste atque porro a libero, quam dolore quidem dolorem ipsa, ex molestias recusandae! '
      }
    ]
  }

}
