import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpdashboardPage } from './empdashboard';
import { DatePickerModule } from 'ionic3-datepicker';

@NgModule({
  declarations: [
    EmpdashboardPage,
  ],
  imports: [
    DatePickerModule,
    IonicPageModule.forChild(EmpdashboardPage),
  ],
})
export class EmpdashboardPageModule { }
