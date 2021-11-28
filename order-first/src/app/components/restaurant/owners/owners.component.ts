import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Reservation } from 'src/app/models/reservation';
import { DataMenuService } from 'src/app/services/data-menu.service';
import { DataReservationService } from 'src/app/services/data-reservation.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {  
  menu!:Menu
  reservation!:Reservation

  constructor(
    private menuService:DataMenuService,
    private reservationService:DataReservationService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(e:Event) {
    e.preventDefault()
    console.log(e)
    this.reservation = {
      restaurantName: '',
      detail: {
        date:'',
        time:'',
        tel:''
      },
      menuSelected: []
    };

    // resets the input fields
    (e.currentTarget as HTMLFormElement).reset()
  }
}
