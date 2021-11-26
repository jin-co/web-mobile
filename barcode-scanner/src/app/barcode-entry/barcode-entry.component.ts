import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { DatastoreService } from '../datastore.service';


@Component({
  selector: 'app-barcode-entry',
  templateUrl: './barcode-entry.component.html',
  styleUrls: ['./barcode-entry.component.scss']
})
export class BarcodeEntryComponent implements OnInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;
  
  pageTitle: string = "Barcode Entry"

  @Output() onSelfDestruction: EventEmitter<string> = new EventEmitter<string>()

  // validation
  quantityCtrl: FormControl = new FormControl(null, Validators.required)
  barcodeCtrl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.maxLength(14),
    Validators.pattern('[0-9]+')
  ])

  entryGroup: FormGroup = new FormGroup({
    quantity: this.quantityCtrl,
    code: this.barcodeCtrl
  })
  // validation

  // using service
  constructor(
    private datastore: DatastoreService
  ) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.pageTitle = "hahaha"
      this.onSelfDestruction.emit("self destructed")
    }, 2000)
  }

  // validation
  onSubmit(e: Event) {
    if (this.entryGroup.valid) {
      this.datastore.addScan(`user scanned ${this.quantityCtrl.value} of code ${this.barcodeCtrl.value}`);

      // resets form input
      (e.currentTarget as HTMLFormElement).reset()
    }

    // ngAfterViewInit() {
    //   if (this.barcodeScanner) {
    //     this.barcodeScanner.start();
    //   }
    // }
  
    // onValueChanges(result: any) {
    //   this.barcodeCtrl.setValue(result.codeResult.code);
    // }
  }
  // validation

  


}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

