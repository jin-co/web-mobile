import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Menu } from 'src/app/models/menu';
import { Reservation } from 'src/app/models/reservation';
import { DataMenuService } from 'src/app/services/data-menu.service';
import { DataReservationService } from 'src/app/services/data-reservation.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataRestaurantService } from 'src/app/services/data-restaurant.service';
import { Restaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {  
  menu:Menu = {
    restaurantId: 0,
    name: "h",
    subName: "d",
    imageURL: "e",
    description: ""
  }

  reservation!:Reservation

  restaurants:Restaurant[]
  restaurantNames:string[] = []

  constructor(
    private menuDataService:DataMenuService,
    private reservationDataService:DataReservationService,
    private resDataService:DataRestaurantService
    ) { 
      this.restaurants = resDataService.getRestaurants()
      console.log(this.restaurants)
  }

  myControl = new FormControl();
  options: string[] = this.restaurantNames
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    console.log(this.restaurants)


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  
  ngDoCheck() {
    this.restaurants.forEach(res => {
      this.restaurantNames.push(res.name)
    });
    console.log(this.restaurantNames)    
  }

  onSubmit(e:Event) {
    e.preventDefault()
    console.log(e)
    this.menu = {
      restaurantId: 0,
      name: "h",
      subName: "d",
      imageURL: "e",
      description: ""
    };

    // resets the input fields
    (e.currentTarget as HTMLFormElement).reset()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
