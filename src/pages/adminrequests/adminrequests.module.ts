import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminrequestsPage } from './adminrequests';
import { DatePickerModule } from 'ionic3-datepicker';

@NgModule({
  declarations: [
    AdminrequestsPage,
  ],
  imports: [
    DatePickerModule,
    IonicPageModule.forChild(AdminrequestsPage),
  ],
})
export class AdminrequestsPageModule { }
