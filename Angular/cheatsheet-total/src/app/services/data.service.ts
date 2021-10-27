import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[]


  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'Doe@woo.com',
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
        email: 'Doe@woo.com',
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
        email: 'Doe@woo.com',
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
        email: 'Doe@woo.com',
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
        email: 'Doe@woo.com',
        image: 'http://lorempixel.com/600/600/people/4',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2020 08:22:00'),
        hide: true
      }
    ]
  }

  // getter
  getUsers(): User[] {
    return this.users
  }

  // setter
  addUser(user: User) {
    this.users.unshift(user)
  }
}
