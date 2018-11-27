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
  tripDetail:any = [];
  cabDetail:any = [];
  driverDetail:any = [];
  srcSubstr: any;
  destSubstr: any;
  driverPage: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popoverController: PopoverController,
              public commonProvider: CommonProvider,
              public serviceProvider: ServiceProvider
             ) {
               console.log('driver status page', this.navParams.get('pageOpen'));
                   this.driverPage = this.navParams.get('pageOpen');
             }

  logout(){
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
    this.navCtrl.setRoot(LoginPage,{});
  },err=>{
    console.log('user cancelled');
  })
  }

  showNotifn(myEvent){
    let popover =  this.popoverController.create(NotificationPage);
      popover.present(
        {
           ev:myEvent
        })
  }

  ionViewDidLoad(){
    this.commonProvider.showLoader('Getting cab details..');
    this.serviceProvider.getDriverTripDetails('/getTripDetails/driver/9000111111').subscribe((resp: any)=>{
      this.tripDetail = JSON.parse(resp._body);
      this.tripDetail = this.tripDetail[0];
      this.cabDetail = this.tripDetail.cab;
      this.driverDetail = this.tripDetail.driver;
      this.srcSubstr = this.tripDetail.source.substring(0,3);
      this.destSubstr = this.tripDetail.destination.substring(0,3);
      this.commonProvider.hideLoader();
      console.log("trip response ", this.tripDetail );
      console.log("cabDetail response ", this.cabDetail );
      console.log("driver Detail response ", this.driverDetail );
    },(err)=>{
        this.commonProvider.hideLoader();
        console.log("error ",err);
      this.commonProvider.showToast(err.message)
    })
  }

  startTrip(ev){
    this.commonProvider.showLoader('Trip starting..');
    let today = new Date();
    let cdate= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'/'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log("ctime ", cdate);
    this.serviceProvider.tripStart('/updateOngoingTripDetails/driver/','10fWbCSh4',cdate).subscribe((resp: any)=>{
        console.log("response ",resp);
        this.commonProvider.hideLoader();

    },(err)=>{
      console.log("error",err);
      this.commonProvider.showToast(err.message);
      this.commonProvider.hideLoader();
    })
  }



}
