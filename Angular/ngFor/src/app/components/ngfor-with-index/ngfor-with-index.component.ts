import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-with-index',
  templateUrl: './ngfor-with-index.component.html',
  styleUrls: ['./ngfor-with-index.component.css'],
})
export class NgforWithIndexComponent implements OnInit {
  users: { firstName: string; lastName: string; age: number }[] = [
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
  constructor() {}

  ngOnInit(): void {}
}
