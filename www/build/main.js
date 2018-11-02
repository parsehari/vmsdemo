webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/driver/driver.module": [
		157
	],
	"../pages/employee/empdashboard/empdashboard.module": [
		165
	],
	"../pages/hod/hoddashboard/hoddashboard.module": [
		166
	],
	"../pages/hod/requesthistory/requesthistory.module": [
		167
	],
	"../pages/notification-detail/notification-detail.module": [
		168
	],
	"../pages/notification/notification.module": [
		169
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPageModule", function() { return DriverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_qrcode__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DriverPageModule = /** @class */ (function () {
    function DriverPageModule() {
    }
    DriverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver__["a" /* DriverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driver__["a" /* DriverPage */]),
            ],
        })
    ], DriverPageModule);
    return DriverPageModule;
}());

//# sourceMappingURL=driver.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverPage = /** @class */ (function () {
    function DriverPage(navCtrl, navParams, popoverController, commonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.commonProvider = commonProvider;
    }
    DriverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverPage');
    };
    DriverPage.prototype.logout = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to logout?').then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {});
        }, function (err) {
            console.log('user cancelled');
        });
    };
    DriverPage.prototype.showNotifn = function (myEvent) {
        var popover = this.popoverController.create(__WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */]);
        popover.present({
            ev: myEvent
        });
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/driver/driver.html"*/'<ion-header>\n    <ion-navbar color="navColor">\n        <ion-title text-center>Scan Ticket</ion-title>\n        <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n        <span class="icon-bell" style="float:right" (click)="showNotifn($event)"></span>\n        <ion-badge class="cart-badge">5</ion-badge>\n    </ion-navbar>\n    <ion-toolbar color="white">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-7>\n            <span style="font-size: 17px;"> Mr. Abc Xyz </span>\n          </ion-col>\n          <ion-col col-5>\n            <span> EMPL1DRV </span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col offset-7 style="padding-top: 0px;">\n            <span> Scorpio/MH12PB8989 </span>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row text-center class="row-height"  style="margin-top: 10%">\n      <ion-col>\n      <qr-code [value]="\'UXC1234567\'" [size]="200"></qr-code>\n    </ion-col>\n  </ion-row>\n\n<!-- <div>\n<ion-segment [(ngModel)]="requestSegment" color="red">\n    <ion-segment-button value="raisereq">\n      Raise Request\n    </ion-segment-button>\n    <ion-segment-button value="history" (ionSelect)="getEmpHistory()">\n      History\n    </ion-segment-button>\n  </ion-segment>\n</div>\n<div [ngSwitch]="requestSegment">\n\n      <form *ngSwitchCase="\'raisereq\'" [formGroup]="bookingForm">\n        <div *ngIf="!confirmReqst">\n      <ion-item>\n        <ion-label floating>Update Purpose</ion-label>\n        <ion-input type="text" formControlName="updatepurpose"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Travel Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [min]="minDate" [max]="2050"formControlName="traveldate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="traveltime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Source</ion-label>\n        <ion-select formControlName="travelsrc">\n          <div  *ngFor="let locs of locations">\n          <ion-option value="{{locs.loc_name}}">{{locs.loc_name}}</ion-option>\n        </div>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Destination</ion-label>\n        <ion-input type="text" formControlName="traveldest"></ion-input>\n      </ion-item>\n      <ion-row text-center class="row-height"  style="margin-top: 1%">\n        <ion-col>\n            <button ion-button small="true" [disabled]="!bookingForm.valid" color="red" (click)="logForm()">Next\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="confirmReqst" >\n      <ion-card>\n        <ion-card-header style="text-align: center" color="red">\n\n    <span >Confirm Request</span>\n    <span class="icon-pencil" style="float: right;" (click)="editRequest()"></span>\n        </ion-card-header>\n        <ion-card-content style="padding: 13px 6px 5px;">\n            <ion-row>\n              <ion-col>\n                <span class="formtitle">Update Purpose</span>\n              </ion-col>\n              <ion-col>\n                {{bookingForm.value.updatepurpose}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Date</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldate}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Time</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveltime}}\n            </ion-col>\n          </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Source</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.travelsrc}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Destination</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldest}}\n            </ion-col>\n          </ion-row>\n          <ion-row text-center class="row-height"  style="margin-top: 1%">\n            <ion-col>\n\n              <button ion-button small="true" color="red" (click)="cancelReq()">Cancel Request\n            </button>\n            <button ion-button small="true" color="red" (click)="sendRequest()">Send Request\n          </button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </form>\n  <div *ngSwitchCase="\'history\'">\n  <ion-list >\n      <ion-list-header style="background: #9e9e9e1f !important;">\n        <span style="color:#ad081f">Pending for approval</span>\n      </ion-list-header>\n      <ion-item *ngFor= "let hdata of historyData">\n        <span class="icon-directions_car" style="float:left"></span>\n        <h2 style="float:right; color: #a90e1b;">Pending</h2>\n            <h3 style="float:left; padding-left: 12px;font-weight: 500;">{{hdata.travel_date | date}}, {{hdata.travel_time}}</h3><br>\n            <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n            <div>\n              <br>\n            <ul class="bar">\n              <li style="color:green"><h3>{{hdata.source}}</h3></li>\n              <li style="color:#a90e1b"><h3>{{hdata.destination}}</h3></li>\n            </ul>\n            </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/driver/driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationDetailPage = /** @class */ (function () {
    function NotificationDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationDetailPage');
    };
    NotificationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-detail',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/notification-detail/notification-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trip Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item>\n    <span class="icon-directions_car" style="float:left"></span>\n      <h2 style="float:left; padding-left: 12px;font-weight: 500;">Micro . CRN 22312312</h2>\n      </ion-item>\n      <ion-item>\n    <span class="icon-user" style="float:left"></span>\n      <h2 style="float:left; padding-left: 12px;font-weight: 500;">ABCD XYZ/9890123345</h2><br>\n        <h3 style="float:left; padding-left: 29px;color: #424242;">Mon, Sep 03, 06:49AM</h3>\n      </ion-item>\n  <ion-item>\n    <ul class="bar">\n      <li style="color:green"><h3>Reay Road</h3></li>\n      <li style="color:#a90e1b"><h3>CSMT</h3></li>\n    </ul>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/notification-detail/notification-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotificationDetailPage);
    return NotificationDetailPage;
}());

