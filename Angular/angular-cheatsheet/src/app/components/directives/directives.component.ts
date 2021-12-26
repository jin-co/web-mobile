import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5]
  evenNumbers = [2, 4]
  onlyOdd = false;
  value = 3

  constructor() { }

  ngOnInit(): void {
  }

}
