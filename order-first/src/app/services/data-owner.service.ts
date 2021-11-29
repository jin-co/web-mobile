import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class DataOwnerService {
  owners!:Owner[]
  constructor() { 
    this.owners = [
      {
      email: 'gogo@go.com',
      password: '1234'
    }]
  }

  getOwners() {
    return this.owners
  }
}
