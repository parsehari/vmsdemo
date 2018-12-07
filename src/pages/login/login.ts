import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
import { UsersDashboardPage } from '../users-dashboard/users-dashboard';
import { EmpdashboardPage } from '../employee/empdashboard/empdashboard';
import { HoddashboardPage } from '../hod/hoddashboard/hoddashboard';
import { DriverPage } from '../driver/driver';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ScanPage } from '../scan/scan';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

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
  securitylogin: any;
  userid: any;
  constructor(public navCtrl: NavController,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider,
    public iab: InAppBrowser
  ) {
    this.loginToApp();
  }

  ionViewDidLoad() {

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

  loginToApp() {
    this.commonProvider.showLoader();
    let params = new URLSearchParams(window.location.href);
    console.log(params);
    let someParam = params.rawParams;
    this.userid = this.getQueryString('username', someParam);
    if (this.userid) {
      this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', this.userid).subscribe((response: any) => {
        response = JSON.parse(response._body);
        console.log("response ", response);
        let str = response.emp_esg;
        if (str == "L5-Department Head" || str == "L6-Department Head" || str == "L7-Department Head" || str == "L4-Department Head") {
          this.commonProvider.hideLoader();
          this.navCtrl.setRoot(HoddashboardPage, { response });
        } else if (str == "L5-Managerial" || str == "L6-Managerial" || str == "L7-Managerial" || str == "L4-Managerial") {
          this.commonProvider.hideLoader();
          this.navCtrl.setRoot(EmpdashboardPage, { response });
        } else {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast("User role band not maintained")
        }

      },(err)=>{
        this.commonProvider.hideLoader();
        this.commonProvider.showToast(err.message);
      })
    } else {
      this.commonProvider.hideLoader();
    }
  }

  loginAction() {
    console.log('this.loginForm ', this.email.value);
    if (this.email.value) {
      if (isNaN(this.email.value)) {
        if (this.email.value == "security") {
          this.securitylogin = this.email.value;
          this.navCtrl.setRoot(UsersDashboardPage, { 'security': this.securitylogin })
        } else {
          this.commonProvider.showToast("Enter correct credentials ");
        }
      } else {
        this.mobileNumber = this.email.value;
        this.navCtrl.setRoot(DriverPage, { 'driverNumber': this.mobileNumber });
      }
    }
    else {
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

      // let params = new URLSearchParams(window.location.href);
      // console.log(params);
      // let someParam = params.rawParams;
      // this.userid = this.getQueryString('username', someParam);

      this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', 23062721).subscribe((response: any) => {
        response = JSON.parse(response._body);
        console.log("response ", response);
        //  browser.close();
        //let str = response.EmployeeDetail.emp_esg.substring(0, 2);
        let str = response.emp_esg;
        if (str == "L5-Department Head" || str == "L6-Department Head" || str == "L7-Department Head" || str == "L4-Department Head") {
          //   browser.close();
          this.navCtrl.setRoot(HoddashboardPage, { response });
        } else if (str == "L5-Managerial" || str == "L6-Managerial" || str == "L7-Managerial" || str == "L4-Managerial") {
          this.navCtrl.setRoot(EmpdashboardPage, { response });
        } else {
          this.commonProvider.showToast("User role band not maintained")
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

  getQueryString(field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };




}
