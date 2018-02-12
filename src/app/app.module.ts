import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DilipComponent } from './dilip/dilip.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';


@NgModule({
  declarations: [
    AppComponent,
    DilipComponent,
    PropertybindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