//# sourceMappingURL=notification-detail.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpdashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { FCM } from '@ionic-native/fcm';
/**
 * Generated class for the EmpdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmpdashboardPage = /** @class */ (function () {
    function EmpdashboardPage(navCtrl, navParams, formBuilder, popoverController, serviceProvider, commonProvider
        //  public fcm: FCM
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.confirmReqst = false;
        this.historyData = [];
        this.bookingForm = this.formBuilder.group({
            updatepurpose: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            traveldate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            traveltime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            travelsrc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            traveldest: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.requestSegment = "raisereq";
        this.minDate = new Date().toISOString();
        console.log('this...', this.minDate);
    }
    EmpdashboardPage.prototype.showNotifn = function (myEvent) {
        var popover = this.popoverController.create(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]);
        popover.present({
            ev: myEvent
        });
    };
    EmpdashboardPage.prototype.logForm = function () {
        console.log(this.bookingForm.value);
        this.confirmReqst = true;
    };
    EmpdashboardPage.prototype.editRequest = function () {
        this.confirmReqst = false;
    };
    EmpdashboardPage.prototype.cancelReq = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to cancel request?').then(function (res) {
            _this.bookingForm.reset();
            _this.confirmReqst = false;
        }, function (err) {
            console.log('user cancelled');
        });
    };
    EmpdashboardPage.prototype.getEmpHistory = function () {
        var _this = this;
        console.log("In Emp History");
        //   this.fcm.getToken().then(token => {
        //   console.log("Device token from fcm is ", token)
        // })
        var userDetails = {
            'email': 'abcd@gmail.com',
            'pwd': 'admin123'
        };
        this.commonProvider.showLoader();
        this.serviceProvider.getBookingHistory('/vms/getTripHistory').subscribe(function (response) {
            console.log("Emplyee history ", response);
            if (response.status == 200) {
                _this.historyData = JSON.parse(response._body);
                _this.commonProvider.hideLoader();
            }
        }, function (err) {
            _this.commonProvider.hideLoader();
            _this.commonProvider.showToast(err.message);
        });
    };
    EmpdashboardPage.prototype.sendRequest = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to send request?').then(function (res) {
            _this.commonProvider.showLoader('Sending request...');
            console.log('this.bookingForm.value ', _this.bookingForm.value);
            var reqData = {
                'userID': 'chowza-cont',
                'source': _this.bookingForm.value.travelsrc,
                'destination': _this.bookingForm.value.traveldest,
                'purpose': _this.bookingForm.value.updatepurpose,
                'travel_date': _this.bookingForm.value.traveldate,
                'travel_time': _this.bookingForm.value.traveltime
            };
            _this.serviceProvider.raiseRequest('/vms/insertTrip', reqData).subscribe(function (response) {
                console.log("raise request ", response);
                _this.commonProvider.hideLoader();
                if (response) {
                    _this.confirmReqst = false;
                    _this.commonProvider.showToast('Request sent successfully');
                }
                else {
                    _this.commonProvider.showToast('Request error, Please check with admin');
                }
            }, function (err) {
                _this.commonProvider.hideLoader();
                _this.commonProvider.showToast(err.message);
            });
        }, function (err) {
            console.log('user cancelled');
        });
    };
    EmpdashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.serviceProvider.getAllLocations('/vms/getAllLocations').subscribe(function (response) {
            console.log("Locations ", response);
            console.log("Locations ", JSON.parse(response._body));
            _this.locations = JSON.parse(response._body);
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
        console.log('ionViewDidLoad EmpdashboardPage');
    };
    EmpdashboardPage.prototype.logout = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to logout?').then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], {});
        }, function (err) {
            console.log('user cancelled');
        });
    };
    EmpdashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-empdashboard',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/employee/empdashboard/empdashboard.html"*/'<ion-header>\n    <ion-navbar color="navColor">\n        <ion-title text-center>Dashboard</ion-title>\n        <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n        <span class="icon-bell" style="float:right" (click)="showNotifn($event)"></span>\n        <ion-badge class="cart-badge">5</ion-badge>\n    </ion-navbar>\n    <ion-toolbar color="white">\n      <ion-grid>\n        <!-- <ion-item> -->\n        <ion-row>\n          <ion-col col-7>\n            <span style="font-size: 17px;"> Mr. John Snow</span>\n          </ion-col>\n          <ion-col col-5>\n            <span> EMPID123JOHN </span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col offset-7 style="padding-top: 0px;">\n            <span> BRANCH MANAGER </span>\n          </ion-col>\n        </ion-row>\n      <!-- </ion-item> -->\n    </ion-grid>\n    </ion-toolbar>\n\n</ion-header>\n<ion-content>\n<div>\n<ion-segment [(ngModel)]="requestSegment" color="red">\n    <ion-segment-button value="raisereq">\n      Raise Request\n    </ion-segment-button>\n    <ion-segment-button value="history" (ionSelect)="getEmpHistory()">\n      History\n    </ion-segment-button>\n  </ion-segment>\n</div>\n<div [ngSwitch]="requestSegment">\n\n      <form *ngSwitchCase="\'raisereq\'" [formGroup]="bookingForm">\n        <div *ngIf="!confirmReqst">\n      <ion-item>\n        <ion-label floating>Update Purpose</ion-label>\n        <ion-input type="text" formControlName="updatepurpose"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Travel Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [min]="minDate" [max]="2050"formControlName="traveldate"></ion-datetime>\n\n        <!-- <ion-input type="date" formControlName="traveldate"></ion-input> -->\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="traveltime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Source</ion-label>\n        <ion-select formControlName="travelsrc">\n          <div  *ngFor="let locs of locations">\n          <ion-option value="{{locs.loc_name}}">{{locs.loc_name}}</ion-option>\n        </div>\n        </ion-select>\n        <!-- <ion-label floating>Source</ion-label>\n        <ion-input type="text" formControlName="travelsrc"></ion-input> -->\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Destination</ion-label>\n        <!-- <ion-select formControlName="traveldest">\n          <ion-option value="Reay Road">Reay Road</ion-option>\n          <ion-option value="Cotton Green">Cotton Green</ion-option>\n        </ion-select> -->\n        <ion-input type="text" formControlName="traveldest"></ion-input>\n      </ion-item>\n      <ion-row text-center class="row-height"  style="margin-top: 1%">\n        <ion-col>\n            <button ion-button small="true" [disabled]="!bookingForm.valid" color="red" (click)="logForm()">Next\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="confirmReqst" >\n      <ion-card>\n        <ion-card-header style="text-align: center" color="red">\n\n    <span >Confirm Request</span>\n    <span class="icon-pencil" style="float: right;" (click)="editRequest()"></span>\n        </ion-card-header>\n        <ion-card-content style="padding: 13px 6px 5px;">\n            <ion-row>\n              <ion-col>\n                <span class="formtitle">Update Purpose</span>\n              </ion-col>\n              <ion-col>\n                {{bookingForm.value.updatepurpose}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Date</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldate}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Time</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveltime}}\n            </ion-col>\n          </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Source</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.travelsrc}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Destination</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldest}}\n            </ion-col>\n          </ion-row>\n          <ion-row text-center class="row-height"  style="margin-top: 1%">\n            <ion-col>\n\n              <button ion-button small="true" color="red" (click)="cancelReq()">Cancel Request\n            </button>\n            <button ion-button small="true" color="red" (click)="sendRequest()">Send Request\n          </button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </form>\n  <div *ngSwitchCase="\'history\'">\n  <ion-list >\n      <ion-list-header style="background: #9e9e9e1f !important;">\n        <span style="color:#ad081f">Pending for approval</span>\n      </ion-list-header>\n      <ng-container *ngFor= "let hdata of historyData">\n      <ion-item *ngIf="hdata.travel_date && hdata.travel_date != \'null\' ">\n        <span class="icon-directions_car" style="float:left"></span>\n        <h2 style="float:right; color: #a90e1b;">Pending</h2>\n            <h3 style="float:left; padding-left: 12px;font-weight: 500;">{{hdata.travel_date | date}}, {{hdata.travel_time}}</h3><br>\n            <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n            <div>\n              <br>\n            <ul class="bar">\n              <li style="color:green"><h3>{{hdata.source}}</h3></li>\n              <li style="color:#a90e1b"><h3>{{hdata.destination}}</h3></li>\n            </ul>\n            </div>\n      </ion-item>\n      </ng-container>\n    </ion-list>\n  </div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/employee/empdashboard/empdashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]
            //  public fcm: FCM
        ])
    ], EmpdashboardPage);
    return EmpdashboardPage;
}());

