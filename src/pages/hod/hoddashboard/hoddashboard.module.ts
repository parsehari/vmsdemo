import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoddashboardPage } from './hoddashboard';
import { DatePickerModule } from 'ionic3-datepicker';

@NgModule({
  declarations: [
    HoddashboardPage,
  ],
  imports: [
    DatePickerModule,
    IonicPageModule.forChild(HoddashboardPage),
  ],
})
export class HoddashboardPageModule { }
