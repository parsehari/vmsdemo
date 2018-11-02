import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { PopoverController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CommonProvider } from '../../providers/common/common';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popoverController: PopoverController,
              public commonProvider: CommonProvider
             ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverPage');
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



}