//# sourceMappingURL=empdashboard.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoddashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the HoddashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HoddashboardPage = /** @class */ (function () {
    function HoddashboardPage(navCtrl, navParams, formBuilder, popoverController, serviceProvider, commonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.confirmReqst = false;
        this.historyData = [];
        this.bookingForm = this.formBuilder.group({
            updatepurpose: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            traveldate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            traveltime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            travelsrc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            traveldest: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.requestSegment = "pendingReq";
        this.minDate = new Date().toISOString();
        console.log('this...', this.minDate);
    }
    HoddashboardPage.prototype.showNotifn = function (myEvent) {
        var popover = this.popoverController.create(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HoddashboardPage.prototype.logForm = function () {
        console.log(this.bookingForm.value);
        this.confirmReqst = true;
    };
    HoddashboardPage.prototype.editRequest = function () {
        this.confirmReqst = false;
    };
    HoddashboardPage.prototype.cancelReq = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to cancel request?').then(function (res) {
            _this.bookingForm.reset();
            _this.confirmReqst = false;
        }, function (err) {
            console.log('user cancelled');
        });
    };
    HoddashboardPage.prototype.getEmpHistory = function () {
        var _this = this;
        console.log("In Emp History");
        var userDetails = {
            'email': 'abcd@gmail.com',
            'pwd': 'admin123'
        };
        this.serviceProvider.getBookingHistory('/vms/getTripHistory').subscribe(function (response) {
            console.log("Emplyee history ", response);
            if (response.status == 200) {
                _this.historyData = JSON.parse(response._body);
                console.log("Emplyee history ", _this.historyData);
            }
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
    };
    HoddashboardPage.prototype.sendRequest = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to send request?').then(function (res) {
            _this.commonProvider.showLoader('Sending request...');
            console.log('this.bookingForm.value ', _this.bookingForm.value);
            var reqData = {
                'userID': 'chowza-cont',
                'source': _this.bookingForm.value.travelsrc,
                'destination': _this.bookingForm.value.traveldest,
                'purpose': _this.bookingForm.value.updatepurpose,
                'travel_date': _this.bookingForm.value.traveldate,
                'travel_time': _this.bookingForm.value.traveltime
            };
            _this.serviceProvider.raiseRequest('/vms/insertTrip', reqData).subscribe(function (response) {
                console.log("raise request ", response);
                _this.commonProvider.hideLoader();
                if (response) {
                    _this.confirmReqst = false;
                    _this.commonProvider.showToast('Request sent successfully');
                }
                else {
                    _this.commonProvider.showToast('Request error, Please check with admin');
                }
            }, function (err) {
                _this.commonProvider.showToast(err.message);
            });
        }, function (err) {
            console.log('user cancelled');
        });
    };
    HoddashboardPage.prototype.reqAction = function (status, obj) {
        var _this = this;
        console.log("obj ", obj);
        console.log("status ", status);
        this.commonProvider.Alert.confirm('Are you confirm ?').then(function (res) {
            _this.commonProvider.showLoader('Sending request...');
            var reqData = {
                'userID': 'chowza-cont',
                'source': obj.source,
                'destination': obj.destination,
                'purpose': obj.purpose,
                'travel_date': obj.travel_date,
                'travel_time': obj.travel_time,
                'id': obj.id,
                'status': status,
                'modified_by': 'parha-cont'
            };
            _this.serviceProvider.raiseRequest('/vms/approveRequest', reqData, 'hodAction').subscribe(function (response) {
                console.log("raise request ", response);
                _this.commonProvider.hideLoader();
                if (response) {
                    _this.getApprovalHistory();
                    _this.commonProvider.showToast('Request sent successfully');
                }
                else {
                    _this.commonProvider.showToast('Request error, Please check with admin');
                }
            }, function (err) {
                _this.commonProvider.showToast(err.message);
            });
        }, function (err) {
            console.log('user cancelled');
        });
    };
    HoddashboardPage.prototype.viewReqHistory = function () {
        this.navCtrl.push('RequesthistoryPage', {});
    };
    HoddashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.serviceProvider.getAllLocations('/vms/getAllLocations').subscribe(function (response) {
            console.log("Locations ", response);
            console.log("Locations ", JSON.parse(response._body));
            _this.locations = JSON.parse(response._body);
            _this.getApprovalHistory();
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
        console.log('ionViewDidLoad EmpdashboardPage');
    };
    HoddashboardPage.prototype.getApprovalHistory = function () {
        var _this = this;
        this.commonProvider.showLoader('Loading...');
        this.serviceProvider.getApprovalList('/vms/getApprovalHistory').subscribe(function (response) {
            console.log("Locations ", response);
            console.log("Locations ", JSON.parse(response._body));
            _this.approvalList = JSON.parse(response._body);
            _this.commonProvider.hideLoader();
        }, function (err) {
            _this.commonProvider.hideLoader();
            _this.commonProvider.showToast(err.message);
        });
    };
    HoddashboardPage.prototype.logout = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to logout?').then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], {});
        }, function (err) {
            console.log('user cancelled');
        });
    };
    HoddashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hoddashboard',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/hoddashboard/hoddashboard.html"*/'<!--\n  Generated template for the HoddashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navColor">\n      <ion-title text-center>Dashboard</ion-title>\n      <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n      <span class="icon-bell" style="float:right" (click)="showNotifn($event)"></span>\n      <ion-badge class="cart-badge">5</ion-badge>\n  </ion-navbar>\n  <ion-toolbar color="white">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-7>\n          <span style="font-size: 17px;"> Mr. John Snow</span>\n        </ion-col>\n        <ion-col col-5>\n          <span> HODID123JOHN </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col offset-7 style="padding-top: 0px;">\n          <span> BRANCH MANAGER </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <div>\n  <ion-segment [(ngModel)]="requestSegment" color="red">\n    <ion-segment-button value="pendingReq" (ionSelect)="getApprovalHistory()">\n      Requests\n    </ion-segment-button>\n    <ion-segment-button value="raisereq">\n      Raise Request\n    </ion-segment-button>\n    <ion-segment-button value="history" (ionSelect)="getEmpHistory()">\n      Booking History\n    </ion-segment-button>\n\n  </ion-segment>\n\n</div>\n<div [ngSwitch]="requestSegment">\n\n      <form *ngSwitchCase="\'raisereq\'" [formGroup]="bookingForm">\n        <div *ngIf="!confirmReqst">\n      <ion-item>\n        <ion-label floating>Update Purpose</ion-label>\n        <ion-input type="text" formControlName="updatepurpose"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Travel Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [min]="minDate" [max]="2050"formControlName="traveldate"></ion-datetime>\n\n        <!-- <ion-input type="date" formControlName="traveldate"></ion-input> -->\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="traveltime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Source</ion-label>\n        <ion-select formControlName="travelsrc">\n          <div  *ngFor="let locs of locations">\n          <ion-option value="{{locs.loc_name}}">{{locs.loc_name}}</ion-option>\n        </div>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Destination</ion-label>\n        <!-- <ion-select formControlName="traveldest">\n          <ion-option value="Reay Road">Reay Road</ion-option>\n          <ion-option value="Cotton Green">Cotton Green</ion-option>\n        </ion-select> -->\n        <ion-input type="text" formControlName="traveldest"></ion-input>\n      </ion-item>\n      <ion-row text-center class="row-height"  style="margin-top: 1%">\n        <ion-col>\n            <button ion-button small="true" [disabled]="!bookingForm.valid" color="red" (click)="logForm()">Next\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="confirmReqst" >\n      <ion-card>\n        <ion-card-header style="text-align: center" color="red">\n\n    <span >Confirm Request</span>\n    <span class="icon-pencil" style="float: right;" (click)="editRequest()"></span>\n        </ion-card-header>\n        <ion-card-content style="padding: 13px 6px 5px;">\n            <ion-row>\n              <ion-col>\n                <span class="formtitle">Update Purpose</span>\n              </ion-col>\n              <ion-col>\n                {{bookingForm.value.updatepurpose}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Date</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldate}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Time</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveltime}}\n            </ion-col>\n          </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Source</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.travelsrc}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Destination</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldest}}\n            </ion-col>\n          </ion-row>\n          <ion-row text-center class="row-height"  style="margin-top: 1%">\n            <ion-col>\n\n              <button ion-button small="true" color="red" (click)="cancelReq()">Cancel Request\n            </button>\n            <button ion-button small="true" color="red" (click)="sendRequest()">Send Request\n          </button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </form>\n  <div *ngSwitchCase="\'pendingReq\'">\n  <ion-list>\n      <ion-list-header style="background: #9e9e9e1f !important;">\n        <span style="color:#ad081f">Pending for approval</span>\n        <span style="color:#ad081f; float: right;border-bottom: 1px solid;" (click)="viewReqHistory();">View History</span>\n      </ion-list-header>\n      <ion-item *ngFor="let applh of approvalList">\n        <span class="icon-directions_car" style="float:left"></span>\n            <h3 style="float:left; padding-left: 12px;font-weight: 500;" *ngIf="applh.travel_date!=null">{{applh.travel_date | date}}, {{applh.travel_time}}</h3><br>\n            <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n            <button item-right text-center ion-button outline small="true" solid="true" style="background-color: #398b00;" (click)="reqAction(\'A\', applh);">Accept</button>\n            <button item-right text-center ion-button outline small="true" solid="true" style="background-color: #ca3636;" (click)="reqAction(\'R\', applh);">Decline</button>\n            <div>\n              <br>\n            <ul class="bar">\n              <li style="color:green"><h3>{{applh.source}}</h3></li>\n              <li style="color:#a90e1b"><h3>{{applh.destination}}</h3></li>\n            </ul>\n            </div>\n      </ion-item>\n    </ion-list>\n  </div>\n    <div *ngSwitchCase="\'history\'">\n    <ion-list>\n        <ion-list-header style="background: #9e9e9e1f !important;">\n          <span style="color:#ad081f">Booking History</span>\n        </ion-list-header>\n        <ng-container *ngFor= "let hdata of historyData">\n        <ion-item *ngIf="hdata.travel_date && hdata.travel_date != \'null\' ">\n          <span class="icon-directions_car" style="float:left"></span>\n          <h2 style="float:right; color: #a90e1b;">Pending</h2>\n              <h3 style="float:left; padding-left: 12px;font-weight: 500;">{{hdata.travel_date | date}}, {{hdata.travel_time}}</h3><br>\n              <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n              <div>\n                <br>\n              <ul class="bar">\n                <li style="color:green"><h3>{{hdata.source}}</h3></li>\n                <li style="color:#a90e1b"><h3>{{hdata.destination}}</h3></li>\n              </ul>\n              </div>\n        </ion-item>\n      </ng-container>\n      </ion-list>\n    </div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/hoddashboard/hoddashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]])
    ], HoddashboardPage);
    return HoddashboardPage;
}());

