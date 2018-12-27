import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpdashboardPage } from './empdashboard';
import { CalendarModule } from 'ionic3-calendar-en';
@NgModule({
  declarations: [
    EmpdashboardPage,
  ],
  imports: [
    CalendarModule,
    IonicPageModule.forChild(EmpdashboardPage),
  ],
})
export class EmpdashboardPageModule { }
