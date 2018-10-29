import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController } from 'ionic-angular';
import { NotificationPage } from '../../notification/notification';
import { ServiceProvider } from '../../../providers/service/service';
import { CommonProvider } from '../../../providers/common/common';
import { LoginPage } from '../../login/login';
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
  locations: any;
  historyData: any = [];
  private bookingForm : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public popoverController: PopoverController,
              public serviceProvider:ServiceProvider,
              public commonProvider:CommonProvider
            //  public fcm: FCM
              ) {
    this.bookingForm = this.formBuilder.group({
      updatepurpose: ['', Validators.required],
      traveldate: ['', Validators.required],
      traveltime: ['', Validators.required],
      travelsrc: ['', Validators.required],
      traveldest: ['', Validators.required]
    });
    this.requestSegment = "raisereq";
    this.minDate = new Date().toISOString();
    console.log('this...',this.minDate)
  }

  showNotifn(myEvent){

      let popover =  this.popoverController.create(NotificationPage);
    popover.present(
      {
         ev:myEvent
      }
    )
  }

  logForm(){
    console.log(this.bookingForm.value);
    this.confirmReqst = true;
  }
  editRequest(){
    this.confirmReqst = false;
  }
  cancelReq(){
    this.commonProvider.Alert.confirm('Sure you want to cancel request?').then((res) => {
    this.bookingForm.reset();
    this.confirmReqst = false;
  }, err => {
      console.log('user cancelled');
  })
  }
  getEmpHistory(){
    console.log("In Emp History");
  //   this.fcm.getToken().then(token => {
  //   console.log("Device token from fcm is ", token)
  // })
    const userDetails = {
        'email': 'abcd@gmail.com',
        'pwd': 'admin123'
    };
    this.commonProvider.showLoader();
    this.serviceProvider.getBookingHistory('/vms/getTripHistory').subscribe((response: any) => {
     console.log("Emplyee history ", response);
     if(response.status == 200){
       this.historyData = JSON.parse(response._body);
       this.commonProvider.hideLoader();
     }
   },
     (err) => {
       this.commonProvider.hideLoader();
       this.commonProvider.showToast(err.message);
     });
  }

  sendRequest(){
    this.commonProvider.Alert.confirm('Sure you want to send request?').then((res) => {
      this.commonProvider.showLoader('Sending request...');
    console.log('this.bookingForm.value ',this.bookingForm.value);
    let reqData = {
      'userID': 'chowza-cont',
      'source':this.bookingForm.value.travelsrc,
      'destination':this.bookingForm.value.traveldest,
      'purpose':this.bookingForm.value.updatepurpose,
      'travel_date':this.bookingForm.value.traveldate,
      'travel_time':this.bookingForm.value.traveltime
    }
    this.serviceProvider.raiseRequest('/vms/insertTrip',reqData).subscribe((response: any) => {
      console.log("raise request ",response);
      this.commonProvider.hideLoader();
      if(response){
        this.confirmReqst = false;
        this.commonProvider.showToast('Request sent successfully');
      }else{
        this.commonProvider.showToast('Request error, Please check with admin');
      }

    },(err)=>{
      this.commonProvider.hideLoader();
      this.commonProvider.showToast(err.message);
    });
  }, err => {
      console.log('user cancelled');
  })
  }

  ionViewDidLoad() {
    this.serviceProvider.getAllLocations('/vms/getAllLocations').subscribe((response:any) => {
      console.log("Locations ",response);
      console.log("Locations ",JSON.parse(response._body));
       this.locations = JSON.parse(response._body);
    },
    (err) => {
      this.commonProvider.showToast(err.message);
    });
    console.log('ionViewDidLoad EmpdashboardPage');
  }

  logout(){
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
    this.navCtrl.setRoot(LoginPage,{});
  },err=>{
    console.log('user cancelled');
  })
  }

}
