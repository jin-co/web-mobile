import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[]

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'generated components',
        date: new Date('12/12/2021 12:11:11')
      },
      {
        id: '2',
        text: 'added components',
        date: new Date('12/13/2021 12:11:11')
      },
      {
        id: '3',
        text: 'done components',
        date: new Date('12/15/2021 12:11:11')
      }
    ]
  }

  getLogs() {
    return this.logs
  }
}