//# sourceMappingURL=hoddashboard.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpdashboardPageModule", function() { return EmpdashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empdashboard__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmpdashboardPageModule = /** @class */ (function () {
    function EmpdashboardPageModule() {
    }
    EmpdashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__empdashboard__["a" /* EmpdashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__empdashboard__["a" /* EmpdashboardPage */]),
            ],
        })
    ], EmpdashboardPageModule);
    return EmpdashboardPageModule;
}());

//# sourceMappingURL=empdashboard.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoddashboardPageModule", function() { return HoddashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoddashboard__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HoddashboardPageModule = /** @class */ (function () {
    function HoddashboardPageModule() {
    }
    HoddashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hoddashboard__["a" /* HoddashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hoddashboard__["a" /* HoddashboardPage */]),
            ],
        })
    ], HoddashboardPageModule);
    return HoddashboardPageModule;
}());

//# sourceMappingURL=hoddashboard.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequesthistoryPageModule", function() { return RequesthistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requesthistory__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequesthistoryPageModule = /** @class */ (function () {
    function RequesthistoryPageModule() {
    }
    RequesthistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__requesthistory__["a" /* RequesthistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__requesthistory__["a" /* RequesthistoryPage */]),
            ],
        })
    ], RequesthistoryPageModule);
    return RequesthistoryPageModule;
}());

