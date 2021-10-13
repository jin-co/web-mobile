import { Injectable, EventEmitter } from '@angular/core';
import { Logging } from './loggin.service';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>()

  constructor(private loggingService: Logging) { }

  addAccount(name:string, status:string) {
    this.accounts.push({name:name, status:status});
    this.loggingService.logStatusChange(status)
  }

  updateStatus(id:number, status:string) {
    this.accounts[id].status = status
    this.loggingService.logStatusChange(status)
  }
}
