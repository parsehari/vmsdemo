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
    public iab: InAppBrowser,
    public plt: Platform
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
    let someParam = params.rawParams;
    this.userid = this.getQueryString('username', someParam);
    console.log("this.userid ", this.userid);
    if (this.userid) {
      this.userid = atob(this.userid);
      this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', this.userid).subscribe((response: any) => {
        response = JSON.parse(response._body);
        console.log("response ", response);
        let str = response.emp_esgdesc;
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

      }, (err) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast(err.message);
      })
    } else {
      this.commonProvider.hideLoader();
    }
  }

  loginAction() {
    console.log('this.loginForm ', this.email.value);
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
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };

  // loginMEFunctionold() {
  //   var loginUrl = 'https://ep.mahindra.com/AuthenticateLDAPUsersWSService/AuthenticateLDAPUsersWS?wsdl';
  //   this.commonProvider.showLoader('Please wait..');
  //   this.Password = btoa(this.datas.password);
  //   this.Username = this.datas.empid;
  //   var sr = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:mah="http://mahindra.com/"> <soapenv:Header/> <soapenv:Body> <mah:authenticateUser> <!--Optional:--> <token>' + this.Username + '</token> <!--Optional:--> <password>' + this.Password + '</password> </mah:authenticateUser> </soapenv:Body>';
  //   // var headers = new Headers();
  //
  //   // headers.append('Content-Type', 'text/xml');
  //
  //   //this.aHttp.setDataSerializer('json');
  //
  //   // this.aHttp.post(loginUrl,{'':sr},{'Content-Type':'text/xml'}).then(data => {
  //
  //   // console.log('succ',data.status);
  //
  //   // console.log(data.data); // data received by server
  //
  //   // console.log(data.headers);
  //
  //   // }).catch(error => {
  //
  //   // console.log('fail',error.status);
  //
  //   // console.log(error.error); // error message as string
  //
  //   // console.log(error.headers);
  //
  //   // });
  //
  //   var xmlhttp = new XMLHttpRequest();
  //
  //   xmlhttp.open('POST', loginUrl, true);
  //
  //   xmlhttp.onreadystatechange = function() {
  //
  //     this.commonProvider.hideLoader();
  //
  //     if (xmlhttp.readyState == 4) {
  //
  //       if (xmlhttp.status == 200) {
  //
  //         var re = this.responseXML;
  //
  //         try {
  //
  //           var Authstatus = re.getElementsByTagName("authStatus")[0].childNodes[0].nodeValue;
  //
  //           if (Authstatus == "Success") {
  //
  //             var displayName = re.getElementsByTagName("displayName")[0].childNodes[0].nodeValue;
  //
  //             _self.datas.username = displayName;
  //
  //             console.log("EmployeeName", displayName);
  //
  //           }
  //           else {
  //
  //             alert("login error");
  //           }
  //
  //         } catch (exp) {
  //           alert("exception");
  //         }
  //
  //       }
  //
  //     }
  //
  //   }
  //
  //   xmlhttp.setRequestHeader('Content-Type', 'text/xml');
  //
  //   xmlhttp.send(sr);
  //
  // }


}
