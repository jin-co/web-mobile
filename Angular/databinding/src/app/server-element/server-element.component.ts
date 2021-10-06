import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // @Input allows us to expose a component to other components
  @Input() element: {
    type:string, name:string, content:string
  }
  
  // @Input('alias') element: { // with alias
  //   type:string, name:string, content:string
  // }
  constructor() { }

  ngOnInit(): void {
  }
}
