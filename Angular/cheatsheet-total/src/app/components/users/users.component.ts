import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: 0,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  users: User[]
  showExtended: boolean = true
  loaded: boolean = true

  enableAdd: boolean = false
  currentClasses = {}

  // ng style
  currentStyles = {}

  // user collapse
  showUserForm: boolean = true


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
        registered: new Date('01/02/2020 08:22:00'),
        hide: true
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
        registered: new Date('01/02/2020 08:22:00'),
        hide: true
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
        isActive: false,
        hide: true
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
        registered: new Date('01/02/2020 08:22:00'),
        hide: true
      },
      {
        firstName: 'Tom',
        lastName: 'Doe',
        image: 'http://lorempixel.com/600/600/people/4',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2020 08:22:00'),
        hide: true
      }
    ]

    this.setCurrentClasses()
    this.setCurrentStyles()
  }

  // addUser(user: User) {
  //   this.users.push(user)
  // }

  addUser() {
    this.user.isActive = true

    // sets the registered date to current day and time
    this.user.registered = new Date()
    
    // adds at the beginning
    this.users.unshift(this.user)

    // clears out the input 
    this.user = {
      firstName: '',
      lastName: '',
      age: 0,
      address: {
      street: '',
      city: '',
      state: ''
    }
    }
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

  // hide and show the user with method
  // toggleHide(user: User) {
  //   user.hide = !user.hide
  // }

  onSubmit(e: Event) {
    e.preventDefault()
    console.log('heh')
  }

  fireEvent(e: Event) {
    console.log(e.target, e.type)
  }
}
