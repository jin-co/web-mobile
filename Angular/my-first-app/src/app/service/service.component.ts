import { Component, OnInit } from '@angular/core';

// selector and style are optional but must have a template
@Component({
  selector: 'app-service',
  // template: `
  // service works
  // <app-server></app-server>
  // `,
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server created'
  serverName = ''

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server created'
  }

  onUpdateServer(e: any) {
    console.log(e)
    this.serverName = e.target.value
    this.serverName = (<HTMLInputElement>e.target).value
  }
}
