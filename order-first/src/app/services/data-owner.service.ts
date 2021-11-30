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
    let flag = false
    if (email != null && password != null) {
      this.owners.forEach(owner => {
        console.log('validate', owner.email, 'entered', email)
        console.log('validate', owner.password, 'entered', password)
        if (owner.email === email && owner.password === password) {
          flag = true
          return flag
        }
        return flag
      });
    }
    return flag
  }
}
