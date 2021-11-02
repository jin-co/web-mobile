import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',  // instantiates every element with 'app-root' tag name
  templateUrl: './app.component.html',  // this will be put inside 'app-root'
  styleUrls: ['./app.component.scss']  // with this style
})
export class AppComponent {
  @ViewChild('drawer') private materialDrawer: MatDrawer | null = null
  title: string = 'barcode-scanner';
  isOpen: boolean = false

  changeTitle(activatedComponent: string) {
    this.title = activatedComponent
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.materialDrawer !== null) {
        this.materialDrawer.close()
      }
    }, 1000)
  }
}

