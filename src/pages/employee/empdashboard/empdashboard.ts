import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController } from 'ionic-angular';
import { NotificationPage } from '../../notification/notification';
import { ServiceProvider } from '../../../providers/service/service';
import { CommonProvider } from '../../../providers/common/common';
import { LoginPage } from '../../login/login';
import { NativeStorage } from '@ionic-native/native-storage';
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
  userDetails: any = [];
  dhDetails: any = [];

  private bookingForm : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public popoverController: PopoverController,
              public serviceProvider:ServiceProvider,
              public commonProvider:CommonProvider,
              public nativeStorage: NativeStorage
            //  public fcm: FCM
              ) {

              console.log("params ",navParams);
              this.userDetails = navParams.data.EmployeeDetail;
              console.log("params ",this.userDetails);
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

  ionViewDidLoad() {
    this.serviceProvider.getDeptHeadUser('http://mivlad1rd2.corp.mahindra.com:8001/sap/bc/zzhr_org_grade?sap-client=220&empid=EMPLOYEE04').subscribe((response:any) => {
      console.log('DH response ', response);
      this.dhDetails = JSON.parse(response._body);
    },(err)=>{
      this.commonProvider.showToast(err.message);
    })

    this.serviceProvider.getAllLocations('/getAllLocations').subscribe((response:any) => {
      console.log("Locations ",response);
      console.log("Locations ",JSON.parse(response._body));
       this.locations = JSON.parse(response._body);
    },
    (err) => {
      this.commonProvider.showToast(err.message);
    });
    console.log('ionViewDidLoad EmpdashboardPage');
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
    this.commonProvider.showLoader();
    this.serviceProvider.getBookingHistory('/getTripHistory', this.userDetails.emp_no).subscribe((response: any) => {
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
    let ustr = this.userDetails.emp_esg.substring(0, 2);

    let reqData;

      reqData = {
      'userID': this.userDetails.emp_no,
      'source':this.bookingForm.value.travelsrc,
      'destination':this.bookingForm.value.traveldest,
      'purpose':this.bookingForm.value.updatepurpose,
      'travel_date':this.bookingForm.value.traveldate,
      'travel_time':this.bookingForm.value.traveltime,
      'emp_email': this.userDetails.emp_email,
      'emp_UserName': this.userDetails.emp_f_name +' '+ this.userDetails.emp_l_name,
      'emp_phoneNo': this.userDetails.emp_cell,
      'status': 'Pending'
      //'bh_Id' : '00211779'
      //'bh_Id':this.userDetails.emp_no
    }
    console.log("ustr",reqData );
  //  return;
    if( ustr == "L4" || ustr == "L5" ||ustr == "L6" ||ustr == "L7" ||ustr == "L8" || ustr == "L9"){
      reqData.bh_Id = '00211779' ;
    }else{
      reqData.bh_Id = 'null';
    }
    console.log("reqraise data", reqData);

    this.serviceProvider.raiseRequest('/insertTrip',reqData).subscribe((response: any) => {
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




  logout(){
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
      this.nativeStorage.remove('userData');
    this.navCtrl.setRoot(LoginPage,{});
  },err=>{
    console.log('user cancelled');
  })
  }

}
