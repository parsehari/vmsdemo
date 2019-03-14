import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpdashboardPage } from './empdashboard';
import { DatePickerModule } from 'ionic3-datepicker';


import { Ionic2RatingModule } from 'ionic2-rating';
@NgModule({
  declarations: [
    EmpdashboardPage,
  ],
  imports: [
    DatePickerModule,
    Ionic2RatingModule,
    IonicPageModule.forChild(EmpdashboardPage),
  ],
})
export class EmpdashboardPageModule { }
