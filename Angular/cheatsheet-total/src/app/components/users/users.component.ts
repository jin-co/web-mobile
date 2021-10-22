import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  showExtended: boolean = true
  loaded: boolean = true

  enableAdd: boolean = true

  constructor() {
    this.users = []
    console.log(this.users)
  }

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 main',
          city: 'Boston',
          state: 'MA'
        },
        image: 'http://lorempixel.com/600/600/people/6'
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 main',
          city: 'Boston',
          state: 'MA'
        },
        image: 'http://lorempixel.com/600/600/people/3'
      },
      {
        firstName: 'Tim',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 main',
          city: 'Boston',
          state: 'MA'
        },
        image: 'http://lorempixel.com/600/600/people/2'
      },
      {
        firstName: 'Jill',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 main',
          city: 'Boston',
          state: 'MA'
        },
        image: 'http://lorempixel.com/600/600/people/1'
      },
      {
        firstName: 'Tom',
        lastName: 'Doe',
        image: 'http://lorempixel.com/600/600/people/4'
      }
    ]
  }

  addUser(user: User) {
    this.users.push(user)
  }
}
