import { Inject, Injectable, Injector } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AuthConfig } from '../../auth.config';
import { CheckJwt, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN, ITokenService } from '../interface';
import { JWTTokenModel } from './jwt.model';

@Injectable({ providedIn: 'root' })
export class JWTGuard implements CanActivate, CanActivateChild, CanLoad {
  private cog: AuthConfig;
  private url: string | undefined;

  constructor(@Inject(DA_SERVICE_TOKEN) private srv: ITokenService, private injector: Injector, cog: AuthConfig) {
    this.cog = { ...new AuthConfig(), ...cog };
  }

  private process(): boolean {
    const res = CheckJwt(this.srv.get<JWTTokenModel>(JWTTokenModel), this.cog.token_exp_offset!);
    if (!res) {
      ToLogin(this.cog, this.injector, this.url);
    }
    return res;
  }

  // lazy loading
  canLoad(route: Route, _segments: UrlSegment[]): boolean {
    this.url = route.path;
    return this.process();
  }
  // all children route
  canActivateChild(_childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;
    return this.process();
  }
  // route
  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;
    return this.process();
  }
}
