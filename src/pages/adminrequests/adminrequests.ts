import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
import { LoginPage } from '../login/login';
import { AdminAprvlPage } from '../admin-aprvl/admin-aprvl';
import { TermsconditionPage } from '../termscondition/termscondition';
import { AdminHistoryPage } from './admin-history/admin-history';

/**
 * Generated class for the AdminrequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminrequests',
  templateUrl: 'adminrequests.html',
})
export class AdminrequestsPage {
  requestSegment: any;
  confirmReqst: boolean = false;
  minDate: any;
  travelDate: any;
  locations: any;
  approvalList: any;
  historyData: any = [];
  userDetails: any = [];
  dhDetails: any = [];
  tripData: any;
  srcSubstr: any;
  destSubstr: any;
  tripDetail: any;
  cabList: any = [];
  driverList: any = [];
  vendorList: any = [];
  pageTitle: any;
  tdate: any;
  currTime: any;
  endtravelDate: any;
  EndcurrTime: any;
  edate: any;
  endDate: any;

  private bookingForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public popoverController: PopoverController,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider,
    public alertCtrl: AlertController,
    public zone: NgZone,
    public modal: ModalController

  ) {
    this.userDetails = navParams.data.response;
    this.userDetails.location = {
      'loc_name': this.userDetails.loc_name,
      'id': this.userDetails.locationId
    }
    this.bookingForm = this.formBuilder.group({
      // costid: ['', Validators.compose([
      //   Validators.required,
      //   Validators.pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
      // ])],
      usrID: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
      ])],
      usrName: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")

      ])],
      usrphone: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9 _!@#$&()\\-`.+,/\]*[0-9!@#$&()\\-`.+,/\][0-9 _!@#$&()\\-`.+,/\]*$")
      ])],
      updatepurpose: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
      ])],
      // traveldate: ['', Validators.required],
      traveltime: ['', Validators.required],
      travelsrc: ['', Validators.required],
      endtraveltime: [''],
      isRoundTrip: ['', Validators.required],
      cabs: [],
      driver: [],
      vendor: [],
      traveldest: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
      ])],
      pickpoint: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!?@#$&()\\-`.+,/\]*[A-Za-z0-9!?@#$&()\\-`.+,/\][A-Za-z0-9 _!?@#$&()\\-`.+,/\]*$")
      ])],
      remark: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
      ])],
      travelType: ['', Validators.required]
    });
    this.requestSegment = "pendingReq";
    this.pageTitle = "Pending";

    this.minDate = new Date();
    this.travelDate = new Date();
    this.currTime = new Date(this.minDate);
    this.currTime = this.currTime.toISOString();
    this.currTime = (this.minDate.getHours() + 2) + ':' + this.minDate.getMinutes();
    this.endDate = new Date();
    this.endtravelDate = new Date();

    this.EndcurrTime = new Date();
    this.EndcurrTime = this.EndcurrTime.toISOString()
    this.EndcurrTime = (this.minDate.getHours() + 2) + ':' + this.minDate.getMinutes();

    this.bookingForm.get('isRoundTrip').setValue('Yes');

    this.bookingForm.get('travelsrc').setValue(this.userDetails.location.loc_name);
  }


  getPendingList() {
    this.commonProvider.showLoader('');
    this.pageTitle = "Pending";
    if (this.commonProvider.vapt) {
      this.serviceProvider.post('/getAllPendingRequest/adminMobile', { "pernr": this.userDetails.userID, "loc_id": this.userDetails.location.id }).then((response: any) => {
        this.approvalList = response;
        this.commonProvider.hideLoader();
      },
        (err) => {
          err == "Access token has expired" ? this.navCtrl.setRoot(LoginPage, {}) : '';
          this.commonProvider.hideLoader();
          this.commonProvider.showToast(err);
        });
    } else {
      this.serviceProvider.getApprovalList('/getAllPendingRequest/adminMobile', this.userDetails.location.id).subscribe((response: any) => {
        this.approvalList = JSON.parse(response._body);
        this.commonProvider.hideLoader();
      },
        (err) => {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast(err.message);
        });

    }
  }

  segmentChanged(event) {
    this.zone.run(() => {
      this.requestSegment = event.value;
    });
  }

  logout() {
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
      this.navCtrl.setRoot(LoginPage, {});
    }, err => {

    })
  }

  getEmpHistory() {
    this.commonProvider.showLoader();
    this.pageTitle = "Approved";
    if (this.commonProvider.vapt) {
      this.serviceProvider.post('/getAllApprovedRequest/adminMobile', { "pernr": this.userDetails.userID, "loc_id": this.userDetails.location.id }).then((response: any) => {
        this.historyData = response;
        this.commonProvider.hideLoader();
      },
        (err) => {
          err == "Access token has expired" ? this.navCtrl.setRoot(LoginPage, {}) : '';
          this.commonProvider.hideLoader();
          this.commonProvider.showToast(err);
        });
    } else {
      this.serviceProvider.getApprovalList('/getAllApprovedRequest/adminMobile', this.userDetails.location.id).subscribe((response: any) => {
        if (response.status == 200) {
          this.historyData = JSON.parse(response._body);
        }
        this.commonProvider.hideLoader();
      },
        (err) => {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast(err.message);
        });
    }
  }

  openDetail(obj: any) {
    const myModal = this.modal.create('ModalDetailPage', { data: obj });
    myModal.present();
  }

  viewRequest(event: any, obj: any) {
    event.stopPropagation();
    this.navCtrl.push(AdminAprvlPage, { viewData: obj, adminLocation: this.userDetails.location.id, adminID: this.userDetails.id, adminName: this.userDetails.userID, viewName: 'createRequest' })
  }


  sendRequest() {
    this.commonProvider.Alert.confirm().then((res) => {
      this.commonProvider.showLoader('Sending request...');

      this.bookingForm.value.cabs != 'select' ? 'nothing' : this.bookingForm.get('cabs').setValue(null);
      this.bookingForm.value.driver != 'select' ? 'nothing' : this.bookingForm.get('driver').setValue(null);
      this.bookingForm.value.vendor != 'select' ? 'nothing' : this.bookingForm.get('vendor').setValue(null);
      this.tdate = new Date(this.travelDate);
      this.tdate = this.tdate.getDate() + '-' + (this.tdate.getMonth() + 1) + '-' + this.tdate.getFullYear();
      if (this.bookingForm.value.isRoundTrip == 'No') {
        this.edate = "NA";
        this.bookingForm.value.endtraveltime = "NA";
      } else {
        this.edate = new Date(this.endtravelDate);
        this.edate = this.edate.getDate() + '-' + (this.edate.getMonth() + 1) + '-' + this.edate.getFullYear();
      }

      if (this.commonProvider.vapt) {
        let reqData = {
          "source": this.userDetails.location.id,
          "destination": this.bookingForm.value.traveldest,
          "purpose": this.bookingForm.value.updatepurpose,
          "travel_date": this.tdate,
          "travel_time": this.bookingForm.value.traveltime,
          "comment": this.bookingForm.value.remark,
          //"status": "Pending with Admin",
          "travelType": this.bookingForm.value.travelType,
          "userID": this.bookingForm.value.usrID,
          "emp_userName": this.bookingForm.value.usrName,
          "emp_phoneNo": this.bookingForm.value.usrphone,
          "emp_email": this.bookingForm.value.usrID + '@mahindra.com',
          "cabid": this.bookingForm.value.cabs,
          "driverid": this.bookingForm.value.driver,
          "vendorid": this.bookingForm.value.vendor,
          "pickupPoint": this.bookingForm.value.pickpoint,
          "isRoundTrip": this.bookingForm.value.isRoundTrip,
          "returnDate": this.edate,
          "returnTime": this.bookingForm.value.endtraveltime,
          "approvedBy": this.userDetails.id
        }
        this.serviceProvider.post('/adminraisecabrequest/adminMobile', reqData).then((response: any) => {
          this.commonProvider.hideLoader();
          if (response) {
            this.confirmReqst = false;
            this.bookingForm.reset();
            this.bookingForm.get('travelsrc').setValue(this.userDetails.location.loc_name);
            this.commonProvider.showToast('Request sent successfully');
          } else {
            this.commonProvider.showToast('Request error, Please check with admin');
          }

        }, (err) => {
          err == "Access token has expired" ? this.navCtrl.setRoot(LoginPage, {}) : '';
          this.commonProvider.hideLoader();
          this.commonProvider.showToast(err);
        });

      } else {
        let reqData = {
          'source': this.userDetails.location.id,
          'destination': this.bookingForm.value.traveldest,
          'purpose': this.bookingForm.value.updatepurpose,
          //'travel_date': new Date(this.travelDate).toDateString(),
          'travel_date': this.tdate,
          'travel_time': this.bookingForm.value.traveltime,
          'remark': this.bookingForm.value.remark,
          'status': 'Pending with Admin',
          'travelType': this.bookingForm.value.travelType,
          'usrID': this.bookingForm.value.usrID,
          'username': this.bookingForm.value.usrName,
          'usrphone': this.bookingForm.value.usrphone,
          "emp_email": this.bookingForm.value.usrID + '@mahindra.com',
          'cabs': this.bookingForm.value.cabs,
          'driver': this.bookingForm.value.driver,
          'vendor': this.bookingForm.value.vendor,
          'pickupPoint': this.bookingForm.value.pickpoint,
          'isRoundTrip': this.bookingForm.value.isRoundTrip,
          //'returnDate': new Date(this.endtravelDate).toDateString(),
          'returnDate': this.edate,
          'returnTime': this.bookingForm.value.endtraveltime,
          "approvedBy": this.userDetails.id
        }

        this.serviceProvider.raiseRequestAdmin('/adminraisecabrequest/adminMobile', reqData).subscribe((response: any) => {
          this.commonProvider.hideLoader();
          if (response) {
            this.confirmReqst = false;
            this.bookingForm.reset();
            this.bookingForm.get('travelsrc').setValue(this.userDetails.location.loc_name);
            this.commonProvider.showToast('Request sent successfully');
          } else {
            this.commonProvider.showToast('Request error, Please check with admin');
          }

        }, (err) => {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast('Request error, Please check with admin');
        });
      }

    }, err => {
    })
  }

  ionViewWillEnter() {
    this.getPendingList();
    this.getAllDetails();
  }

  setDate(dte: any) {
    this.travelDate = new Date(dte);
    this.endtravelDate = new Date(dte);
    if (this.travelDate > this.minDate) {
      this.currTime = "00:00";
      this.bookingForm.get('traveltime').setValue('');
    } else {
      this.bookingForm.get('traveltime').setValue('');
      this.currTime = new Date();
      this.currTime = (this.currTime.getHours() + 2) + ':' + this.currTime.getMinutes();
    }

  }

  cancelDate(dte: any) {
    this.minDate = new Date();
  }

  logForm() {
    this.confirmReqst = true;
  }

  cancelReq() {
    this.commonProvider.Alert.confirm('Sure you want to cancel request?').then((res) => {
      this.bookingForm.reset();
      this.confirmReqst = false;
      this.bookingForm.get('travelsrc').setValue(this.userDetails.location.loc_name);
    }, err => {
    })
  }

  getAllDetails() {
    if (this.commonProvider.vapt) {
      this.serviceProvider.post('/getAllAvailableResources/adminMobile', { "pernr": this.userDetails.userID, "loc_id": this.userDetails.location.id }).then((response: any) => {
        this.tripData = response;
        this.cabList = this.tripData.cabList;
        this.vendorList = this.tripData.vendorList;
        this.driverList = this.tripData.driverList;
      },
        (err) => {
          err == "Access token has expired" ? this.navCtrl.setRoot(LoginPage, {}) : '';
          this.commonProvider.hideLoader();
          this.commonProvider.showToast(err);
        });
    } else {
      this.serviceProvider.getReqDetails('/getAllAvailableResources/adminMobile', this.userDetails.location.id).subscribe((response: any) => {
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
  editRequest() {
    this.confirmReqst = false;
  }

  viewReqHistory() {
    this.navCtrl.push(AdminHistoryPage, { EmployeeDetail: this.userDetails });
  }

  showTermsCondition(myEvent: any) {
    const popvr = this.modal.create('TermsconditionPage', {});
    popvr.present();
  }

  setEndDate(dte: any) {
    this.endtravelDate = new Date(dte);
    if (this.endtravelDate > this.minDate) {
      this.EndcurrTime = "00:00";
    } else {
      this.EndcurrTime = new Date().toISOString;
      this.EndcurrTime = (this.minDate.getHours() + 2) + ':' + this.minDate.getMinutes();
    }
  }

  // editFrom(obj: any) {
  //   this.requestSegment = "raisereq";
  //   this.pageTitle = 'Raise Request';
  //
  //   this.bookingForm.get('isRoundTrip').setValue(obj.isRoundTrip);
  //   this.bookingForm.get('travelsrc').setValue(obj.source);
  //   this.bookingForm.get('traveldest').setValue(obj.destination);
  //   this.bookingForm.get('updatepurpose').setValue(obj.purpose);
  //   this.bookingForm.get('travelType').setValue(obj.travelType);
  //   this.bookingForm.get('usrID').setValue(obj.userID);
  //   this.bookingForm.get('usrName').setValue(obj.emp_userName);
  //   this.bookingForm.get('usrphone').setValue(obj.emp_phoneNo);
  //   this.bookingForm.get('remark').setValue(obj.remark);
  //   this.bookingForm.get('cabs').setValue(obj.cabid);
  //   this.bookingForm.get('driver').setValue(obj.driverid);
  //   this.bookingForm.get('vendor').setValue(obj.vendorid);
  //   this.bookingForm.get('pickpoint').setValue(obj.pickupPoint);
  //   this.currTime = obj.travel_time;
  //   this.bookingForm.get('traveltime').setValue(obj.travel_time);
  //   this.bookingForm.get('remark').setValue(obj.comment);
  //   this.bookingForm.get('endtraveltime').setValue(obj.travel_time);
  //   this.endtravelDate = new Date(obj.returnDate);
  //   this.travelDate = new Date(obj.travel_date);
  //
  // }

  setCab() {
    this.bookingForm.get('cabs').setValue('select');
    this.bookingForm.get('driver').setValue('select');
  }

  setVendor() {
    this.bookingForm.get('vendor').setValue('select');

  }


}
