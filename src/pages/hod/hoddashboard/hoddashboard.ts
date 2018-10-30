import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController } from 'ionic-angular';
import { NotificationPage } from '../../notification/notification';
import { ServiceProvider } from '../../../providers/service/service';
import { CommonProvider } from '../../../providers/common/common';
import { RequesthistoryPage } from '../requesthistory/requesthistory';
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

  private bookingForm : FormGroup;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private formBuilder: FormBuilder,
    public popoverController: PopoverController,
    public serviceProvider:ServiceProvider,
    public commonProvider:CommonProvider
    ) {
      this.bookingForm = this.formBuilder.group({
        updatepurpose: ['', Validators.required],
        traveldate: ['', Validators.required],
        traveltime: ['', Validators.required],
        travelsrc: ['', Validators.required],
        traveldest: ['', Validators.required]
      });
      this.requestSegment = "pendingReq";
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
    const userDetails = {
        'email': 'abcd@gmail.com',
        'pwd': 'admin123'
    };
    this.serviceProvider.getBookingHistory('/vms/getTripHistory').subscribe((response: any) => {
     console.log("Emplyee history ", response);

     if(response.status == 200){
       this.historyData = JSON.parse(response._body);
       console.log("Emplyee history ", this.historyData);
     }
   },
     (err) => {
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
      this.commonProvider.showToast(err.message);
    });
  }, err => {
      console.log('user cancelled');
  })
  }

  reqAction(status: string, obj: any){
    console.log("obj ",obj);
    console.log("status ",status);
    this.commonProvider.Alert.confirm('Are you confirm ?').then((res) => {
      this.commonProvider.showLoader('Sending request...');
      let reqData = {
        'userID': 'chowza-cont',
        'source':obj.source,
        'destination':obj.destination,
        'purpose':obj.purpose,
        'travel_date':obj.travel_date,
        'travel_time':obj.travel_time,
        'id': obj.id,
        'status': status,
        'modified_by': 'parha-cont'
      }
      this.serviceProvider.raiseRequest('/vms/approveRequest',reqData,'hodAction').subscribe((response: any) => {
        console.log("raise request ",response);
        this.commonProvider.hideLoader();
        if(response){
          this.getApprovalHistory();
          this.commonProvider.showToast('Request sent successfully');
        }else{
          this.commonProvider.showToast('Request error, Please check with admin');
        }

      },(err)=>{
        this.commonProvider.showToast(err.message);
      });


    }, err => {
        console.log('user cancelled');
    })
  }

  viewReqHistory(){
    this.navCtrl.push('RequesthistoryPage',{});
  }

  ionViewDidLoad() {
    this.serviceProvider.getAllLocations('/vms/getAllLocations').subscribe((response:any) => {
      console.log("Locations ",response);
      console.log("Locations ",JSON.parse(response._body));
       this.locations = JSON.parse(response._body);
       this.getApprovalHistory();
    },
    (err) => {
      this.commonProvider.showToast(err.message);
    });
    console.log('ionViewDidLoad EmpdashboardPage');
  }

  getApprovalHistory(){
    this.commonProvider.showLoader('Loading...');
    this.serviceProvider.getApprovalList('/vms/getApprovalHistory').subscribe((response:any) => {
      console.log("Locations ",response);
      console.log("Locations ",JSON.parse(response._body));
       this.approvalList = JSON.parse(response._body);
       this.commonProvider.hideLoader();
    },
    (err) => {
      this.commonProvider.hideLoader();
      this.commonProvider.showToast(err.message);
    });
  }

  logout(){
    this.commonProvider.Alert.confirm('Sure you want to logout?').then((res) => {
    this.navCtrl.setRoot(LoginPage,{});
  },err=>{
    console.log('user cancelled');
  })
  }



}
