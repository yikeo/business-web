import { Component, OnInit } from '@angular/core';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'global-header-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class HeaderTaskComponent implements OnInit {

  faFlag = faFlag;

  constructor() { }

  ngOnInit() {
  }

}
