import { Component, OnInit } from '@angular/core';
import { faLemon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class DashboardMonitorComponent implements OnInit {

  faAddressBook = faLemon;

  constructor() { }

  ngOnInit() {
  }

}
