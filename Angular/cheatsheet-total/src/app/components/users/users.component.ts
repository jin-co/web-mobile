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

  // ng style
  currentStyles = {}

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
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2020 08:22:00')
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
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2020 08:22:00')
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
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2020 08:22:00')
      },
      {
        firstName: 'Tom',
        lastName: 'Doe',
        image: 'http://lorempixel.com/600/600/people/4',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2020 08:22:00')
      }
    ]

    this.setCurrentClasses()
    this.setCurrentStyles()
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

  // ng style
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }
}
