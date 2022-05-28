import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice1.component';
import {FormsModule} from "@angular/forms";
import { Exercice2Component } from './exercice2.component';
import { Exercice3Component } from './exercice3.component';
import { Exercice4Component } from './exercice4.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    Exercice2Component,
    Exercice3Component,
    Exercice4Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
