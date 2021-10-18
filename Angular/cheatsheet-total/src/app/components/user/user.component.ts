import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

// @Component({
//     selector: 'app-user',
//     template: `
//     <h1>hi</h1>
//     `,
//     styles: [`
//         h1 {
//             color: blue
//         }
//     `]
// })

export class UserComponent {
    // Properties
    firstName: string = 'John'
    lastName: string = 'Doe'
    age: number = 30
    address = {
        street: '50 main',
        city: 'Boston',
        state: 'MA'
    }

    // **methods
    // constructor runs first the template is rendered
    // good for dependencies
    constructor() {

    }

    sayHello() {

    }

    hasBirthday() {
        this.age += 1
    }
}



