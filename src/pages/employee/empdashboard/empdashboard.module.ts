import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpdashboardPage } from './empdashboard';
import { DatePickerModule } from 'ionic3-datepicker';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    EmpdashboardPage,
  ],
  imports: [
    DatePickerModule,
    StarRatingModule,
    IonicPageModule.forChild(EmpdashboardPage),
  ],
})
export class EmpdashboardPageModule { }
