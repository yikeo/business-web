import { Component } from '@angular/core';

@Component({
  selector: 'app-exception-404',
  template: `
  <div class="content-wrapper" style="min-height:300px;">
    <div class="container">
        <section class="content-header">
        <h4>
            Exception
            <small class="text-muted">404</small>
            <ol class="breadcrumb float-right">
                <li class="breadcrumb-item"><a href="#"><fa-icon [icon]="faAddressBook"></fa-icon>Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">404</li>
            </ol>
        </h4>
        </section>
        <section class="content">
            <div class="alert alert-danger my-3" role="alert">
                页面不存在！
            </div>
        </section>
    </div>
  </div>
  `,
})
export class Exception404Component {
  constructor() {
  }
}
