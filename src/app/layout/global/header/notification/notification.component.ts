import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'global-header-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class HeaderNotificationComponent implements OnInit {

  faBell = faBell;

  constructor() { }

  ngOnInit() {
  }

}
