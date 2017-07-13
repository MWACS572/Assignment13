import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appToUpperCase]'
})
export class ToUpperCaseDirective {

  constructor(private e: ElementRef, private r: Renderer) {
    // e.nativeElement.style.display = 'none'
    r.setElementStyle(e.nativeElement, 'text-transform', 'uppercase')

  }

}
