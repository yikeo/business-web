import { Component, OnInit, OnDestroy, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITokenService, DA_SERVICE_TOKEN } from '@core/auth';
import { HttpClient } from '@angular/common/http';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AccountLoginComponent implements OnInit {

  form: FormGroup;
  error = '';
  faUser = faUser;
  faLock = faLock;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
  ) {
    this.form = fb.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, Validators.required],
      remember: [true],
    });
  }

  ngOnInit() {
  }

  get username() {
    return this.form.controls.username;
  }
  get password() {
    return this.form.controls.password;
  }
  get remember() {
    return this.form.controls.remember;
  }

  submit() {
    this.error = '';
    this.username.markAsDirty();
    this.username.updateValueAndValidity();
    this.password.markAsDirty();
    this.password.updateValueAndValidity();
    if (this.username.invalid || this.password.invalid) {
      return;
    }

    /*
    this.http
      .post('/assets/json/account/login', {
        username: this.username.value,
        password: this.password.value,
      })
      .subscribe((res: any) => {
        if (res.msg !== 'ok') {
          this.error = res.msg;
          return;
        }

        // 设置用户Token信息
        this.tokenService.set(res.user);
        let url = this.tokenService.referrer.url || '/';
        if (url.includes('/passport')) {
          url = '/';
        }
        this.router.navigateByUrl(url);
      });
      */

     this.tokenService.set({'token':'11111111', key: '1111'});
     let url = this.tokenService.referrer.url || '/';
     if (url.includes('/passport')) {
       url = '/';
     }
     this.router.navigateByUrl(url);
  }
}
