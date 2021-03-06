import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DilipComponent } from './dilip/dilip.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';


@NgModule({
  declarations: [
    AppComponent,
    DilipComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
