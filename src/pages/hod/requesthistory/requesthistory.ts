import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { CommonProvider } from '../../../providers/common/common';
/**
 * Generated class for the RequesthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requesthistory',
  templateUrl: 'requesthistory.html',
})
export class RequesthistoryPage {
  userDetails: any = [];
  tripHistory:any = [];
  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public serviceProvider:ServiceProvider,
              public commonProvider:CommonProvider
            ) {
              this.userDetails = navParams.get('EmployeeDetail');
              console.log("nav params ", this.userDetails);
  }

  ionViewDidLoad() {
    this.commonProvider.showLoader('');
    this.serviceProvider.getAllTripHistory('/getAllTripHistory', this.userDetails.emp_no).subscribe((response:any) => {
      console.log("getAllTripHistory ",response);
      console.log("getAllTripHistory ",JSON.parse(response._body));
      this.tripHistory = JSON.parse(response._body);
       // this.approvalList = JSON.parse(response._body);
       this.commonProvider.hideLoader();
    },
    (err) => {
      this.commonProvider.hideLoader();
      this.commonProvider.showToast(err.message);
    });
  }

}
