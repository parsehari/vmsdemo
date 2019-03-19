import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HoddashboardPage } from '../hod/hoddashboard/hoddashboard';
import { EmpdashboardPage } from '../employee/empdashboard/empdashboard';
import { DriverPage } from '../driver/driver';
import { LoginPage } from '../login/login';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ScanPage } from '../scan/scan';
/**
 * Generated class for the UsersDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users-dashboard',
  templateUrl: 'users-dashboard.html',
})
export class UsersDashboardPage {
  userDetails: any = [];
  driverMobileNumber: any = '';
  securityCheck: any = '';
  scanSub: any;
  scannig: any = false;
  qrCode: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public commonProvider: CommonProvider,
    public serviceProvider: ServiceProvider,
    public qrScanner: QRScanner
  ) {
    if (navParams.get('driverNumber')) {
      this.driverMobileNumber = navParams.get('driverNumber');
    } else if (navParams.get('security')) {
      this.securityCheck = navParams.get('security');
    } else {
      this.userDetails = navParams.data.response.EmployeeDetail;
    }
  }



  showDashboard() {
    this.navCtrl.push('EmpdashboardPage', { 'EmployeeDetail': this.userDetails });
  }
  getTripDetails(status: any) {
    this.navCtrl.push('DriverPage', { 'pageOpen': status });
  }

  securityScan() {
    this.navCtrl.push(ScanPage, {});

  }
}
