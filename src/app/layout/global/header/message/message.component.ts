import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'global-header-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class HeaderMessageComponent implements OnInit {

  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

}
