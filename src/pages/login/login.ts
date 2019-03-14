import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CommonProvider } from '../../providers/common/common';
import { UsersDashboardPage } from '../users-dashboard/users-dashboard';
import { EmpdashboardPage } from '../employee/empdashboard/empdashboard';
import { HoddashboardPage } from '../hod/hoddashboard/hoddashboard';
import { AdminrequestsPage } from '../adminrequests/adminrequests';
import { DriverPage } from '../driver/driver';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ScanPage } from '../scan/scan';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import CryptoJS from 'crypto-js';

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
  session: any;
  secureKey: any;
  secureIV: any;
  showLogin: boolean = false;
  isActive: any;

  constructor(public navCtrl: NavController,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider,
    public iab: InAppBrowser,
    public plt: Platform

  ) {
    this.buildURLForLogin();
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

  buildURLForLogin() {

    let params = new URLSearchParams(window.location.href);
    console.log("params ", params);
    let someParam = params.rawParams;
    console.log("someParam ", someParam);
    this.session = this.getQueryString('session', someParam);
    this.commonProvider.showLoader('Please wait..');
    if (this.session) {
      this.showLogin = false;
      var userData = this.generateSecureKeyAndIV(this.session).then((result: any) => {
        console.log("this.userid ", result);
        this.commonProvider.hideLoader();
        this.loginToApp(result)
      });
    } else {
      this.commonProvider.hideLoader();
      this.showLogin = true;
      console.log("show login page in application ");
    }
  }

  loginToApp(userData: any) {
    userData = userData.split(':');
    var unme = userData.splice(0, 1).join("");
    var pwd = userData.join("");
    console.log('decrypted cc ' + unme);
    console.log('decrypted cc ' + pwd);
    if (this.session) {
      this.commonProvider.showLoader('Please wait..');
      this.serviceProvider.weblogin('/login1', unme, btoa(pwd)).subscribe((response: any) => {
        console.log("response ", response);
        if (response._body == "Login success") {
          this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', unme).subscribe((response: any) => {
            response = JSON.parse(response._body);
            console.log("response ", response);
            this.commonProvider.hideLoader();
            //  let str = response.emp_esg;
            let str = response.emp_esgdesc;
            if (str == "L5-Department Head" || str == "L6-Department Head" || str == "L7-Department Head" || str == "L4-Department Head" || str == "HEAD-BUSINESS APPLICATION" || str == "L3-Executive" || str == "L3-Department Head") {
              this.navCtrl.setRoot(HoddashboardPage, { response });
              //this.navCtrl.setRoot(EmpdashboardPage, { response });
            } else if (str == "L5-Managerial" || str == "L6-Managerial" || str == "L7-Managerial" || str == "L4-Managerial") {
              this.navCtrl.setRoot(EmpdashboardPage, { response });
              //  this.navCtrl.setRoot(HoddashboardPage, { response });
            } else {

              this.commonProvider.showToast("User role is not allow to login")
            }
          })
        } else if (response._body == "false") {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast("Please enter correct user credentials")
        } else {
          this.commonProvider.hideLoader();
          response = JSON.parse(response._body);
          this.navCtrl.setRoot(AdminrequestsPage, { response });
        }
      }, (err) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast("Error while login");
      });
    } else {
      this.commonProvider.hideLoader();
    }
  }

  generateSecureKeyAndIV(session: any) {
    var promise = new Promise(function(resolve, reject) {
      var key = CryptoJS.enc.Utf8.parse('M@h1ndra$1234567');
      var iv = CryptoJS.enc.Utf8.parse('0001000100010001');
      var decrypted = CryptoJS.AES.decrypt(session, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      var cipherUsrCredentials = decrypted.toString(CryptoJS.enc.Utf8);
      var strln = cipherUsrCredentials.lastIndexOf('pwd=');
      var pwd = cipherUsrCredentials.substring(strln + 4);
      var unme = cipherUsrCredentials.match(/usr=(\d+)/i)[1];
      var unmpwd = unme + ':' + pwd;
      console.log("usercredetaials from extract ", unmpwd);
      resolve(unmpwd);
    });
    return promise;

    //     var text = this.datas.password;
    // var key = CryptoJS.enc.Utf8.parse('Bar12345Bar12345');
    // var iv = CryptoJS.enc.Utf8.parse('RandomInitVector'); 
    // For encryption
    // var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(text), key,
    //   {
    //     keySize: 128 / 8,
    //     iv: iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7
    //   });
    // console.log('pass', encrypted.toString(), encrypted);
    // this.Password = encrypted.toString();

  }


  loginAction() {
    console.log('this.loginForm ', this.email.value);
    console.log('this.loginForm password ', this.password);

    if (this.password.value == 'driver' || this.password.value == 'Driver') {
      this.mobileNumber = this.email.value;
      this.navCtrl.setRoot(DriverPage, { 'driverNumber': this.mobileNumber });
    } else {
      this.commonProvider.showLoader('Please wait..');
      this.serviceProvider.weblogin('/login1', this.email.value, btoa(this.password.value)).subscribe((response: any) => {
        console.log("response ", response);

        if (response._body == "Login success") {
          this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', this.email.value).subscribe((response: any) => {
            response = JSON.parse(response._body);
            console.log("response ", response);
            this.commonProvider.hideLoader();
            //  let str = response.emp_esg;
            let str = response.emp_esgdesc;
            if (str == "L5-Department Head" || str == "L6-Department Head" || str == "L7-Department Head" || str == "L4-Department Head" || str == "HEAD-BUSINESS APPLICATION" || str == "L3-Executive" || str == "L3-Department Head") {
              this.navCtrl.setRoot(HoddashboardPage, { response });
              //this.navCtrl.setRoot(EmpdashboardPage, { response });
            } else if (str == "L5-Managerial" || str == "L6-Managerial" || str == "L7-Managerial" || str == "L4-Managerial") {
              this.navCtrl.setRoot(EmpdashboardPage, { response });
              //  this.navCtrl.setRoot(HoddashboardPage, { response });
            } else {

              this.commonProvider.showToast("User role is not allow to login")
            }
          })
        } else if (response._body == "false") {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast("Please enter correct user credentials")
        } else {
          this.commonProvider.hideLoader();
          response = JSON.parse(response._body);
          this.navCtrl.setRoot(AdminrequestsPage, { response });
        }
      }, (err) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast("Error while login");
      });
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
    var href = url;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };

}
