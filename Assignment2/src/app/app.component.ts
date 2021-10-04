import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Grocery List';

  changeTitle(pageTitle:string) {
    console.log(pageTitle)
    this.title = pageTitle
  }
}
