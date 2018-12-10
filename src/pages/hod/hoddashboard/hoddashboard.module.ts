import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoddashboardPage } from './hoddashboard';

@NgModule({
  declarations: [
    HoddashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(HoddashboardPage),
  ],
})
export class HoddashboardPageModule {}
