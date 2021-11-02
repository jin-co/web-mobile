import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  private scans: string[] = []

  constructor() { }

  addScan(message: string) {
    this.scans.push(message)
    this.saveChanges()
  }

  removeItem() {
    this.scans.slice(0, -1)
    this.saveChanges()
  }

  getScan() {
    return this.scans
  }

  private saveChanges() {
    window.localStorage.setItem('scanArray', JSON.stringify(this.scans))
  }
}
