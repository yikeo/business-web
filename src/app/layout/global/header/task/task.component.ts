import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'global-header-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class HeaderTaskComponent implements OnInit {

  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

}
