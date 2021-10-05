import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  directiveName:string = ''
  isTrue = false
  serverStatus = 'offline'
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit(): void {
  }
  
  testDirectives(e) {
    this.directiveName += e
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
