import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  client!: Client[];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.getClient().subscribe(clients => this.client = clients)
  }

}
