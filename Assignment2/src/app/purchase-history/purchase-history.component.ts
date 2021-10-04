import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {
  pageTitle: string = "Purchase History"
  constructor() { }

  ngOnInit(): void {
  }

}