//# sourceMappingURL=requesthistory.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDetailPageModule", function() { return NotificationDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_detail__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationDetailPageModule = /** @class */ (function () {
    function NotificationDetailPageModule() {
    }
    NotificationDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification_detail__["a" /* NotificationDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification_detail__["a" /* NotificationDetailPage */]),
            ],
        })
    ], NotificationDetailPageModule);
    return NotificationDetailPageModule;
}());

//# sourceMappingURL=notification-detail.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_service_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_employee_empdashboard_empdashboard_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notification_detail_notification_detail_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hod_hoddashboard_hoddashboard_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_hod_requesthistory_requesthistory_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_driver_driver_module__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HttpClientModule } from '@angular/common/http';


// plugins






//import { QRCodeModule } from 'angular2-qrcode';
//page



//hod Dashboard


//Driver page

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                //  HttpClientModule,
                __WEBPACK_IMPORTED_MODULE_13__pages_employee_empdashboard_empdashboard_module__["EmpdashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification_module__["NotificationPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_notification_detail_notification_detail_module__["NotificationDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_hod_hoddashboard_hoddashboard_module__["HoddashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_hod_requesthistory_requesthistory_module__["RequesthistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__pages_driver_driver_module__["DriverPageModule"],
                //QRCodeModule,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    backButtonText: 'Back',
                    backButtonIcon: ''
                }, {
                    links: [
                        { loadChildren: '../pages/driver/driver.module#DriverPageModule', name: 'DriverPage', segment: 'driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee/empdashboard/empdashboard.module#EmpdashboardPageModule', name: 'EmpdashboardPage', segment: 'empdashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hod/hoddashboard/hoddashboard.module#HoddashboardPageModule', name: 'HoddashboardPage', segment: 'hoddashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hod/requesthistory/requesthistory.module#RequesthistoryPageModule', name: 'RequesthistoryPage', segment: 'requesthistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-detail/notification-detail.module#NotificationDetailPageModule', name: 'NotificationDetailPage', segment: 'notification-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_common_common__["a" /* CommonProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesthistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RequesthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequesthistoryPage = /** @class */ (function () {
    function RequesthistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RequesthistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequesthistoryPage');
    };
    RequesthistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-requesthistory',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/requesthistory/requesthistory.html"*/'<!--\n  Generated template for the RequesthistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Request History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header style="background: #9e9e9e1f !important;">\n      <span style="color:#ad081f">Trip Completed</span>\n    </ion-list-header>\n    <ion-item>\n          <span class="icon-directions_car" style="float:left"></span>\n        <h2 style="float:right; color: #a90e1b;">Accept</h2>\n          <h3 style="float:left; padding-left: 12px;font-weight: 500;">Mon, Sep 03, 06:49AM</h3><br>\n          <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>Reay Road</h3></li>\n            <li style="color:#a90e1b"><h3>CSMT</h3></li>\n          </ul>\n          </div>\n    </ion-item><ion-item>\n          <span class="icon-directions_car" style="float:left"></span>\n          <h2 style="float:right; color: #a90e1b;">Decline</h2>\n          <h3 style="float:left; padding-left: 12px;font-weight: 500;">Mon, Sep 03, 06:49AM</h3><br>\n          <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>Reay Road</h3></li>\n            <li style="color:#a90e1b"><h3>CSMT</h3></li>\n          </ul>\n          </div>\n    </ion-item><ion-item>\n          <span class="icon-directions_car" style="float:left"></span>\n          <h2 style="float:right; color: #a90e1b; ">Accept</h2>\n          <h3 style="float:left; padding-left: 2px;font-weight: 500;">Mon, Sep 03, 06:49AM</h3><br>\n          <h3 style="float:left; padding-left: 20px;color: #424242;">Micro . CRN 22312312</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>Reay Road</h3></li>\n            <li style="color:#a90e1b"><h3>CSMT</h3></li>\n          </ul>\n          </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/requesthistory/requesthistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RequesthistoryPage);
    return RequesthistoryPage;
}());

//# sourceMappingURL=requesthistory.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, fcm) {
        var _this = this;
        this.fcm = fcm;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.fcm.subscribeToTopic('/topics/all');
            _this.fcm.getToken().then(function (token) {
                console.log("Device token from fcm is ", token);
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_empdashboard_empdashboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hod_hoddashboard_hoddashboard__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__driver_driver__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, serviceProvider, commonProvide) {
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.commonProvide = commonProvide;
        this.isLoggedIn = false;
        this.users = [];
    }
    LoginPage.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    LoginPage.prototype.createFormControls = function () {
        this.email = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](this.email, [
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].minLength(4)
        ]);
    };
    LoginPage.prototype.createForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormGroup */]({
            email: this.email,
            password: this.password
        });
    };
    LoginPage.prototype.loginAction = function () {
        console.log('this.loginForm ', this.email.value);
        if (this.email.value == 'driver' || this.email.value == 'Driver') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__driver_driver__["a" /* DriverPage */], {});
        }
        else if (this.email.value) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__hod_hoddashboard_hoddashboard__["a" /* HoddashboardPage */], {});
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__employee_empdashboard_empdashboard__["a" /* EmpdashboardPage */], {});
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/login/login.html"*/'<!-- <ion-header no-border>\n  <ion-navbar>\n    <ion-title text-center></ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="page-content">\n  <ion-grid>\n    <ion-row text-center>\n      <ion-col style="margin-top: 5%;">\n        <img src="assets/imgs/mahindra_logo_white.png" alt="" style="width: 61%;height: 75%;">\n      </ion-col>\n    </ion-row>\n    <ion-row text-center>\n      <ion-col>\n        <div class="reset-title">VEHICLE MANAGEMENT SYSTEM</div>\n      </ion-col>\n    </ion-row>\n\n\n   <form novalidate [formGroup]="loginForm" (ngSubmit)="loginAction()">\n      <ion-row text-center class="row-height" style="margin-top: 1%">\n        <ion-col class="input-height">\n          <input type="email" class="login-input1" formControlName="email"\n                 placeholder="Email"\n                 required\n                 [style.background-color]="(!email.errors) ? \'#C24857\' : \'\'"\n                 [style.color]="(!email.errors) ? \'#f8f8f8\' : \'\'"\n          />\n          <div class="form-control-feedback"\n               *ngIf="email.errors && (email.dirty || email.touched)">\n               <p *ngIf="email.errors.pattern" style="margin: 7px;font-size: 12px">Please enter valid email</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row-height" style="margin-top: 7%">\n        <ion-col class="input-height">\n          <input type="password" class="login-input1" formControlName="password"\n                 [ngClass]="{\'typed\':password.length>1}"\n                 placeholder="Password"\n                 required\n                 [style.background-color]="(!password.errors) ? \'#C24857\' : \'\'"\n                 [style.color]="(!password.errors) ? \'#f8f8f8\' : \'\'"\n          />\n          <div class="form-control-feedback"\n               *ngIf="password.errors && (password.dirty || password.touched)">\n            <!--<p *ngIf="password.errors.required" style="margin: 7px;font-size: 12px">Password is required</p>-->\n            <p *ngIf="password.errors.minlength" style="margin:7px;font-size: 12px">\n              Passsword must be at least 8 characters long.\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row-height">\n        <ion-col>\n          <p class="forgot-password">FORGOT PASSWORD?</p>\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row-height"  style="margin-top: 1%">\n        <ion-col>\n            <button [ngClass]="{\'login-button\':(!email.errors && !password.errors),\'login-button-dynamic\':(email.errors || password.errors)}">LOGIN\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';



