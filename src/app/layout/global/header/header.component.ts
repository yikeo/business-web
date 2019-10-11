import { Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'global-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class GlobalHeaderComponent implements OnInit {

  isNavbarCollapsed = true;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  collapsed($event: any): void {
    this.removeOverflow($event);
  }

  expanded($event: any): void {
    this.removeOverflow($event);
  }

  removeOverflow($event: any): void {
    // $event._el.nativeElement.style.overflow = '';
    this.renderer.setStyle($event._el.nativeElement, 'overflow', '');
  }
}
