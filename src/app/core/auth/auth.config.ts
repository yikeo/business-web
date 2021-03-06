import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthConfig {
  /**
   * 存储KEY值
   */
  store_key?: string = '_token';
  /**
   * 无效时跳转至登录页，包括：
   * - 无效token值
   * - token已过期（限JWT）
   */
  token_invalid_redirect?: boolean = true;
  /**
   * token过期时间偏移值，默认：`10` 秒（单位：秒）
   */
  token_exp_offset?: number = 10;
  /**
   * 发送token参数名，默认：token
   */
  token_send_key?: string = 'token';
  /**
   * 发送token模板（默认为：`${token}`），使用 `${token}` 表示token点位符，例如：
   *
   * - `Bearer ${token}`
   */
  // tslint:disable-next-line:no-invalid-template-strings
  token_send_template?: string = '${token}';
  /**
   * 发送token参数位置，默认：header
   */
  token_send_place?: 'header' | 'body' | 'url' = 'header';
  /**
   * 登录页路由地址
   */
  login_url?: string = `/account/login`;
  /**
   * 忽略TOKEN的URL地址列表，默认值为：[ /assets\//, /passport\// ]
   */
  ignores?: RegExp[] | null = [/assets\//, /account\//];
  /**
   * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
   */
  allow_anonymous_key?: string = `_allow_anonymous`;
  /**
   * 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
   */
  executeOtherInterceptors?: boolean = true;
}
