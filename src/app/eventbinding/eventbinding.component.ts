import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() {}
  serverstatuscode = 'No Server Running';
  ngOnInit() {}

  onServercreation() {
    return this.serverstatuscode = 'Server Has been created';
  }

  onUpdateServer(event) {
    if (event.target.value === 'dilip') {
      return this.serverstatuscode = '';
    }
    return this.serverstatuscode = event.target.value;
  }

}
