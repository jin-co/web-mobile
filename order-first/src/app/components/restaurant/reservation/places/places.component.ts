import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
