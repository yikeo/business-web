import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';
import { AccountLoginComponent } from './account/login/login.component';
import { AccountRegisterComponent } from './account/register/register.component';
import { AccountRegisterResultComponent } from './account/register-result/register-result.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AdminExampleComponent } from './admin/example/example.component';

const COMPONENTS = [
  DashboardAnalysisComponent,
  DashboardMonitorComponent,
  DashboardWorkplaceComponent,
  // passport pages
  AccountLoginComponent,
  AccountRegisterComponent,
  AccountRegisterResultComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, PagesRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, AdminExampleComponent],
  entryComponents: COMPONENTS_NOROUNT,
})
export class PagesModule { }
