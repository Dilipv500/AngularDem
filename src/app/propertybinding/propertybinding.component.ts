import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  allownewserver = false;
  constructor() {
    setTimeout(() => {
      this.allownewserver = true;
    }, 2000);
  }

  ngOnInit() {}

}
