import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class DirectivesComponent implements OnInit {
  directiveName:string = ''
  isTrue = false
  serverStatus = 'offline'
  servers = ['test server']
  isVisible:boolean = false
  count:number = 0
  numbers = [0]
  stamps = []
  
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

  createServer() {
    this.servers.push(this.directiveName)
  }

  incrementCount() {
    this.count++
  }

  addNumbers() {
    this.numbers.push(this.count)
    console.log(this.count)
  }

  addTimeStamp() {
    this.stamps.push(new Date)
  }
}
