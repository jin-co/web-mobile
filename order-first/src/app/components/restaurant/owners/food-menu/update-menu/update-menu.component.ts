import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Menu } from 'src/app/models/menu';
import { Reservation } from 'src/app/models/reservation';
import { DataMenuService } from 'src/app/services/data-menu.service';
import { DataReservationService } from 'src/app/services/data-reservation.service';
import { DataRestaurantService } from 'src/app/services/data-restaurant.service';
import { Restaurant } from 'src/app/models/restaurant';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.scss']
})

export class UpdateMenuComponent implements OnInit {
  menu:Menu = {
    restaurantId: this.dataService.getSelectedMenu().restaurantId,
    name: this.dataService.getSelectedMenu().name,
    subName: this.dataService.getSelectedMenu().subName,
    imageURL: this.dataService.getSelectedMenu().imageURL,
    description: this.dataService.getSelectedMenu().description  
  }

  reservation!:Reservation
  restaurants:Restaurant[]
  restaurantNames:string[] = []
  menus!:Menu[]

  //form view child
  @ViewChild('menuForm') form:any

  // validations
  idCtrl:UntypedFormControl = new UntypedFormControl(null, [
    Validators.required,
    Validators.min(1)  
  ])
  dishNameCtrl:UntypedFormControl = new UntypedFormControl(null, Validators.required)
  subNameCtrl:UntypedFormControl = new UntypedFormControl(null, Validators.required)
  imageURLCtrl:UntypedFormControl = new UntypedFormControl(null, Validators.required)
  descriptionCtrl:UntypedFormControl = new UntypedFormControl(null, [
    Validators.required,
    Validators.maxLength(100)
  ])

  inputGroup:UntypedFormGroup = new UntypedFormGroup({
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
    private dataService:DataService,    
    private router:Router
    ) { 
      this.restaurants = resDataService.getRestaurants()
      this.menus = menuDataService.getMenus()
  }

  ngOnInit(): void {}

  // updates the menu and navigates to the food main
  onSubmit() {
    if (this.inputGroup.valid) {
      this.menuDataService.updateMenu(this.menu)
      this.router.navigate(['/restaurant'])
    }
  }
}
