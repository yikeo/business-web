import { Component } from '@angular/core';

@Component({
  selector: 'app-exception-500',
  template: `
  <div class="content-wrapper" style="min-height:300px;">
    <div class="container">
        <section class="content-header">
        <h4>
            Exception
            <small class="text-muted">500</small>
            <ol class="breadcrumb float-right">
                <li class="breadcrumb-item"><a href="#"><fa-icon [icon]="faAddressBook"></fa-icon>Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">500</li>
            </ol>
        </h4>
        </section>
        <section class="content">
            <div class="alert alert-danger my-3" role="alert">
                服务器内部错误！
            </div>
        </section>
    </div>
  </div>
  `,
})
export class Exception500Component {
  constructor() {
  }
}
