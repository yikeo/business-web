import { NgModule } from '@angular/core';
import { LayoutPassportComponent } from './passport/passport.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { LayoutDefaultComponent } from './default/default.component';
import { SharedModule } from '@shared';



@NgModule({
  declarations: [LayoutPassportComponent, LayoutFullScreenComponent, LayoutDefaultComponent],
  imports: [
    SharedModule
  ]
})
export class LayoutModule { }
