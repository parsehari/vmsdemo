import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
import { LoginPage } from '../login/login';
import { AdminAprvlPage } from '../admin-aprvl/admin-aprvl';
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
    console.log("params hod", navParams);
    this.userDetails = navParams.data.response;
    console.log("userDetails ", this.userDetails);

    this.bookingForm = this.formBuilder.group({
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
      cabs: [],
      driver: [],
      vendor: [],
      traveldest: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
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
    console.log('this...', this.minDate)
    this.bookingForm.get('travelsrc').setValue(this.userDetails.location.loc_name);

    this.currTime = new Date();

    this.currTime = this.currTime.getHours() + ':' + this.currTime.getMinutes();
    console.log('this.currTime', this.currTime);

  }


  getPendingList() {
    this.commonProvider.showLoader('');
    this.pageTitle = "Pending";
    this.serviceProvider.getApprovalList('/getAllPendingRequest/adminMobile', this.userDetails.location.id).subscribe((response: any) => {
      console.log("Locations ", response);
      console.log("Locations ", JSON.parse(response._body));
      this.approvalList = JSON.parse(response._body);
      this.commonProvider.hideLoader();
    },
      (err) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast(err.message);
      });
  }

  segmentChanged(event) {
    console.log("Segment clicked! " + event.value, this, event);
    this.zone.run(() => {
      this.requestSegment = event.value;
    });
  }

  logout() {
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
      this.navCtrl.setRoot(LoginPage, {});
    }, err => {
      console.log('user cancelled');
    })
  }

  getEmpHistory() {
    this.commonProvider.showLoader();
    this.pageTitle = "Approved";
    this.serviceProvider.getApprovalList('/getAllApprovedRequest/adminMobile', this.userDetails.location.id).subscribe((response: any) => {
      console.log("Emplyee history ", response);
      if (response.status == 200) {
        this.historyData = JSON.parse(response._body);
        console.log("Emplyee history ", this.historyData);
      }
      this.commonProvider.hideLoader();
    },
      (err) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast(err.message);
      });
  }

  openDetail(obj: any) {
    console.log("open modal")
    const myModal = this.modal.create('ModalDetailPage', { data: obj });
    myModal.present();
  }

  viewRequest(obj: any) {

    this.navCtrl.push(AdminAprvlPage, { viewData: obj, adminLocation: this.userDetails.location.id })

  }

  sendRequest() {
    this.commonProvider.Alert.confirm().then((res) => {
      this.commonProvider.showLoader('Sending request...');
      console.log('this.bookingForm.value ', this.bookingForm.value);
      this.bookingForm.value.cabs ? 'nothing' : this.bookingForm.value.cabs = "";
      this.bookingForm.value.driver ? 'nothing' : this.bookingForm.value.driver = "";
      this.bookingForm.value.vendor ? 'nothing' : this.bookingForm.value.vendor = "";

      this.tdate = new Date(this.travelDate);
      this.tdate = this.tdate.getDate() + '/' + this.tdate.getMonth() + 1 + '/' + this.tdate.getFullYear();

      let reqData = {
        'source': this.userDetails.location.id,
        'destination': this.bookingForm.value.traveldest,
        'purpose': this.bookingForm.value.updatepurpose,
        //        'travel_date': new Date(this.travelDate).toDateString(),
        'travel_date': this.tdate,
        'travel_time': this.bookingForm.value.traveltime,
        'remark': this.bookingForm.value.remark,
        'status': 'Pending with Admin',
        'travelType': this.bookingForm.value.travelType,
        'usrID': this.bookingForm.value.usrID,
        'username': this.bookingForm.value.usrName,
        'usrphone': this.bookingForm.value.usrphone,
        'cabs': this.bookingForm.value.cabs,
        'driver': this.bookingForm.value.driver,
        'vendor': this.bookingForm.value.vendor

      }

      this.serviceProvider.raiseRequestAdmin('/adminraisecabrequest/adminMobile', reqData).subscribe((response: any) => {
        console.log("raise request ", response);
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
    }, err => {
      console.log('user cancelled');
    })
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad AdminrequestsPage');
    this.getPendingList();
    this.getAllDetails();
  }

  setDate(dte: any) {
    this.travelDate = new Date(dte);
    if (this.travelDate > this.minDate) {
      this.currTime = "00:00";
      this.bookingForm.get('traveltime').setValue('');
    } else {
      this.bookingForm.get('traveltime').setValue('');
      this.currTime = new Date();
      this.currTime = this.currTime.getHours() + ':' + this.currTime.getMinutes();
    }
    console.log("date obj ", this.travelDate);
  }

  cancelDate(dte: any) {
    console.log("date obj ", dte);
    this.minDate = new Date();
  }

  logForm() {
    console.log(this.bookingForm.value);
    this.confirmReqst = true;
  }

  cancelReq() {
    this.commonProvider.Alert.confirm('Sure you want to cancel request?').then((res) => {
      this.bookingForm.reset();
      this.confirmReqst = false;
      this.bookingForm.get('travelsrc').setValue(this.userDetails.location.loc_name);
    }, err => {
      console.log('user cancelled');
    })
  }

  getAllDetails() {
    this.serviceProvider.getReqDetails('/getAllAvailableResources/adminMobile', this.userDetails.location.id).subscribe((response: any) => {
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
  editRequest() {
    this.confirmReqst = false;
  }

  typeChange(ev) {
    console.log("type change ", ev);
    if (ev == "outstation") {
      this.bookingForm.get('cabs').setValue(null);
      this.bookingForm.get('driver').setValue(null);
    }
    if (ev == "local") {
      this.bookingForm.get('vendor').setValue(null);
    }
  }
}
