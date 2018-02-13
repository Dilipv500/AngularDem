import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent implements OnInit {
// tslint:disable-next-line:quotemark
bindingvalue = "Hello It's working Two Way binding";
  constructor() { }

  ngOnInit() {
  }

}
