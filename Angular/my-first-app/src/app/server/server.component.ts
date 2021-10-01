import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    // template: './server.component.html' //this returns a string
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId:number = 10
    status:string = 'great'
}