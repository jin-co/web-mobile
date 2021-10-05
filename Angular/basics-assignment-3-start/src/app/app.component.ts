import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .para {
      color: #fff;
      background-color: blue;      
    }
  `]
})
export class AppComponent {
  isVisible:boolean = false

  count:number = 0
  numbers = [0]
  
  incrementCount() {
    this.count++
  }

  addNumbers() {
    this.numbers.push(this.count)
    console.log(this.count)
  }
}
