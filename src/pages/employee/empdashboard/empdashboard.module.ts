import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpdashboardPage } from './empdashboard';

@NgModule({
  declarations: [
    EmpdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpdashboardPage),
  ],
})
export class EmpdashboardPageModule {}
