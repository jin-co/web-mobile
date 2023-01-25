import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent implements OnInit {
  users: {
    name: string;
    petOwner: boolean;
    petName?: string;
  }[] = [];
  constructor() {}

  ngOnInit(): void {
    this.users = [
      { name: 'jim', petOwner: false },
      { name: 'A', petOwner: true, petName: 'B' },
      { name: 'tom', petOwner: false },
      { name: 'what', petOwner: true, petName: 'catnip' },
      { name: 'the', petOwner: false },
    ];
  }

}
