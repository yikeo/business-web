import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'global-header-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class HeaderNotificationComponent implements OnInit {

  faUser = faAddressBook;

  constructor() { }

  ngOnInit() {
  }

}
