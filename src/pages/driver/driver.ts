import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { PopoverController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CommonProvider } from '../../providers/common/common';
import { ServiceProvider } from '../../providers/service/service';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage {
  tripDetail: any = [];
  cabDetail: any = [];
  driverDetail: any = [];
  srcSubstr: any;
  destSubstr: any;
  driverphno: any;
  startkm: any;
  endkm: any;
  rating: any;
  feedbackform: boolean = false;
  driverText: any = 'No cab is assigned';
  urlPath: string = 'https://mapps.mahindra.com/images/vms/VMS_PDF37tripDetails.pdf';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverController: PopoverController,
    public commonProvider: CommonProvider,
    public serviceProvider: ServiceProvider,
    public callnumber: CallNumber,
    public events: Events
  ) {
    this.driverphno = this.navParams.get('driverNumber');
  }

  logout() {
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
      this.navCtrl.setRoot(LoginPage, {});
    }, err => {
    })
  }

  showNotifn(myEvent) {
    let popover = this.popoverController.create(NotificationPage);
    popover.present(
      {
        ev: myEvent
      })
  }


  getTrip() {
    this.commonProvider.showLoader('Getting cab details..');
    this.serviceProvider.getDriverTripDetails('/getTripDetails/driver/' + this.driverphno).subscribe((resp: any) => {

      this.tripDetail = JSON.parse(resp._body);
      if (this.tripDetail.length) {
        this.tripDetail[0] ? this.tripDetail = this.tripDetail[0] : 'nothing';

        this.tripDetail.cab ? this.cabDetail = this.tripDetail.cab : 'nothing';
        this.driverDetail = this.tripDetail.driver;
        this.srcSubstr = this.tripDetail.source.substring(0, 3);
        this.destSubstr = this.tripDetail.destination.substring(0, 3);
        //this.urlPath = this.urlPath + this.tripDetail.filePath;
        this.commonProvider.hideLoader();
      } else {
        this.commonProvider.hideLoader();
      }
    }, (err) => {
      this.commonProvider.hideLoader();
      this.commonProvider.showToast('Service error')
    })
  }

  ionViewDidLoad() {
    this.getTrip();
  }

  startTrip(type) {
    if (this.startkm) {
      this.commonProvider.showLoader('Updating Kms..');
      let today = new Date();
      let cdate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.serviceProvider.tripStart('/updateOngoingTripDetails', cdate, type, this.tripDetail.id, this.startkm).subscribe((resp: any) => {

        this.commonProvider.hideLoader();
        if (type == 'endTrip') {
          this.feedbackform = true;
          this.driverText = 'You have completed your trip!!'
        }

        this.getTrip();

      }, (err) => {

        this.commonProvider.showToast(err.message);
        this.commonProvider.hideLoader();
      })
    } else {
      this.commonProvider.hideLoader();
      this.commonProvider.showToast("Please enter kms");
    }
  }

  callnum(num: any) {
    this.callnumber.callNumber(num, true).then(
      (res) => {
        return true;
      })
      .catch((err) => {
        this.commonProvider.showToast(err);
      })
  }
}
