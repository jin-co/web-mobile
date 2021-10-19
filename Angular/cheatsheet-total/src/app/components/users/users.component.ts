import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 main',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 main',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'Tom',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 main',
          city: 'Boston',
          state: 'MA'
        }
      }]
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
      }
    },
    {
      firstName: 'Kevin',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 main',
        city: 'Boston',
        state: 'MA'
      }
    },
    {
      firstName: 'Tom',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 main',
        city: 'Boston',
        state: 'MA'
      }
    }]
  }

  addUser(user: User) {
    this.users.push(user)
  }
}