/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonProvider = /** @class */ (function () {
    function CommonProvider(loadingCtrl, toast, alertCtrl, network) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.loading = false;
        this.isOnline = true;
        this.Alert = {
            confirm: function (msg, title) {
                return new Promise(function (resolve, reject) {
                    var alert = _this.alertCtrl.create({
                        title: title || 'Confirm',
                        message: msg || 'Do you want continue?',
                        buttons: [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    reject(false);
                                }
                            },
                            {
                                text: 'Ok',
                                handler: function () {
                                    resolve(true);
                                }
                            }
                        ]
                    });
                    alert.present();
                });
            },
            alert: function (msg, title) {
                var alert = _this.alertCtrl.create({
                    title: title || 'Alert',
                    subTitle: msg,
                    buttons: ['Dismiss']
                });
                alert.present();
            }
        };
        console.log('Hello CommonProvider Provider');
        this.network.onConnect().subscribe(function (data) {
            console.log('network info ', data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) {
            console.log('network info ', error.message);
        });
        this.network.onDisconnect().subscribe(function (data) {
            console.log('network info ', data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) {
            console.log('network info ', error.message);
        });
    }
    CommonProvider.prototype.showLoader = function (msg) {
        //this.loading is important to start the loader before outside function make **** loading: any = false; ****
        console.log('this.loading P', this.loading);
        if (!this.loading) {
            this.loader = this.loadingCtrl.create({
                content: msg || ''
            });
            this.loading = true;
            this.loader.present();
        }
        else {
            console.log("trying to calling loader two times");
        }
    };
    CommonProvider.prototype.hideLoader = function () {
        console.log('this.loading D', this.loading);
        if (this.loading) {
            this.loader.dismiss();
            this.loading = false;
        }
        else {
            console.log("trying to dismiss loader two times");
        }
    };
    CommonProvider.prototype.showToast = function (msg, time) {
        this.toaster = this.toast.create({
            message: msg,
            duration: time || 8000,
            position: 'bottom'
        });
        this.toaster.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.toaster.present();
    };
    // checkInternetConnection() {
    //     console.log("checking network...", this.network.type);
    //     this.network.onConnect().subscribe(data => {
    //         console.log(data);
    //         this.displayNetworkUpdate(data.type);
    //     }, error => console.error(error));
    //
    //     this.network.onDisconnect().subscribe(data => {
    //         console.log(data);
    //         this.displayNetworkUpdate(data.type);
    //     }, error => console.error(error));  // }
    CommonProvider.prototype.displayNetworkUpdate = function (connectionState) {
        var networkType = this.network.type;
        if (connectionState == 'online') {
            this.isOnline = true;
        }
        else {
            this.isOnline = false;
        }
        // this.showToast(`You are now ${connectionState} via ${networkType}`);
        this.showToast('You are now ' + connectionState, 2500);
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_detail_notification_detail__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, modal, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
    }
    NotificationPage.prototype.showDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_detail_notification_detail__["a" /* NotificationDetailPage */], {});
    };
    // showDetails() {
    //
    //   const myModalOptions: ModalOptions = {
    //     enableBackdropDismiss: false
    //   };
    //
    //   const myModalData = {
    //     name: 'Paul Halliday',
    //     occupation: 'Developer'
    //   };
    //
    //   const myModal: Modal = this.modal.create('NotificationDetailPage', { data: myModalData }, myModalOptions);
    //
    //   myModal.present();
    //
    //   myModal.onDidDismiss((data) => {
    //     console.log("I have dismissed.");
    //     console.log(data);
    //   });
    //
    //   myModal.onWillDismiss((data) => {
    //     console.log("I'm about to dismiss");
    //     console.log(data);
    //   });
    //
    // }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <ion-list>\n   <ion-item (click)="showDetails()">\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n   <ion-item>\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n   <ion-item>\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n   <ion-item>\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n   <ion-item>\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpClient, HttpHeaders } from '@angular/common/http';




