import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecretaryPage } from './secretary';
import { DatePickerModule } from 'ionic3-datepicker';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    SecretaryPage,
  ],
  imports: [
    DatePickerModule,
    Ionic2RatingModule,
    IonicPageModule.forChild(SecretaryPage),
  ],
})
export class SecretaryPageModule { }
