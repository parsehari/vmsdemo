import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController } from 'ionic-angular';
import { NotificationPage } from '../../notification/notification';
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
  locations: any;
  approvalList: any;
  historyData: any = [];
  userDetails: any = [];
  dhDetails: any = [];
  //traveltype: any = [];

  private bookingForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public popoverController: PopoverController,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider,
    public alertCtrl: AlertController,
    public zone: NgZone

  ) {
    console.log("params hod", navParams);
    this.userDetails = navParams.data.response;
    console.log("params ", this.userDetails);

    this.bookingForm = this.formBuilder.group({
      updatepurpose: ['', Validators.required],
      traveldate: ['', Validators.required],
      traveltime: ['', Validators.required],
      travelsrc: ['', Validators.required],
      traveldest: ['', Validators.required],
      remark: ['', Validators.required],
      travelType: ['', Validators.required]
    });
    this.requestSegment = "pendingReq";
    this.minDate = new Date().toISOString();
    console.log('this...', this.minDate)
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
    }, err => {
      console.log('user cancelled');
    })
  }

  getEmpHistory() {
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
    this.commonProvider.Alert.confirm('Sure you want to send request?').then((res) => {
      this.commonProvider.showLoader('Sending request...');
      console.log('this.bookingForm.value ', this.bookingForm.value);
      let reqData = {
        'userID': this.userDetails.emp_no,
        'source': this.bookingForm.value.travelsrc,
        'destination': this.bookingForm.value.traveldest,
        'purpose': this.bookingForm.value.updatepurpose,
        'travel_date': this.bookingForm.value.traveldate,
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

  reqAction(status: string, obj: any) {
    console.log("obj ", obj);
    console.log("status ", status);
    if (status == "Rejected") {

      const prompt = this.alertCtrl.create({
        title: 'Are you confirm ?',
        message: "Please enter a comment",
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
      this.commonProvider.Alert.confirm('Are you confirm ?').then((res) => {
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
      'remark': obj.remark,
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



}
