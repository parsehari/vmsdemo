import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HoddashboardPage } from '../hod/hoddashboard/hoddashboard';
import { EmpdashboardPage } from '../employee/empdashboard/empdashboard';
import { DriverPage } from '../driver/driver';
import { LoginPage } from '../login/login';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public commonProvider: CommonProvider,
              public serviceProvider: ServiceProvider
   ) {
     console.log("in user page ", navParams);
     console.log("navParams.get('driverNumber') ", navParams.get('driverNumber'));
     console.log("navParams.get('securitylogin') ", navParams.get('security'));
     if(navParams.get('driverNumber')){
        this.driverMobileNumber = navParams.get('driverNumber');
     }else if(navParams.get('security')){
       this.securityCheck = navParams.get('security');
     }else{
       this.userDetails = navParams.data.response.EmployeeDetail;
     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersDashboardPage');
  }
  showDashboard(){
      //this.navCtrl.push('EmpdashboardPage',{ 'EmployeeDetail': this.userDetails });
    this.navCtrl.push('HoddashboardPage',{ 'EmployeeDetail': this.userDetails });
  }
  getTripDetails(status: any){
    this.navCtrl.push('DriverPage',{'pageOpen': status});
  }
  // logout(){
  //   this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
  //     this.nativeStorage.remove('userData');
  //   this.navCtrl.setRoot(LoginPage,{});
  // },err=>{
  //   console.log('user cancelled');
  // })
  // }

}
