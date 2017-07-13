import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ToUpperCaseDirective } from './to-upper-case.directive';
import { MyVisibilityDirective } from './my-visibility.directive';
import { MyColorDirective } from './my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    ToUpperCaseDirective,
    MyVisibilityDirective,
    MyColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
