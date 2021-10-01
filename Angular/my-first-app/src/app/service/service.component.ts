import { Component, OnInit } from '@angular/core';

// selector and style are optional but must have a template
@Component({
  selector: 'app-service',
  template: `
  service works
  <app-server></app-server>
  `,
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
