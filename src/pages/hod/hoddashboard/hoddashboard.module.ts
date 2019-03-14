import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoddashboardPage } from './hoddashboard';
import { DatePickerModule } from 'ionic3-datepicker';
import { Ionic2RatingModule } from 'ionic2-rating';
@NgModule({
  declarations: [
    HoddashboardPage
  ],
  imports: [
    DatePickerModule,
    Ionic2RatingModule,
    IonicPageModule.forChild(HoddashboardPage),
  ],
})
export class HoddashboardPageModule { }
