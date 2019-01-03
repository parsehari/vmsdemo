import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController } from 'ionic-angular';
import { NotificationPage } from '../../notification/notification';
import { ServiceProvider } from '../../../providers/service/service';
import { CommonProvider } from '../../../providers/common/common';
import { LoginPage } from '../../login/login';


// import { Calendar } from '@ionic-native/calendar';
//import { FCM } from '@ionic-native/fcm';
/**
 * Generated class for the EmpdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-empdashboard',
  templateUrl: 'empdashboard.html',
})
export class EmpdashboardPage {
  requestSegment: any;
  confirmReqst: boolean = false;
  minDate: any;
  travelDate: any;
  locations: any;
  historyData: any = [];
  userDetails: any = [];
  dhDetails: any = [];
  dhUsrDetails: any = [];
  travelType: any = [];
  userName: any;
  startDatetimeMin: any;
  endDatetimeMax: any;
  datess: any;

  private bookingForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public popoverController: PopoverController,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider,
    public modal: ModalController
    //  public calendar: Calendar
    //  public fcm: FCM
  ) {

    console.log("params ", navParams);
    //  this.userDetails = navParams.data.EmployeeDetail;
    this.userDetails = navParams.data.response;
    this.userName = navParams.get('userId');
    this.userName = navParams.get('response');
    //alert(this.userName)
    console.log("params ", this.userDetails);
    console.log("params ", this.userDetails);
    this.bookingForm = this.formBuilder.group({
      updatepurpose: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
      ])],
      // traveldate: ['', Validators.required],
      traveltime: ['', Validators.required],
      travelsrc: ['', Validators.required],
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
    this.requestSegment = "raisereq";
    this.minDate = new Date();
    this.travelDate = new Date();
    // console.log("current time ", this.minDate.getHours());
    // console.log("current time ", this.minDate.getMinutes());
    console.log('this...', this.minDate)
  }

  ionViewDidLoad() {
    this.serviceProvider.getDeptHeadUser('/getEmployeeDept', this.userDetails.emp_no).subscribe((response: any) => {
      this.dhDetails = JSON.parse(response._body);
      console.log('DH response ', this.dhDetails);
      this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', this.dhDetails.pernr).subscribe((response: any) => {
        this.dhUsrDetails = JSON.parse(response._body);
        console.log("this.dhUsrDetails ", this.dhUsrDetails);
      }, (err) => {
        this.commonProvider.showToast("Error in user details");
      })
    }, (err) => {
      this.commonProvider.showToast("Error in dh details");
    })

    this.serviceProvider.getAllLocations('/getAllLocations').subscribe((response: any) => {
      console.log("Locations ", response);
      console.log("Locations ", JSON.parse(response._body));
      this.locations = JSON.parse(response._body);
      console.log("this.locations[0].loc_name ", this.locations[1].loc_name);
      this.bookingForm.get('travelsrc').setValue(this.userDetails.emp_psa);
    },
      (err) => {

        this.commonProvider.showToast(err.message);
      });

    this.startDatetimeMin = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString();// set the current date time
    this.endDatetimeMax = (new Date((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString()) // sets the 30 days from the current date time
    console.log('ionViewDidLoad EmpdashboardPage ', this.startDatetimeMin);
    console.log('ionViewDidLoad EmpdashboardPage ', this.endDatetimeMax);


  }

  showNotifn(myEvent) {

    let popover = this.popoverController.create(NotificationPage);
    popover.present(
      {
        ev: myEvent
      }
    )
  }

  logForm() {
    console.log(this.bookingForm.value);
    this.confirmReqst = true;
  }
  editRequest() {
    this.confirmReqst = false;
  }
  cancelReq() {
    this.commonProvider.Alert.confirm('Sure you want to cancel request?').then((res) => {
      this.bookingForm.reset();
      this.confirmReqst = false;
      this.bookingForm.get('travelsrc').setValue(this.userDetails.emp_psa);
    }, err => {
      console.log('user cancelled');
    })
  }
  getEmpHistory() {
    console.log("In Emp History");
    this.commonProvider.showLoader();
    this.serviceProvider.getBookingHistory('/getTripHistory', this.userDetails.emp_no).subscribe((response: any) => {
      console.log("Emplyee history ", response);
      if (response.status == 200) {
        this.historyData = JSON.parse(response._body);
        this.commonProvider.hideLoader();
      }
    },
      (err) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast(err.message);
      });
  }

  sendRequest() {
    this.commonProvider.Alert.confirm('Sure you want to send request?').then((res) => {
      this.commonProvider.showLoader('Sending request...');
      console.log('this.bookingForm.value ', this.bookingForm.value);
      //let ustr = this.userDetails.emp_esg.substring(0, 2);
      //var tdate = new Date(this.travelDate);
      //tdate.getHour
      let reqData;

      reqData = {
        'userID': this.userDetails.emp_no,
        'source': this.bookingForm.value.travelsrc,
        'destination': this.bookingForm.value.traveldest,
        'purpose': this.bookingForm.value.updatepurpose,
        'travel_date': new Date(this.travelDate).toDateString(),
        // 'travel_date': this.bookingForm.value.traveldate,
        'travel_time': this.bookingForm.value.traveltime,
        'emp_email': this.userDetails.emp_email,
        'emp_UserName': this.userDetails.emp_f_name + ' ' + this.userDetails.emp_l_name,
        'emp_phoneNo': this.userDetails.emp_cell,
        'status': 'Pending with Manager',
        'bh_Id': this.dhDetails.pernr,
        'bh_UserName': this.dhUsrDetails.emp_f_name + ' ' + this.dhUsrDetails.emp_l_name,
        'bh_email': this.dhDetails.email,

        'remark': this.bookingForm.value.remark,
        'location': this.userDetails.emp_psa,
        'cost_id': this.userDetails.emp_cosid,
        'cost_center': this.userDetails.emp_cost,
        'travelType': this.bookingForm.value.travelType
      }
      console.log("ustr", reqData);
      //   reqData.bh_Id = '00211779' ;

      console.log("reqraise data", reqData);

      this.serviceProvider.raiseRequest('/insertTrip', reqData).subscribe((response: any) => {
        console.log("raise request ", response);
        this.commonProvider.hideLoader();
        if (response) {
          this.confirmReqst = false;
          this.bookingForm.reset();
          this.bookingForm.get('travelsrc').setValue(this.userDetails.emp_psa);
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

  logout() {
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
      this.navCtrl.setRoot(LoginPage, {});
    }, err => {
      console.log('user cancelled');
    })
  }

  openDetail(obj: any) {
    console.log("open modal")
    const myModal = this.modal.create('ModalDetailPage', { data: obj });
    myModal.present();
  }

  setDate(dte: any) {
    this.travelDate = new Date(dte);
    console.log("date obj ", this.travelDate);
  }

  cancelCabReq(event, id: any) {
    event.stopPropagation();
    this.commonProvider.Alert.confirm('Sure you want to cancel request?').then((res) => {
      this.commonProvider.showLoader()
      this.serviceProvider.cancelCab('/employeecanceltrip', id).subscribe((response: any) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast("Trip cancelled successfully");
        this.getEmpHistory();
      }, (err) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast("Error in cancellation")
      })
    }, err => {
      console.log('user cancelled');
    })

  }
  // cancelDate(dte: any) {
  //   console.log("date obj ", dte);
  //   //this.minDate = new Date();
  // }


}
