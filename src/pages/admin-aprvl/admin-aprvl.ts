import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
import { CallNumber } from '@ionic-native/call-number';
//import { CalendarComponentOptions } from 'ion2-calendar';
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
  adminID: any;
  admincomment: any;
  editUrl: any;
  adminName: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider,
    public callnumber: CallNumber,
    public alertCtrl: AlertController
  ) {
    this.adminLocationID = this.navParams.get('adminLocation');
    this.adminID = this.navParams.get('adminID');
    this.editUrl = this.navParams.get('viewName');
    this.adminName = this.navParams.get('adminName');
  }

  ionViewWillLoad() {
    this.getAllDetails();
  }

  getAllDetails() {
    this.tripDetail = this.navParams.get('viewData');
    this.tripDetail.comment != "null" ? this.admincomment = this.tripDetail.comment : 'nothing';
    this.srcSubstr = this.tripDetail.source.substring(0, 3);
    this.destSubstr = this.tripDetail.destination.substring(0, 3);
    console.log("this.adminLocationID ", this.adminLocationID);
    console.log("this.adminName ", this.adminName);
    console.log("this.editUrl ", this.editUrl);
    if (this.commonProvider.vapt) {
      this.serviceProvider.post('/getAllAvailableResources/adminMobile', { "pernr": this.adminName, "loc_id": this.adminLocationID }).then((response: any) => {
        if (response) {
          this.tripData = response;
          this.cabList = this.tripData.cabList;
          this.vendorList = this.tripData.vendorList;
          this.driverList = this.tripData.driverList;
        }
      },
        (err) => {
          this.commonProvider.showToast(err.message);
        });
    } else {
      this.serviceProvider.getReqDetails('/getAllAvailableResources/adminMobile', this.adminLocationID).subscribe((response: any) => {
        if (response.status == 200) {
          this.tripData = JSON.parse(response._body);
          this.cabList = this.tripData.cabList;
          this.vendorList = this.tripData.vendorList;
          this.driverList = this.tripData.driverList;
        }
      },
        (err) => {
          this.commonProvider.showToast(err.message);
        });
    }
  }

  assignRequest() {
    if (!this.vendor) {
      if (!this.driver) {
        this.commonProvider.showToast("Please assign Driver");
        return false;
      }
      if (!this.cabs) {
        this.commonProvider.showToast("Please assign Cab");
        return false;
      }
    } else {

    }

    this.commonProvider.Alert.confirm().then((res) => {
      this.cabs != 'select' ? 'nothing' : this.cabs = "";
      this.driver != 'select' ? 'nothing' : this.driver = "";
      this.vendor != 'select' ? 'nothing' : this.vendor = "";

      this.commonProvider.showLoader('Approving trip...');
      if (this.commonProvider.vapt) {
        this.editUrl == 'createRequest' ? this.editUrl = '/approvependingrequestadmin/mobile' : this.editUrl = '/editTripDetails/mobile';
        let reqData = { "pernr": this.adminName, "tripId": this.tripDetail.id, "cabId": this.cabs, "driverId": this.driver, "vendorId": this.vendor, "admincomment": this.admincomment, "adminapproverId": this.adminID }
        console.log("reqData ", reqData);
        this.serviceProvider.post(this.editUrl, reqData).then((response: any) => {
          if (response) {
            this.commonProvider.hideLoader();
            this.commonProvider.showToast("Request assigned successfully");
            this.navCtrl.pop();
          } else {
            this.commonProvider.showToast("Error in request update");
            this.commonProvider.hideLoader();
          }
        }, (err) => {
          this.commonProvider.showToast("Error in request update");
          this.commonProvider.hideLoader();
        })
      } else {
        this.editUrl == 'createRequest' ? this.editUrl = '/approvependingrequestadmin' : this.editUrl = '/editTripDetails';
        this.serviceProvider.assignReq(this.editUrl, this.tripDetail.id, this.cabs, this.driver, this.vendor, this.admincomment, this.adminID).subscribe((response: any) => {
          if (response) {
            this.commonProvider.hideLoader();
            this.commonProvider.showToast("Request assigned successfully");
            this.navCtrl.pop();
          } else {
            this.commonProvider.showToast("Error in request update");
            this.commonProvider.hideLoader();
          }
        }, (err) => {
          this.commonProvider.showToast("Error in request update");
          this.commonProvider.hideLoader();
        })
      }

    }, err => {
    })
  }

  callnum(num) {
    this.callnumber.callNumber(num, true).then(
      (res) => {
      })
      .catch((err) => {
        this.commonProvider.showToast(err);
      })
  }
  setCab() {
    this.cabs = 'select';
    this.driver = 'select';
  }

  setVendor() {
    this.vendor = 'select';
  }

  cancelReqAdmin() {
    const prompt = this.alertCtrl.create({
      title: '',
      message: "Please enter comments for rejection",
      inputs: [
        {
          name: 'comment',
          placeholder: 'Your reason'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.rejectRequest(data.comment);
          }
        }
      ]
    });
    prompt.present();
    return;
  }

  rejectRequest(cmnt: any) {
    this.commonProvider.showLoader('Rejecting trip...');
    if (this.commonProvider.vapt) {
      let reqData = { "tripId": this.tripDetail.id, "adminapproverId": this.adminID, "pernr": this.adminName, "rejectComment": cmnt }
      this.serviceProvider.post('/rejectpendingrequestadmin', reqData).then((response: any) => {
        if (response) {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast("Request cancelled successfully");
          this.navCtrl.pop();
        } else {
          this.commonProvider.showToast("Error in request cancellation");
          this.commonProvider.hideLoader();
        }
      }, err => {
        this.commonProvider.showToast("Request error");
        this.commonProvider.hideLoader();
      })
    } else {
      this.serviceProvider.adminCancelReq('/rejectpendingrequestadmin', cmnt, this.tripDetail.id, this.adminID).subscribe((response: any) => {
        if (response) {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast("Request cancelled successfully");
          this.navCtrl.pop();
        } else {
          this.commonProvider.showToast("Error in request cancellation");
          this.commonProvider.hideLoader();
        }
      }, err => {
        this.commonProvider.showToast("Request error");
        this.commonProvider.hideLoader();
      })
    }

  }

}
