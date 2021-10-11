import { Component, ContentChild, ElementRef, Input, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

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

  @Input() name:string
  @ViewChild('heading', {static: true}) header:ElementRef
  @ContentChild('contentPara', {static: true}) paragraph:ElementRef
  // @Input('alias') element: { // with alias
  //   type:string, name:string, content:string
  // }
  constructor() { 
    console.log('constructor called')
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('ngOnChanges called', changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
    console.log('text content: ', this.header.nativeElement.textContent)
    console.log('text paragraph: ', this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
    console.log('text paragraph: ', this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
    console.log('text content: ', this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }


}
