import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPage } from './driver';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    DriverPage,
  ],
  imports: [
    QRCodeModule,

    IonicPageModule.forChild(DriverPage),
  ],
})
export class DriverPageModule { }
