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
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
