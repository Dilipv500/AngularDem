import { Component } from '@angular/core';

@Component({
  selector: 'app-dilip',
  // selector:".app-dilip",
  templateUrl: './dilip.component.html',
//  template:`dilip it works`,
  styleUrls: ['./dilip.component.css']
})
export class DilipComponent {
  serverId = 1;
serverstatus = 'Active';
getserverstatus() {
  return 'Server Id ' + this.serverId + 'Server Status  ' + this.serverstatus;
}
}
