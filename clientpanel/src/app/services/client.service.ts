import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsCollection!: AngularFirestoreCollection<Client>;
  clientDoc!: AngularFirestoreDocument<Client>;
  clients!: Observable<Client[]>;
  client!: Observable<Client>


  constructor(
    private afs: AngularFirestore
  ) { 
    this.clientsCollection = this.afs.collection('clients',
    ref => ref.orderBy('lastName', 'asc'))
  }

  getClient(): Observable<Client[]> {
    // get clients with the id

    // this.client = this.clientDoc.snapshotChanges().pipe(map(action => {
    //   if(action.payload.exists === false) {
    //     return null;
    //   } else {
    //     const data = action.payload.data() as Client;
    //     data.id = action.payload.id;
    //     return data;
    //   }
    // }));

    // https://github.com/angular/angularfire/blob/master/docs/firestore/collections.md

    this.clients = this.clientsCollection.snapshotChanges().pipe(
    map((changes: any[]) => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client
        data.id = action.payload.doc.id
        return data
      })
    }))
    return this.clients;
  }
}
