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
    public zone: NgZone,
    public modal: ModalController

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


  getPendingList() {
    this.commonProvider.showLoader('');
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
    this.serviceProvider.getApprovalList('/getAllApprovedRequest/adminMobile', this.userDetails.location.id).subscribe((response: any) => {
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

  openDetail(obj: any) {
    console.log("open modal")
    const myModal = this.modal.create('ModalDetailPage', { data: obj });
    myModal.present();
  }

  viewRequest(obj: any) {

    this.navCtrl.push(AdminAprvlPage, { viewData: obj, adminLocation: this.userDetails.location.id })

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad AdminrequestsPage');
    this.getPendingList();
  }
}
