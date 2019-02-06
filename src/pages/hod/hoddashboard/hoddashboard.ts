import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController, ModalController } from 'ionic-angular';
import { NotificationPage } from '../../notification/notification';
import { TermsconditionPage } from '../../termscondition/termscondition';
import { ServiceProvider } from '../../../providers/service/service';
import { CommonProvider } from '../../../providers/common/common';
import { RequesthistoryPage } from '../../hod/requesthistory/requesthistory';
import { LoginPage } from '../../login/login';
/**
 * Generated class for the HoddashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hoddashboard',
  templateUrl: 'hoddashboard.html',
})
export class HoddashboardPage {
  requestSegment: any;
  confirmReqst: boolean = false;
  minDate: any;
  travelDate: any;
  locations: any;
  pageTitle: any;
  approvalList: any;
  historyData: any = [];
  userDetails: any = [];
  dhDetails: any = [];
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
    public modal: ModalController,
    public events: Events

  ) {
    console.log("params hod", navParams);
    this.userDetails = navParams.data.response;
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
    this.pageTitle = "Requests"
    this.minDate = new Date();
    this.travelDate = new Date();
    this.currTime = new Date();

    this.currTime = (this.currTime.getHours() + 2) + ':' + this.currTime.getMinutes();
    console.log('this.currTime', this.currTime);

    this.events.subscribe('actionReq', (ev, status, obj) => {
      this.reqAction(ev, status, obj);
    })

  }

  showNotifn(myEvent) {

    let popover = this.popoverController.create(NotificationPage);
    popover.present(
      {
        ev: myEvent
      }
    )
  }

  showTermsCondition(myEvent) {
    // let popvr = this.popoverController.create(TermsconditionPage);
    // popvr.present({
    //   ev: myEvent
    // })
    const popvr = this.modal.create('TermsconditionPage', {});
    popvr.present();
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
    this.pageTitle = "Booking History";
    this.serviceProvider.getBookingHistory('/getTripHistory', this.userDetails.emp_no).subscribe((response: any) => {
      console.log("Emplyee history ", response);
      if (response.status == 200) {
        this.historyData = JSON.parse(response._body);
        console.log("Emplyee history ", this.historyData);
      }
    },
      (err) => {
        this.commonProvider.showToast(err.message);
      });
  }

  sendRequest() {
    this.commonProvider.Alert.confirm().then((res) => {
      this.commonProvider.showLoader('Sending request...');
      console.log('this.bookingForm.value ', this.bookingForm.value);

      this.tdate = new Date(this.travelDate);
      this.tdate = this.tdate.getDate() + '/' + this.tdate.getMonth() + 1 + '/' + this.tdate.getFullYear();


      let reqData = {
        'userID': this.userDetails.emp_no,
        'source': this.bookingForm.value.travelsrc,
        'destination': this.bookingForm.value.traveldest,
        'pickpoint': this.bookingForm.value.pickpoint,
        'purpose': this.bookingForm.value.updatepurpose,
        //  'travel_date': new Date(this.travelDate).toDateString(),
        'travel_date': this.tdate,
        'travel_time': this.bookingForm.value.traveltime,
        'emp_email': this.userDetails.emp_email,

        'remark': this.bookingForm.value.remark,
        'location': this.userDetails.emp_psa,
        'cost_id': this.userDetails.emp_cosid,
        'cost_center': this.userDetails.emp_cost,

        'emp_UserName': this.userDetails.emp_f_name + ' ' + this.userDetails.emp_l_name,
        'emp_phoneNo': this.userDetails.emp_cell,
        'status': 'Pending with Admin',
        'travelType': this.bookingForm.value.travelType

      }

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
        this.commonProvider.showToast(err.message);
      });
    }, err => {
      console.log('user cancelled');
    })
  }

  reqAction(ev: any, status: string, obj: any) {
    console.log("obj ", obj);
    console.log("status ", status);

    ev.stopPropagation();
    console.log("status ", status);
    if (status == "Rejected") {

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
              console.log('Cancel clicked', data);
            }
          },
          {
            text: 'Send',
            handler: data => {
              console.log('Saved clicked', data);
              this.confirmReqAction(status, obj, data.comment);
            }
          }
        ]
      });
      prompt.present();
      return;
    } else {
      this.commonProvider.Alert.confirm('').then((res) => {
        this.confirmReqAction(status, obj);
      }, err => {
        console.log('user cancelled');
        this.commonProvider.hideLoader();
        this.commonProvider.showToast(err.message);
      })
    }
  }
  confirmReqAction(status: string, obj: any, comment: any = "null") {
    console.log("status ", status)
    console.log("status obj ", obj);
    this.commonProvider.showLoader('Sending request...');
    let reqData = {
      'userID': obj.userID,
      'source': obj.source,
      'destination': obj.destination,
      'pickpoint': obj.pickupPoint,
      'purpose': obj.purpose,
      'travel_date': obj.travel_date,
      'travel_time': obj.travel_time,
      'id': obj.id,
      'status': status,
      'modified_by': this.userDetails.emp_no,
      'comment': comment,
      'emp_email': obj.emp_email,
      'emp_UserName': obj.emp_userName,
      'emp_phoneNo': obj.emp_phoneNo,
      'bh_Id': this.userDetails.emp_no,
      'bh_UserName': obj.bh_UserName,
      'remark': obj.remark,
      //  'location': obj.source,
      'location': obj.emp_location,
      'cost_id': obj.cost_id,
      'cost_center': obj.cost_center,
      'travelType': obj.travelType,
    }
    console.log("raise request ", reqData);
    //return;
    this.serviceProvider.raiseRequest('/approveRequest/hod', reqData, 'hodAction').subscribe((response: any) => {
      this.commonProvider.hideLoader();
      if (response) {
        this.getApprovalHistory();
        this.events.publish('closeModalev');
        this.commonProvider.showToast('Request sent successfully');
      } else {
        this.commonProvider.showToast('Request error, Please check with admin');
      }

    }, (err) => {
      console.log("error ", err);
      this.commonProvider.hideLoader();
      this.commonProvider.showToast(err.message);
    });



  }

  viewReqHistory() {
    this.navCtrl.push(RequesthistoryPage, { EmployeeDetail: this.userDetails });
  }

  ionViewDidLoad() {

    this.serviceProvider.getDeptHeadUser('/getEmployeeDept', this.userDetails.emp_no).subscribe((response: any) => {
      this.dhDetails = JSON.parse(response._body);
      console.log('DH response ', this.dhDetails);
    }, (err) => {
      this.commonProvider.showToast(err.message);
    })

    this.commonProvider.showLoader();
    this.serviceProvider.getAllLocations('/getAllLocations').subscribe((response: any) => {
      console.log("Locations ", JSON.parse(response._body));
      this.locations = JSON.parse(response._body);
      this.bookingForm.get('travelsrc').setValue(this.userDetails.emp_psa);
      this.commonProvider.hideLoader();
      this.getApprovalHistory();
    },
      (err) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast(err.message);
      });
    console.log('ionViewDidLoad EmpdashboardPage');
  }

  getApprovalHistory() {
    this.commonProvider.showLoader('');
    this.pageTitle = "Requests";
    this.serviceProvider.getApprovalList('/getApprovalList/hod', this.userDetails.emp_no).subscribe((response: any) => {
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

  logout() {
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
      this.navCtrl.setRoot(LoginPage, {});
    }, err => {
      console.log('user cancelled');
    })
  }

  segmentChanged(event) {
    console.log("Segment clicked! " + event.value, this, event);
    this.zone.run(() => {
      this.requestSegment = event.value;
    });
  }

  openDetail(obj: any, vw: any) {
    console.log("open modal")
    console.log("open modal", vw)
    const myModal = this.modal.create('ModalDetailPage', { data: obj, viewName: vw });
    myModal.present();
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



}
