import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = ''
  @Input() highlightColor:string = 'red'

  @HostBinding('style.backgroundColor') backgroundColor:string

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  // @HostListener('mouseenter') mouseover(eventData:Event) {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  // }

  // @HostListener('mouseleave') mouseleave(eventData:Event) {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '')
  // }

  @HostListener('mouseenter') mouseover(eventData:Event) {
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.backgroundColor = this.defaultColor
  }

  @HostListener('click') click(eventData:Event) {
    this.backgroundColor = 'yellow'
  }
}
