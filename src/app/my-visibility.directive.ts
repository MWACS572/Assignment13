import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyVisibilityDirective {

  constructor(private e: ElementRef, private r: Renderer) {

  }
  @Input() showHide = false;

  ngOnInit(){
    if(this.showHide){
      this.e.nativeElement.style.display = "none";
    }
  }
}
