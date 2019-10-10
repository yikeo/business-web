import { Component } from '@angular/core';

@Component({
  selector: 'app-exception-500',
  template: `
    <div type="500" style="min-height: 500px; height: 80%;"></div>
  `,
})
export class Exception500Component {
  constructor() {
  }
}
