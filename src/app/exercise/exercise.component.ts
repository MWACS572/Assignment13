import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

  private inputs;
  private showHide;
  colorOutput;
  private col;

  constructor(){
    this.inputs = ["val1", "val2", "val3", "val4"];
  }
  eventClick(colorr:string){
      this.col = colorr;
  }

}
