import { Component, OnInit } from '@angular/core';
import { faWeixin, faWeibo, faGithub, faQq, faAlipay } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'global-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class GlobalFooterComponent implements OnInit {

  faWeixin = faWeixin;
  faWeibo = faWeibo;
  faGithub = faGithub;
  faQq = faQq;
  faAlipay = faAlipay;

  constructor() { }

  ngOnInit() {
  }

}
