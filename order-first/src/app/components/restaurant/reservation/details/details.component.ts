import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservation } from 'src/app/models/reservation';
import { DataReservationService } from 'src/app/services/data-reservation.service';
import { DataRestaurantService } from 'src/app/services/data-restaurant.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  reservation:Reservation = {
    restaurantName: '',
    reservationName: '',
    detail: {
      date: '',
      time: '',
      tel: ''
    },
    numberOfPeople: 0,
    menuSelected:['']
  }

  //validations
  nameCtrl:FormControl = new FormControl(null, Validators.required)
  dateCtrl:FormControl = new FormControl(null, Validators.required)
  timeCtrl:FormControl = new FormControl(null, Validators.required)
  telCtrl:FormControl = new FormControl(null, [
    Validators.required,
    Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')
  ])
  peopleCtrl:FormControl = new FormControl(null, Validators.required)

  inputGroup:FormGroup = new FormGroup({
    name: this.nameCtrl,
    date: this.dateCtrl,
    time: this.timeCtrl,
    tel: this.telCtrl,
    peopleCount: this.peopleCtrl
  })
  //validations

  @ViewChild('reservationForm') form:any

  constructor(
    private reservationDataService:DataReservationService,
    private resDataService:DataRestaurantService,
    private dataService:DataService
  ) { }

  ngOnInit(): void {
  }

  // ngDoCheck() {
  //   console.log('detail res cur id', this.dataService.getCurrentRestaurant())
  // }

  onSubmit() {
    console.log('detail res cur id', this.dataService.getCurrentRestaurant())
    if (this.inputGroup.valid) {
      // gets current restaurant name
      this.reservation.restaurantName = this.resDataService.getRestaurantName(this.dataService.getCurrentRestaurant())

      // sets current reservation to use to find the reservation t0 store menus later
      this.dataService.setCurrentReservation(this.reservation.detail.tel)

      //test
      
      this.reservationDataService.addReservation(this.reservation)
      
      console.log(this.reservation)
      console.log(this.dataService.getCurrentReservation())
      
      // this.form.reset()
    }
  }
}
