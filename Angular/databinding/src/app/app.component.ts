import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements = [];
  // newServerName = '';
  // newServerContent = '';

  // onAddServer() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }
  serverElements = [{
    type: 'server', name: 'Test', content: 'a test'
  }];

  // 2. creating a method with an object
  onServerAdded(serverDate: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverDate.serverName,
      content: serverDate.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed'
  }  

  onDestroyFirst() {
    this.serverElements.splice(0, 1)
  }  
}
