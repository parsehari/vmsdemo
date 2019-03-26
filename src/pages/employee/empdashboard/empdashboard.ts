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
  ) {
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
    this.currTime = this.currTime.toISOString();
    this.currTime = (this.minDate.getHours() + 2) + ':' + this.minDate.getMinutes();
    this.endDate = new Date();
    this.endtravelDate = new Date();
    this.EndcurrTime = new Date();
    this.EndcurrTime = this.EndcurrTime.toISOString()

    this.EndcurrTime = (this.minDate.getHours() + 2) + ':' + this.minDate.getMinutes();
    this.bookingForm.get('isRoundTrip').setValue('Yes');

  }

  ionViewDidLoad() {
    if (this.commonProvider.vapt) {
      this.serviceProvider.get('/getEmployeeDept/' + this.userDetails.emp_no).then((response: any) => {
        this.dhDetails = response;
        this.serviceProvider.get('/getEmpDetailService/' + this.dhDetails.pernr).then((response: any) => {
          this.dhUsrDetails = response;
        }, (err) => {
          this.commonProvider.showToast("Error in user details");
        })
      }, (err) => {
        this.commonProvider.showToast("Error in dh details");
      })
      this.serviceProvider.get('/getAllLocations').then((response: any) => {
        this.locations = response;
        this.bookingForm.get('travelsrc').setValue(this.userDetails.emp_psa);
      },
        (err) => {
          this.commonProvider.showToast(err.message);
        });
      this.bookingForm.get('costid').setValue(this.userDetails.emp_cosid);
    }
    else {

      this.serviceProvider.getDeptHeadUser('/getEmployeeDept', this.userDetails.emp_no).subscribe((response: any) => {
        this.dhDetails = JSON.parse(response._body);

        this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', this.dhDetails.pernr).subscribe((response: any) => {
          this.dhUsrDetails = JSON.parse(response._body);

        }, (err) => {
          this.commonProvider.showToast("Error in user details");
        })
      }, (err) => {
        this.commonProvider.showToast("Error in dh details");
      })

      this.serviceProvider.getAllLocations('/getAllLocations').subscribe((response: any) => {
        this.locations = JSON.parse(response._body);
        this.bookingForm.get('travelsrc').setValue(this.userDetails.emp_psa);
      },
        (err) => {

          this.commonProvider.showToast(err.message);
        });

      this.bookingForm.get('costid').setValue(this.userDetails.emp_cosid);

    }

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
      return;
    })
  }

  getEmpHistory() {
    this.pageTitle = "History";
    this.commonProvider.showLoader();
    if (this.commonProvider.vapt) {
      let buildParam = {};
      this.serviceProvider.get('/getTripHistory/' + this.userDetails.emp_no, buildParam).then((response: any) => {
        console.log("historyData response", response);
        this.historyData = response;
        this.commonProvider.hideLoader();
      }, (err) => {
        this.commonProvider.showToast(err);
        this.commonProvider.hideLoader();
      })
    } else {
      this.serviceProvider.getBookingHistory('/getTripHistory', this.userDetails.emp_no).subscribe((response: any) => {
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
  }

  sendRequest() {
    this.commonProvider.Alert.confirm('Sure you want to send request?').then((res) => {
      this.commonProvider.showLoader('Sending request...');
      this.tdate = new Date(this.travelDate);
      this.tdate = this.tdate.getDate() + '/' + (this.tdate.getMonth() + 1) + '/' + this.tdate.getFullYear();
      if (this.bookingForm.value.isRoundTrip == 'No') {
        this.edate = "NA";
        this.bookingForm.value.endtraveltime = "NA";
      } else {
        this.edate = new Date(this.endtravelDate);
        this.edate = this.edate.getDate() + '/' + (this.edate.getMonth() + 1) + '/' + this.edate.getFullYear();
      }

      let reqData: any;

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
      this.serviceProvider.raiseRequest('/insertTrip', reqData).subscribe((response: any) => {
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
      return;
    })
  }

  logout() {
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
      this.navCtrl.setRoot(LoginPage, {});
    }, err => {
      return;
    })
  }

  openDetail(obj: any) {
    const myModal = this.modal.create('ModalDetailPage', { data: obj });
    myModal.present();
  }

  setDate(dte: any) {
    this.travelDate = new Date(dte);
    this.endtravelDate = new Date(dte);
    if (this.travelDate > this.minDate) {
      this.currTime = "00:00";
      this.bookingForm.get('traveltime').setValue('');
    } else {
      this.currTime = new Date();
      this.currTime = (this.currTime.getHours() + 2) + ':' + this.currTime.getMinutes();
    }
  }

  setEndDate(dte: any) {
    this.endtravelDate = new Date(dte);
    if (this.endtravelDate > this.minDate) {
      this.EndcurrTime = "00:00";
      //this.bookingForm.get('traveltime').setValue('');
    } else {
      this.EndcurrTime = new Date().toISOString;
      this.EndcurrTime = (this.minDate.getHours() + 2) + ':' + this.minDate.getMinutes();
    }
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
      return;
    })

  }
  showTermsCondition(myEvent) {
    const popvr = this.modal.create('TermsconditionPage', {});
    popvr.present();
  }
  rating(val: any, tripid: any) {
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

  giveRating(ratings: any, tripid: any, reason = null) {
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
}
