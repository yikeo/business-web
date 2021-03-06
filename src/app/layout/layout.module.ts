import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { LayoutPassportComponent } from './passport/passport.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { LayoutDefaultComponent } from './default/default.component';
import { LayoutAdminComponent } from './admin/admin.component';

import { GlobalFooterComponent } from './global/footer/footer.component';
import { GlobalHeaderComponent } from './global/header/header.component';
import { HeaderNotificationComponent } from './global/header/notification';
import { HeaderTaskComponent } from './global/header/task';
import { HeaderMessageComponent } from './global/header/message';


@NgModule({
  declarations: [LayoutPassportComponent, LayoutFullScreenComponent, LayoutDefaultComponent, 
    GlobalFooterComponent, GlobalHeaderComponent, HeaderMessageComponent, HeaderNotificationComponent, HeaderTaskComponent, LayoutAdminComponent],
  imports: [
    SharedModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ]
})
export class LayoutModule { }
