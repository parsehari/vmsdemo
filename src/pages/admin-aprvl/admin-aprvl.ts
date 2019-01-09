import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the AdminAprvlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-aprvl',
  templateUrl: 'admin-aprvl.html',
})
export class AdminAprvlPage {
  tripDetail: any;
  srcSubstr: any;
  destSubstr: any;
  adminLocationID: any;
  cabs: any;
  driver: any;
  vendor: any;
  tripData: any;
  cabList: any = [];
  driverList: any = [];
  vendorList: any = [];
  admincomment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider
  ) {
    console.log("navparams ", NavParams);
    console.log("location ", this.navParams.get('adminLocation'));
    this.adminLocationID = this.navParams.get('adminLocation');
    //  this.getCabDriverDetails();
  }

  ionViewWillLoad() {
    this.getAllDetails();
  }

  getAllDetails() {
    this.tripDetail = this.navParams.get('viewData');
    console.log('ionViewDidLoad ModalDetailPage', this.tripDetail);
    this.srcSubstr = this.tripDetail.source.substring(0, 3);
    this.destSubstr = this.tripDetail.destination.substring(0, 3);
    this.serviceProvider.getReqDetails('/getAllAvailableResources/adminMobile', this.adminLocationID).subscribe((response: any) => {
      if (response.status == 200) {
        this.tripData = JSON.parse(response._body);
        this.cabList = this.tripData.cabList;
        this.vendorList = this.tripData.vendorList;
        this.driverList = this.tripData.driverList;
        console.log("cabs details ", this.tripData);
        console.log("cabs details ", this.cabList);

      }
    },
      (err) => {
        this.commonProvider.showToast(err.message);
      });
  }

  assignRequest() {
    this.commonProvider.Alert.confirm().then((res) => {
      this.cabs ? 'nothing' : this.cabs = "";
      this.driver ? 'nothing' : this.driver = "";
      this.vendor ? 'nothing' : this.vendor = "";

      this.commonProvider.showLoader('Approving trip...');
      this.serviceProvider.assignReq('/approvependingrequestadmin', this.tripDetail.id, this.cabs, this.driver, this.vendor, this.admincomment).subscribe((response: any) => {
        console.log("response ", response);
        if (response) {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast("Request assigned successfully");
          this.navCtrl.pop();
        } else {
          this.commonProvider.showToast("Error in request update");
          this.commonProvider.hideLoader();
        }
      })
    }, err => {
      console.log('user cancelled');
    })
  }

}
