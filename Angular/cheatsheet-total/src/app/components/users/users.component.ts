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
  currentClasses = {}


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
        image: 'http://lorempixel.com/600/600/people/6',
        isActive: true
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
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true
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
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false
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
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true
      },
      {
        firstName: 'Tom',
        lastName: 'Doe',
        image: 'http://lorempixel.com/600/600/people/4',
        isActive: true
      }
    ]

    this.setCurrentClasses()
  }

  addUser(user: User) {
    this.users.push(user)
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended  // custom class(in css file)
    }
  }
}