/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http) {
        this.http = http;
        // header for json/content-type
        this.url = 'http://mmkndmobdev.corp.mahindra.com';
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getBookingHistory = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //  headers.append()
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param + "/" + 'chowza-cont', options);
        //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
    };
    ServiceProvider.prototype.getAllLocations = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        //  headers.append()
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param);
        //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
    };
    ServiceProvider.prototype.getApprovalList = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param);
    };
    ServiceProvider.prototype.raiseRequest = function (param, data, datastatus) {
        if (datastatus === void 0) { datastatus = "default"; }
        //  var params = "userID=" + data.userID + "&source=" + data.userID + "&destination=" + data.destination + "&purpose=" + data.purpose +"&travel_date="+ data.travel_date +"&travel_time"+ data.travel_time;
        console.log("datastatus ", datastatus);
        this.raiseReq = new FormData();
        this.raiseReq.append("userID", data.userID);
        this.raiseReq.append("source", data.source);
        this.raiseReq.append("destination", data.destination);
        this.raiseReq.append("purpose", data.purpose);
        this.raiseReq.append("travel_date", data.travel_date);
        this.raiseReq.append("travel_time", data.travel_time);
        if (datastatus == "hodAction") {
            this.raiseReq.append("id", data.id);
            this.raiseReq.append("status", data.status);
            this.raiseReq.append("modified_by", data.modified_by);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("in service ", this.raiseReq);
        console.log("in options ", options);
        return this.http.post(this.url + param, this.raiseReq, options);
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map