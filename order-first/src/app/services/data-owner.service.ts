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

  validateOwner(email:string, password:string):boolean {
    if (email != null && password != null) {
      this.owners.forEach(owner => {
        if (owner.email == email && owner.password == password) {
          return true
        }
        return false
      });
    }
    return false
  }
}
