import { Component } from '@angular/core';

@Component({
  selector: 'app-exception-403',
  template: `
  <div class="content-wrapper" style="min-height:300px;">
    <div class="container">
        <section class="content-header">
        <h4>
            Exception
            <small class="text-muted">403</small>
            <ol class="breadcrumb float-right">
                <li class="breadcrumb-item"><a href="#"><fa-icon [icon]="faAddressBook"></fa-icon>Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">403</li>
            </ol>
        </h4>
        </section>
        <section class="content">
            <div class="alert alert-danger my-3" role="alert">
                无权限访问页面！
            </div>
        </section>
    </div>
  </div>
  `,
})
export class Exception403Component {
  constructor() {
  }
}
