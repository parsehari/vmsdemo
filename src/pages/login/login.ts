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
    this.email = new FormControl('', [
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
    let someParam = params.rawParams;
    this.session = this.getQueryString('session', someParam);
    this.commonProvider.showLoader('Please wait..');
    if (this.session) {
      this.showLogin = false;
      var userData = this.generateSecureKeyAndIV(this.session).then((result: any) => {
        this.commonProvider.hideLoader();
        this.loginToApp(result)
      });
    } else {
      this.commonProvider.hideLoader();
      this.showLogin = true;
    }
  }

  loginToApp(userData: any) {
    userData = userData.split(':');
    var unme = userData.splice(0, 1).join("");
    var pwd = userData.join("");
    if (this.session) {
      if (this.commonProvider.vapt) {
        this.commonProvider.showLoader('Please wait..');
        let reqParams = { "employeeId": this.email.value, "password": btoa(this.password.value) };
        this.serviceProvider.post('/login1', reqParams).then((response: any) => {
          if (response.status == 200 && response.data != "false") {
            if (response.data == "Login success") {
              this.serviceProvider.get('/getEmpDetailService/' + this.email.value).then((response: any) => {
                this.commonProvider.hideLoader();
                let str = response.emp_esgdesc;
                if (str == "L5-Department Head" || str == "L6-Department Head" || str == "L7-Department Head" || str == "L4-Department Head" || str == "HEAD-BUSINESS APPLICATION" || str == "L3-Executive" || str == "L3-Department Head") {
                  this.navCtrl.setRoot(HoddashboardPage, { response });
                } else if (str == "L5-Managerial" || str == "L6-Managerial" || str == "L7-Managerial" || str == "L4-Managerial") {
                  this.navCtrl.setRoot(EmpdashboardPage, { response });
                } else {
                  this.commonProvider.showToast(response.error);
                }
              })
            } else if (response.data == "Invalid Credentials") {
              this.commonProvider.hideLoader();
              this.commonProvider.showToast(response.error);
            } else {
              this.commonProvider.hideLoader();
              response = JSON.parse(response.data);
              this.navCtrl.setRoot(AdminrequestsPage, { response });
            }
          } else {
            this.commonProvider.hideLoader();
            this.commonProvider.showToast(response.error);
          }
        }, (err) => {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast("Please contact admin");
        });
      } else {
        this.commonProvider.showLoader('Please wait..');
        this.serviceProvider.weblogin('/login1', unme, btoa(pwd)).subscribe((response: any) => {
          if (response._body == "Login success") {
            this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', unme).subscribe((response: any) => {
              response = JSON.parse(response._body);
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
            this.commonProvider.showToast(response.error);
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
    } else {
      this.commonProvider.hideLoader();
    }
  }

  generateSecureKeyAndIV(session: any) {
    var promise = new Promise(function (resolve, reject) {
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
    // this.Password = encrypted.toString();
  }


  loginAction() {
    if (this.password.value == 'driver' || this.password.value == 'Driver') {
      this.mobileNumber = this.email.value;
      this.navCtrl.setRoot(DriverPage, { 'driverNumber': this.mobileNumber });
    } else {
      if (this.commonProvider.vapt) {

        this.commonProvider.showLoader('Please wait..');
        let reqParams = { "employeeId": this.email.value, "password": btoa(this.password.value) };
        this.serviceProvider.post('/login1', reqParams).then((response: any) => {

          if (response.access_token) {
            this.commonProvider.accessToken = response.access_token;
            if (response.admin) {
              this.commonProvider.hideLoader();
              response = JSON.parse(response.admin);
              this.navCtrl.setRoot(AdminrequestsPage, { response });
            } else {
              this.serviceProvider.post('/getEmpDetailService', { "pernr": this.email.value, "bhId": "" }).then((response: any) => {
                this.commonProvider.hideLoader();
                let str = response.emp_esgdesc;
                if (str == "L5-Department Head" || str == "L6-Department Head" || str == "L7-Department Head" || str == "L4-Department Head" || str == "HEAD-BUSINESS APPLICATION" || str == "L3-Executive" || str == "L3-Department Head") {
                  this.navCtrl.setRoot(HoddashboardPage, { response });
                } else if (str == "L5-Managerial" || str == "L6-Managerial" || str == "L7-Managerial" || str == "L4-Managerial") {
                  this.navCtrl.setRoot(EmpdashboardPage, { response });
                } else {
                  this.commonProvider.showToast(response.error);
                }
              })
            }
          } else if (response.data == "false" || response.msg == "Invalid Credentials") {
            this.commonProvider.hideLoader();
            this.commonProvider.showToast(response.msg);
          } else {
            this.commonProvider.hideLoader();
            this.commonProvider.showToast(response.msg);
            // response = response;
            // this.navCtrl.setRoot(AdminrequestsPage, { response });
          }
          // } else {
          //   this.commonProvider.hideLoader();
          //   this.commonProvider.showToast(response.error);
          // }
        }, (err) => {
          this.commonProvider.hideLoader();
          this.commonProvider.showToast("Error while login");
        });
      } else {
        this.commonProvider.showLoader('Please wait..');
        this.serviceProvider.weblogin('/login1', this.email.value, btoa(this.password.value)).subscribe((response: any) => {
          if (response._body == "Login success") {
            this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', this.email.value).subscribe((response: any) => {
              this.commonProvider.hideLoader();
              if (response._body) {
                response = JSON.parse(response._body);
                let str = response.emp_esgdesc;
                if (str == "L5-Department Head" || str == "L6-Department Head" || str == "L7-Department Head" || str == "L4-Department Head" || str == "HEAD-BUSINESS APPLICATION" || str == "L3-Executive" || str == "L3-Department Head") {
                  this.navCtrl.setRoot(HoddashboardPage, { response });
                } else if (str == "L5-Managerial" || str == "L6-Managerial" || str == "L7-Managerial" || str == "L4-Managerial") {
                  this.navCtrl.setRoot(EmpdashboardPage, { response });
                } else {
                  this.commonProvider.showToast("User role is not allow to login")
                }
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

  getQueryString(field: any, url: any) {
    var href = url;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };

}
