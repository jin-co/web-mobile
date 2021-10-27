import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

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

export class UserComponent implements OnInit {
    // user: {
    //     firstName: string,
    //     lastName: string,
    //     age: number,
    //     address: {
    //         street: string,
    //         city: string,
    //         state: string
    //     }
    // }

    // using interface
    // user: {
    //     firstName: string,
    //     lastName: string,
    //     age: number,
    //     address: {
    //         street: string,
    //         city: string,
    //         state: string
    //     }
    // }
    // using interface
    user!: User;

    constructor() {

    }
    
    ngOnInit() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'Doe',
            age: 30,
            address: {
                street: '50 main',
                city: 'Boston',
                state: 'MA'
            }
        }
    }


    // // Properties
    // firstName: string = 'John'
    // lastName: string = 'Doe'
    // age: number = 30
    // numbers: number[]
    // typeMixed: any[]
    // tuple: [string, number, boolean]
    // address = {
    //     street: '50 main',
    //     city: 'Boston',
    //     state: 'MA'
    // }

    // // **methods
    // // constructor runs first the template is rendered
    // // good for dependencies
    // constructor() {
    //     this.numbers = [1, 2, 3]
    //     this.typeMixed = ['mixed', 0, true]
    //     this.tuple = ['hello', 1, true]
    // }

    // showAge() {
    //     return this.age + 2
    // }

    // sayHello() {

    // }

    // hasBirthday() {
    //     this.age += 1
    // }

    // addNumbers(num1: number, num2:number): number {
    //     return num1 + num2
    // }
}

// interface(on the same file for demonstration)
// interface User {
//     firstName: string,
//     lastName: string,
//     age: number,
//     address: {
//         street: string,
//         city: string,
//         state: string
//     }
// }


