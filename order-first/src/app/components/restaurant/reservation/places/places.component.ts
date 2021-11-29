import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { DataRestaurantService } from 'src/app/services/data-restaurant.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  //restaurant
  restaurants!: Restaurant[];

  //test
  restauranSelected:boolean = false

  radius!: number;
  color!: string;
  constructor(
    private resDataService:DataRestaurantService,
    private dataService:DataService
    ) { 
  }

  ngOnInit(): void {
    this.restaurants = this.resDataService.getRestaurants()
  }

  onSelect(i:Restaurant) {
    this.dataService.setCurrentRestaurant(i.id)
    this.restauranSelected = true //test
  }
}
