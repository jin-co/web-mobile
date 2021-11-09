import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[]
  private logSource = new BehaviorSubject<Log>({
    id: '',
    text: '',
    date: null
  })

  private stateSource = new BehaviorSubject<boolean>(true)
  stateClear = this.stateSource.asObservable()

  selectedLog = this.logSource.asObservable()

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

  getLogs(): Observable<Log[]> {
    return of(this.logs)
    // return this.logs
  }

  setFormLog(log: Log) {
    this.logSource.next(log)
  }

  addLog(log: Log) {
    this.logs.unshift(log)
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, idx) => {
      if (log.id === cur.id) {
        this.logs.splice(idx, 1)
      }
    })

    this.logs.unshift(log)
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, idx) => {
      if (log.id === cur.id) {
        this.logs.splice(idx, 1)
      }
    })
  }

  clearState() {
    this.stateSource.next(true)
  }
}
