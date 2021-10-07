import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /* @Output allow us to get data from outside a component -> this need lots of set up 
  1. on the parent html: create a event with a method
  2. on the parent ts: create a method with an object
  3. on the child component create a variable with 'EventEmitter' 
  4. on the child component create a method to set the date
  */

  // 3. creating a variable with 'EventEmitter' 
  @Output() serverCreated = new EventEmitter<{serverName:string,  serverContent:string}>()
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>()
  newServerName = '';
  newServerContent = '';
  
  @ViewChild('serverContentInput') serverContentInput:ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  // 4. creating a method to set the date
  onAddServer(serverNameInput:HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
