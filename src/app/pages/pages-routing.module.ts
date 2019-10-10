import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleGuard } from '@core/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';
// passport pages
import { AccountLoginComponent } from './account/login/login.component';
import { AccountRegisterComponent } from './account/register/register.component';
import { AccountRegisterResultComponent } from './account/register-result/register-result.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [SimpleGuard],
    canActivateChild: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'account/register', pathMatch: 'full' },
      { path: 'dashboard', redirectTo: 'dashboard/monitor', pathMatch: 'full' },
      { path: 'dashboard/analysis', component: DashboardAnalysisComponent },
      { path: 'dashboard/monitor', component: DashboardMonitorComponent },
      { path: 'dashboard/workplace', component: DashboardWorkplaceComponent },
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
    ],
  },
  // account
  {
    path: 'account',
    component: LayoutPassportComponent,
    children: [
      {
        path: 'login',
        component: AccountLoginComponent,
        data: { title: '登录', titleI18n: 'app.login.login' },
      },
      {
        path: 'register',
        component: AccountRegisterComponent,
        data: { title: '注册', titleI18n: 'app.register.register' },
      },
      {
        path: 'register-result',
        component: AccountRegisterResultComponent,
        data: { title: '注册结果', titleI18n: 'app.register.register' },
      }
    ],
  },
  // 单页不包裹Layout
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
