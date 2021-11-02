import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  private scans: string[] = []
  private windowObject: any = window as any
  private websqlDb: any
  constructor() {
    this.websqlDb = this.windowObject.openDatabase('groceryDb', '1.0', 'Conestoga', 1000000)

    this.websqlDb.transaction((tx: any) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS scans(id INTERGER PRIMARY KEY AUTOINCREMENT,' + 'message VARCHAR(256))', null, () => {
        tx.executeSql('SELECT message FROM scans', null, (_tx: any, result: any) => {
          for (let i = 0; i < result.rows.length; i++) {
            this.scans.push(result.rows[i].message)
          }
        })
      })
    })
  }

  addScan(message: string) {
    this.scans.push(message)
    this.websqlDb.transaction((tx: any) => {
      tx.executeSql('INSERT INTO scans(message) VALUES (?)', [message])
    })
  }

  removeItem() {
    this.scans.slice(0, -1)
  }

  getScan() {
    return this.scans
  }

  // using localStorage
  // constructor() {
  //   const saveData = localStorage.getItem('scanArray')
  //   if (saveData !== null) {
  //     this.scans = JSON.parse(saveData)  
  //   }
  // }

  // addScan(message: string) {
  //   this.scans.push(message)
  //   this.saveChanges()
  // }

  // removeItem() {
  //   this.scans.slice(0, -1)
  //   this.saveChanges()
  // }

  // getScan() {
  //   return this.scans
  // }

  // private saveChanges() {
  //   window.localStorage.setItem('scanArray', JSON.stringify(this.scans))
  // }

  clear() {
    this.scans = []
  }
}
