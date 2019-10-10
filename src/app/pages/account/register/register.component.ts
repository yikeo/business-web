import { Component, OnInit, OnDestroy, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITokenService, DA_SERVICE_TOKEN } from '@core/auth';
import { HttpClient } from '@angular/common/http';
import { faUser, faAddressBook, faLock, faPhone, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  form: FormGroup;
  error = '';
  type = 0;
  visible = false;
  status = 'pool';
  progress = 0;

  faUser = faUser;
  faMail = faAddressBook;
  faLock = faLock;
  faPhone = faPhone;
  faPen = faPen;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
  ) {
    this.form = fb.group({
      username: [null, [Validators.required, Validators.minLength(6)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirm: [null, [Validators.required, Validators.minLength(6)]],
      mobilePrefix: ['+86'],
      mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      captcha: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  get username() {
    return this.form.controls.username;
  }
  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }
  get confirm() {
    return this.form.controls.confirm;
  }
  get mobile() {
    return this.form.controls.mobile;
  }
  get captcha() {
    return this.form.controls.captcha;
  }


}
