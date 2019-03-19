import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  scanSub: any;
  qrCode: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonProvider: CommonProvider,
    public serviceProvider: ServiceProvider,
    public qrScanner: QRScanner
  ) {
  }


  startScan() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.qrCode = text;
            this.commonProvider.showToast(this.qrCode);
            this.qrScanner.hide();
            this.serviceProvider.saveScan('/tripDetails/barcode', this.qrCode).subscribe((response: any) => {
              this.commonProvider.showToast("PDF is created successfully");
            }, (err) => {
              this.commonProvider.showToast('Error in save')
            })
            this.navCtrl.last();
          });
        } else if (status.denied) {
          this.commonProvider.showToast('Camera permission denied');
        } else {
          this.commonProvider.showToast('Permission denied for this runtime.');
        }
      })
      .catch((e: any) => {
        return;
      });
  }

  ionViewDidLoad() {

  }
  ionViewWillEnter() {
    this.showCamera();
    this.startScan();
  }
  ionViewWillLeave() {
    this.hideCamera();
  }
  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }

  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

}
