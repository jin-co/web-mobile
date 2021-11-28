import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { DataRestaurantService } from 'src/app/services/data-restaurant.service';

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

  radius!: number;
  color!: string;
  constructor(private resDataService:DataRestaurantService) { 
  }

  ngOnInit(): void {
    this.restaurants = this.resDataService.getRestaurants()
  }

  onSelect(i:Restaurant) {
    console.log(i)
  }
}
