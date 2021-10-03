import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode-entry',
  templateUrl: './barcode-entry.component.html',
  styleUrls: ['./barcode-entry.component.css']
})
export class BarcodeEntryComponent implements OnInit {

  pageTitle: string = "Barcode Entry"
  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.pageTitle = "hahaha"
    }, 2000)
  }

  
}
