import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    private inputs;
    private showHide;

    constructor(){
      this.inputs = ["val1", "val2", "val3", "val4"];
    }

}
