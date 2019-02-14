import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPage } from './driver';
import { QRCodeModule } from 'angular2-qrcode';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    DriverPage,
  ],
  imports: [
    QRCodeModule,
    StarRatingModule,
    IonicPageModule.forChild(DriverPage),
  ],
})
export class DriverPageModule { }
