import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'global-header-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class HeaderMessageComponent implements OnInit {

  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
