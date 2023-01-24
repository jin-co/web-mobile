import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if1',
  templateUrl: './ng-if1.component.html',
  styleUrls: ['./ng-if1.component.css'],
})
export class NgIf1Component implements OnInit {
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
