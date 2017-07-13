import { Directive, Output, ElementRef, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  constructor(private e: ElementRef) { }
  color:string[] = ['green', 'red', 'blue'];
  index = 0;
  bool = true;
  @Output() colorOutput = new EventEmitter<string>();
  @HostListener('click') selectorer(){
    this.bool=true;

    while(this.bool){
     //this.e.nativeElement.style.color = this.color[this.index];
      this.colorOutput.emit(this.color[this.index]);
      this.index++;
      this.bool=false;
      if(this.index===2){
        this.index=0;
      }
    }
  }
}
