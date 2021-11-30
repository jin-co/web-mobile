import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Menu } from 'src/app/models/menu';
import { Reservation } from 'src/app/models/reservation';
import { DataMenuService } from 'src/app/services/data-menu.service';
import { DataReservationService } from 'src/app/services/data-reservation.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataRestaurantService } from 'src/app/services/data-restaurant.service';
import { Restaurant } from 'src/app/models/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-menu',
  templateUrl: './remove-menu.component.html',
  styleUrls: ['./remove-menu.component.scss']
})
export class RemoveMenuComponent implements OnInit {
  menu:Menu = {
    restaurantId: 0,
    name: '',
    subName: '',
    imageURL: '',
    description: ''  
  }

  reservation!:Reservation

  restaurants:Restaurant[]
  restaurantNames:string[] = []

  //test
  menus!:Menu[]

  //form view child
  @ViewChild('menuForm') form:any

  // validations
  idCtrl:FormControl = new FormControl(null, [
    Validators.required,
    Validators.min(1)  
  ])
  dishNameCtrl:FormControl = new FormControl(null, Validators.required)
  subNameCtrl:FormControl = new FormControl(null, Validators.required)
  imageURLCtrl:FormControl = new FormControl(null, Validators.required)
  descriptionCtrl:FormControl = new FormControl(null, [
    Validators.required,
    Validators.maxLength(100)
  ])

  inputGroup:FormGroup = new FormGroup({
    resId: this.idCtrl,
    dishName: this.dishNameCtrl,
    subName: this.subNameCtrl,
    URL: this.imageURLCtrl,
    description: this.descriptionCtrl
  })
  // validations

  constructor(
    private menuDataService:DataMenuService,
    private reservationDataService:DataReservationService,
    private resDataService:DataRestaurantService,
    private router:Router
    ) { 
      this.restaurants = resDataService.getRestaurants()
      this.menus = menuDataService.getMenus()
  }

  myControl = new FormControl();
  options: string[] = this.restaurantNames
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    this.restaurants.forEach(res => {
      this.restaurantNames.push(res.name)
    });
  }

  onSubmit() {
    if (this.inputGroup.valid) {
      this.menuDataService.updateMenu(this.menu);
      // resets the input fields
      localStorage.setItem('menuList', JSON.stringify(this.menuDataService.getMenus()))
      this.form.reset()
      this.router.navigate(['/restaurant'])
    }
  }

  getRestaurantId(restaurantName:string):number {
    return this.resDataService.getRestaurantId(restaurantName)
  }

  // material option
  private _filter(value: string): string[] {
    const filterValue = value;

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
