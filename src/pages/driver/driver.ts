import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { PopoverController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CommonProvider } from '../../providers/common/common';
import { ServiceProvider } from '../../providers/service/service';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverController: PopoverController,
    public commonProvider: CommonProvider,
    public serviceProvider: ServiceProvider
  ) {
    console.log('driver driverNumber page', this.navParams.get('driverNumber'));
    this.driverphno = this.navParams.get('driverNumber');
  }

  logout() {
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
      this.navCtrl.setRoot(LoginPage, {});
    }, err => {
      console.log('user cancelled');
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
      console.log("this.tripDetail ", this.tripDetail.length)
      if (this.tripDetail.length) {
        this.tripDetail[0] ? this.tripDetail = this.tripDetail[0] : 'nothing';
        console.log("this.tripDetail ", this.tripDetail.length);
        this.tripDetail.cab ? this.cabDetail = this.tripDetail.cab : 'nothing';
        this.driverDetail = this.tripDetail.driver;
        this.srcSubstr = this.tripDetail.source.substring(0, 3);
        this.destSubstr = this.tripDetail.destination.substring(0, 3);

        this.commonProvider.hideLoader();
        console.log("trip response ", this.tripDetail);
        console.log("cabDetail response ", this.cabDetail);
        console.log("driver Detail response ", this.driverDetail);

      } else {
        this.commonProvider.hideLoader();

      }
      // }else{
      //   this.commonProvider.hideLoader();
      // }
    }, (err) => {
      this.commonProvider.hideLoader();
      console.log("error ", err);
      this.commonProvider.showToast('Service error')
    })
  }

  ionViewDidLoad() {
    this.getTrip();
  }

  startTrip(type) {

    console.log(this.startkm)
    if (this.startkm) {
      this.commonProvider.showLoader('Updating Kms..');
      let today = new Date();
      let cdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '/' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      console.log("ctime ", cdate);
      console.log("this.tripDetail ", this.tripDetail);
      this.serviceProvider.tripStart('/updateOngoingTripDetails', cdate, type, this.tripDetail.id, this.startkm).subscribe((resp: any) => {
        console.log("response ", resp);
        this.commonProvider.hideLoader();
        if (type == 'endTrip') {
          console.log("end trip");
          this.getTrip();
        }

      }, (err) => {
        console.log("error", err);
        this.commonProvider.showToast(err.message);
        this.commonProvider.hideLoader();
      })
    } else {
      this.commonProvider.hideLoader();
      this.commonProvider.showToast("Please enter kms");
    }
  }



}
