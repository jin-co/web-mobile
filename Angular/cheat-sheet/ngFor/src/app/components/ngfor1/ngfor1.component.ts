import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor1',
  templateUrl: './ngfor1.component.html',
  styleUrls: ['./ngfor1.component.css'],
})
export class Ngfor1Component implements OnInit {
  users: { firstName: string; lastName: string; age: number }[] = [];
  constructor() {
    this.users = [
      {
        firstName: 'top',
        lastName: 'floor',
        age: 20,
      },
      {
        firstName: 'jack',
        lastName: 'bottom',
        age: 22,
      },
      {
        firstName: 'what',
        lastName: 'the',
        age: 11,
      },
      {
        firstName: 'who',
        lastName: 'are',
        age: 30,
      },
      {
        firstName: 'i',
        lastName: 'am',
        age: 35,
      },
    ];
  }

  ngOnInit(): void {}
}
