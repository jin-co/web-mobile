import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // instantiates every element with 'app-root' tag name
  templateUrl: './app.component.html',  // this will be put inside 'app-root'
  styleUrls: ['./app.component.scss']  // with this style
})
export class AppComponent {
  title: string = 'barcode-scanner';
  isOpen: boolean = false

  changeTitle(activatedComponent: string) {
    this.title = activatedComponent
  }
}

