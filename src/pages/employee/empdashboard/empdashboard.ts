import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController } from 'ionic-angular';
import { NotificationPage } from '../../notification/notification';
import { ServiceProvider } from '../../../providers/service/service';
import { CommonProvider } from '../../../providers/common/common';
import { LoginPage } from '../../login/login';
import { TermsconditionPage } from '../../termscondition/termscondition';

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
  endtravelDate: any;
  locations: any;
  historyData: any = [];
  userDetails: any = [];
  dhDetails: any = [];
  dhUsrDetails: any = [];
  travelType: any = [];
  userName: any;
  endDate: any;

  datess: any;
  pageTitle: any;
  tdate: any;
  edate: any;
  currTime: any;
  EndcurrTime: any;

  private bookingForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public popoverController: PopoverController,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider,
    public modal: ModalController,
    public events: Events,
    public alertCtrl: AlertController
    //  public calendar: Calendar
    //  public fcm: FCM
  ) {

    console.log("params ", navParams);

    this.userDetails = navParams.data.response;
    this.userName = navParams.get('userId');
    this.userName = navParams.get('response');
    this.bookingForm = this.formBuilder.group({
      updatepurpose: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!?@#$&()\\-`.+,/\]*[A-Za-z0-9!?@#$&()\\-`.+,/\][A-Za-z0-9 _!?@#$&()\\-`.+,/\]*$")
      ])],
      costid: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!?@#$&()\\-`.+,/\]*[A-Za-z0-9!?@#$&()\\-`.+,/\][A-Za-z0-9 _!?@#$&()\\-`.+,/\]*$")
      ])],
      // traveldate: ['', Validators.required],
      traveltime: ['', Validators.required],
      endtraveltime: [''],
      travelsrc: ['', Validators.required],
      isRoundTrip: ['', Validators.required],
      traveldest: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!?@#$&()\\-`.+,/\]*[A-Za-z0-9!?@#$&()\\-`.+,/\][A-Za-z0-9 _!?@#$&()\\-`.+,/\]*$")
      ])],
      pickpoint: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!?@#$&()\\-`.+,/\]*[A-Za-z0-9!?@#$&()\\-`.+,/\][A-Za-z0-9 _!?@#$&()\\-`.+,/\]*$")
      ])],
      remark: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 _!?@#$&()\\-`.+,/\]*[A-Za-z0-9!?@#$&()\\-`.+,/\][A-Za-z0-9 _!?@#$&()\\-`.+,/\]*$")
      ])],
      travelType: ['', Validators.required]
    });
    this.requestSegment = "raisereq";
    this.pageTitle = "Raise Request";

    this.minDate = new Date();
    this.travelDate = new Date();

    this.currTime = new Date(this.minDate);
    this.currTime = this.formatDate(this.currTime);
    this.currTime = (this.minDate.getHours() + 2) + ':' + this.minDate.getMinutes();

    this.endDate = new Date();
    this.endtravelDate = new Date();
    this.EndcurrTime = new Date();
    this.EndcurrTime = this.formatDate(this.EndcurrTime);
    this.EndcurrTime = (this.minDate.getHours() + 2) + ':' + this.minDate.getMinutes();
    this.bookingForm.get('isRoundTrip').setValue('Yes');

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

    this.bookingForm.get('costid').setValue(this.userDetails.emp_cosid);
    console.log('ionViewDidLoad EmpdashboardPage ', this.endDate);
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
    // if (this.bookingForm.value.updatepurpose != null) {
    //   this.commonProvider.showToast("not save");
    // }
    // return false;
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
      this.bookingForm.get('costid').setValue(this.userDetails.emp_cosid);
    }, err => {
      console.log('user cancelled');
    })
  }
  getEmpHistory() {
    console.log("In Emp History");
    this.pageTitle = "History";
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

      this.tdate = new Date(this.travelDate);
      this.tdate = this.tdate.getDate() + '/' + (this.tdate.getMonth() + 1) + '/' + this.tdate.getFullYear();

      if (this.bookingForm.value.isRoundTrip == 'No') {
        this.edate = "NA";
        this.bookingForm.value.endtraveltime = "NA";
      } else {
        this.edate = new Date(this.endtravelDate);
        this.edate = this.edate.getDate() + '/' + (this.edate.getMonth() + 1) + '/' + this.edate.getFullYear();
      }

      let reqData;

      reqData = {
        'userID': this.userDetails.emp_no,
        'source': this.bookingForm.value.travelsrc,
        'destination': this.bookingForm.value.traveldest,
        'pickpoint': this.bookingForm.value.pickpoint,
        'purpose': this.bookingForm.value.updatepurpose,
        //'travel_date': new Date(this.travelDate).toDateString(),
        'travel_date': this.tdate,
        'travel_time': this.bookingForm.value.traveltime,
        'emp_email': this.userDetails.emp_email,
        'emp_UserName': this.userDetails.emp_f_name + ' ' + this.userDetails.emp_l_name,
        'emp_phoneNo': this.userDetails.emp_cell,
        'status': 'Pending with Manager',
        'bh_Id': this.dhDetails.pernr,
        'bh_UserName': this.dhUsrDetails.emp_f_name + ' ' + this.dhUsrDetails.emp_l_name,
        'bh_email': this.dhUsrDetails.emp_email,

        'remark': this.bookingForm.value.remark,
        'location': this.userDetails.emp_psa,
        //'cost_id': this.userDetails.emp_cosid,
        'cost_id': this.bookingForm.value.costid,
        'cost_center': this.userDetails.emp_cost,
        'travelType': this.bookingForm.value.travelType,
        'isRoundTrip': this.bookingForm.value.isRoundTrip,
        //'returnDate': new Date(this.endtravelDate).toDateString(),
        'returnDate': this.edate,
        'returnTime': this.bookingForm.value.endtraveltime,
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
          this.bookingForm.get('costid').setValue(this.userDetails.emp_cosid);
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
    console.log("dte ", dte);
    console.log("minDate ", this.minDate);
    this.travelDate = new Date(dte);
    this.endtravelDate = new Date(dte);

    if (this.travelDate > this.minDate) {
      this.currTime = "00:00";
      this.bookingForm.get('traveltime').setValue('');
    } else {
      this.currTime = new Date();
      this.currTime = (this.currTime.getHours() + 2) + ':' + this.currTime.getMinutes();
    }
    console.log("date obj ", this.travelDate);
  }

  setEndDate(dte: any) {
    console.log("dte ", dte);
    this.endtravelDate = new Date(dte);
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
  showTermsCondition(myEvent) {
    const popvr = this.modal.create('TermsconditionPage', {});
    popvr.present();
  }
  rating(val, tripid) {
    console.log("rating val", val);
    console.log("trip id", tripid);
    if (val <= 2) {
      const prompt = this.alertCtrl.create({
        title: '',
        message: "Please enter any reason",
        inputs: [
          {
            name: 'comment',
            placeholder: 'Your reason'
          },
        ],
        buttons: [
          {
            text: 'Send',
            handler: data => {
              console.log('Saved clicked', data);
              this.giveRating(val, tripid, data.comment);
            }
          }
        ]
      });
      prompt.present();
    } else {
      this.giveRating(val, tripid);
    }
  }

  giveRating(ratings, tripid, reason = null) {
    console.log("reason ", reason);
    this.commonProvider.showLoader();
    this.serviceProvider.submitRating('/submitEmployeeFeedback', tripid, ratings, reason).subscribe((response: any) => {
      this.commonProvider.hideLoader();
      this.commonProvider.showToast("Thank you for your feedback");
      this.getEmpHistory();
    }, (error) => {
      this.commonProvider.hideLoader();
      this.commonProvider.showToast("Error in update rating");
    })
  }

  formatDate(date) {
    let d = new Date(date),
      day = '' + d.getDate(),
      month = '' + (d.getMonth() + 1),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }


}
