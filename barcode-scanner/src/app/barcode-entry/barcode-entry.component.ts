import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-barcode-entry',
  templateUrl: './barcode-entry.component.html',
  styleUrls: ['./barcode-entry.component.scss']
})
export class BarcodeEntryComponent implements OnInit {

  pageTitle: string = "Barcode Entry"
  @Output() onSelfDestruction: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.pageTitle = "hahaha"
      this.onSelfDestruction.emit("self destructed")
    }, 2000)
  }

  
}
