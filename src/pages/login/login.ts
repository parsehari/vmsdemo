import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
import { UsersDashboardPage } from '../users-dashboard/users-dashboard';
import { EmpdashboardPage } from '../employee/empdashboard/empdashboard';
import { HoddashboardPage } from '../hod/hoddashboard/hoddashboard';
import { DriverPage } from '../driver/driver';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  userDetails: any;
  isLoggedIn: boolean = false;
  users: any = [];
  company: any;
  usremail: any;
  nameID: any;
  inapbrowser: any;
  mobileNumber: any;
  constructor(public navCtrl: NavController,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider,
    public iab: InAppBrowser,
    public nativeStorage: NativeStorage
  ) {
  }

  ionViewDidLoad(){
    //     this.commonProvider.Alert.confirm('Sure you want to cancel request?').then((res) => {
    //     this.bookingForm.reset();
    //     this.confirmReqst = false;
    // }, err => {
    //     console.log('user cancelled');
    // })
  }

  ngOnInit() {
      this.createFormControls();
      this.createForm();
  }

  createFormControls() {
      this.email = new FormControl(this.email, [
          Validators.required,
          Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
      ]);
      this.password = new FormControl('', [
          Validators.required,
          Validators.minLength(4)
      ]);
  }


  createForm() {
      this.loginForm = new FormGroup({
          email: this.email,
          password: this.password
      });
  }

  loginAction(){
    console.log('this.loginForm ',this.email.value);
    if(this.email.value){
      this.mobileNumber = this.email.value;
      this.navCtrl.setRoot(UsersDashboardPage, {'driverNumber': this.mobileNumber});
    }else{
    //  const browser = this.iab.create('https://appstore.mahindra.com/saml', '_blank', {
    //   location: 'yes'
    // });
    //  browser.on('loadstop').subscribe(
    //
    //   data => {
    //       let url = data.url;
    //       this.company = this.getParameterByName('company',url);
    //       this.usremail = this.getParameterByName('email',url);
    //       this.nameID = this.getParameterByName('nameid',url);
    //
    //       var obj = {company: this.company, usremail: this.usremail, nameID: this.nameID};
    //       console.log("userData obj  ",obj);
    //       this.nativeStorage.setItem('userData', obj)
    //         .then(
    //               () => {
    //                 console.log('Stored item successfully')
    //                 this.nativeStorage.getItem('userData')
    //                   .then(
    //                     data => {
                          this.serviceProvider.getUsrRoleDetails('https://emss.mahindra.com/sap/bc/zsi_user_detail','500',211779,'DTA').subscribe((response:any)=>{
                            response = JSON.parse(response._body);
                            console.log("response ",response);
                          //  browser.close();
                          let str = response.EmployeeDetail.emp_esg.substring(0, 2);
                          if(str == "L4" || str == "L5" || str == "L6" || str == "L7" || str == "L8" || str == "L9" ){
                          //   browser.close();

                          this.navCtrl.setRoot(UsersDashboardPage, {response});
                        }else{

                          this.navCtrl.setRoot(UsersDashboardPage, {response});
                        }
   //                        },(err)=>{
   //                          this.commonProvider.showToast(err.message);
   //                        })
   //                     },
   //                      error => {this.commonProvider.showToast(error.message);
   //                    }
   //                  );
   //                },
   //                error => console.error('Error storing item', error)
   //          );
   //
    })

}
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}




}
