webpackJsonp([0],{

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/driver/driver.module": [
		158
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
	],
	"../pages/users-dashboard/users-dashboard.module": [
		170
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPageModule", function() { return DriverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_qrcode__ = __webpack_require__(275);
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(31);
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
 * Generated class for the UsersDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsersDashboardPage = /** @class */ (function () {
    function UsersDashboardPage(navCtrl, navParams, commonProvider, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonProvider = commonProvider;
        this.serviceProvider = serviceProvider;
        this.userDetails = [];
        this.driverMobileNumber = '';
        this.securityCheck = '';
        console.log("in user page ", navParams);
        console.log("navParams.get('driverNumber') ", navParams.get('driverNumber'));
        console.log("navParams.get('securitylogin') ", navParams.get('security'));
        if (navParams.get('driverNumber')) {
            this.driverMobileNumber = navParams.get('driverNumber');
        }
        else if (navParams.get('security')) {
            this.securityCheck = navParams.get('security');
        }
        else {
            this.userDetails = navParams.data.response.EmployeeDetail;
        }
    }
    UsersDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersDashboardPage');
    };
    UsersDashboardPage.prototype.showDashboard = function () {
        //this.navCtrl.push('EmpdashboardPage',{ 'EmployeeDetail': this.userDetails });
        this.navCtrl.push('HoddashboardPage', { 'EmployeeDetail': this.userDetails });
    };
    UsersDashboardPage.prototype.getTripDetails = function (status) {
        this.navCtrl.push('DriverPage', { 'pageOpen': status });
    };
    UsersDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-users-dashboard',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/users-dashboard/users-dashboard.html"*/'<ion-header>\n  <ion-navbar>\n      <!-- <ion-title text-center>Dashboard</ion-title> -->\n  </ion-navbar>\n  <ion-toolbar class="">\n      <!-- <img  object-fit: cover src="../assets/imgs/Sp02.jpg" > -->\n  <section text-center class="bgclr bgimg">\n    <span class="icon-noimage-icon"></span>\n\n<div class="header-content">\n        <h1 style="margin-top: 0rem !important;"><b>Welcome,</b> <br>\n        <b>Mr. {{userDetails.emp_f_name}} {{userDetails.emp_l_name}}</b></h1>\n        <span text-center class="userText">\n        <b>  {{userDetails.emp_cost}}</b>\n        </span><br>\n        <span text-center class="userText">\n          <b>  {{userDetails.emp_esg}}</b>\n        </span>\n      </div>\n  </section>\n</ion-toolbar>\n</ion-header>\n<ion-content style="background-color: #7c8185c2;">\n\n<ion-grid *ngIf="!driverMobileNumber && !securityCheck">\n  <ion-row>\n    <ion-col text-center (click)="showDashboard();">\n      <img src="assets/imgs/ani/bell2.png" alt="">\n      <span class="userText">Notifications</span>\n    </ion-col>\n    <ion-col text-center (click)="showDashboard();">\n<img src="assets/imgs/ani/cab1.png" alt="">\n<span class="userText">Cabs History</span>\n    </ion-col>\n</ion-row>\n  <ion-row>\n    <ion-col offset-3 col-6 text-center (click)="showDashboard();">\n<img src="assets/imgs/ani/create1.png" alt="">\n<span class="userText">Create Request</span>\n    </ion-col>\n</ion-row>\n</ion-grid>\n\n<ion-grid *ngIf="driverMobileNumber">\n  <ion-row>\n    <ion-col text-center (click)="getTripDetails(\'tripPage\');">\n<img class="height: 50%"src="assets/imgs/ani/create1.png" alt="">\n    <span class="userText">Trip Details</span>\n    </ion-col>\n    <ion-col text-center (click)="getTripDetails(\'ticketPage\');">\n<img src="assets/imgs/ani/raise1.png" alt="">\n<span class="userText">Scan Code</span>\n    </ion-col>\n</ion-row>\n</ion-grid>\n\n<ion-grid *ngIf="securityCheck">\n  <ion-row>\n    <ion-col offset-3 col-6 text-center (click)="securityScan($event);">\n        <img src="assets/imgs/ani/raise1.png" alt="">\n        <span class="userText">Scan Code</span>\n    </ion-col>\n</ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/users-dashboard/users-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], UsersDashboardPage);
    return UsersDashboardPage;
}());

//# sourceMappingURL=users-dashboard.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpdashboardPageModule", function() { return EmpdashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empdashboard__ = __webpack_require__(277);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoddashboard__ = __webpack_require__(278);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requesthistory__ = __webpack_require__(279);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(52);
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDashboardPageModule", function() { return UsersDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_dashboard__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsersDashboardPageModule = /** @class */ (function () {
    function UsersDashboardPageModule() {
    }
    UsersDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__users_dashboard__["a" /* UsersDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__users_dashboard__["a" /* UsersDashboardPage */]),
            ],
        })
    ], UsersDashboardPageModule);
    return UsersDashboardPageModule;
}());

//# sourceMappingURL=users-dashboard.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_service_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_employee_empdashboard_empdashboard_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notification_notification_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_notification_detail_notification_detail_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_hod_hoddashboard_hoddashboard_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_hod_requesthistory_requesthistory_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_driver_driver_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_users_dashboard_users_dashboard_module__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HttpClientModule } from '@angular/common/http';


// plugins








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
                __WEBPACK_IMPORTED_MODULE_15__pages_employee_empdashboard_empdashboard_module__["EmpdashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_notification_notification_module__["NotificationPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_notification_detail_notification_detail_module__["NotificationDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_hod_hoddashboard_hoddashboard_module__["HoddashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_hod_requesthistory_requesthistory_module__["RequesthistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_users_dashboard_users_dashboard_module__["UsersDashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__pages_driver_driver_module__["DriverPageModule"],
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
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users-dashboard/users-dashboard.module#UsersDashboardPageModule', name: 'UsersDashboardPage', segment: 'users-dashboard', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_storage__["a" /* NativeStorage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(30);
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
    function DriverPage(navCtrl, navParams, popoverController, commonProvider, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.commonProvider = commonProvider;
        this.serviceProvider = serviceProvider;
        this.tripDetail = [];
        this.cabDetail = [];
        this.driverDetail = [];
        console.log('driver status page', this.navParams.get('pageOpen'));
        this.driverPage = this.navParams.get('pageOpen');
    }
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
    DriverPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.commonProvider.showLoader('Getting cab details..');
        this.serviceProvider.getDriverTripDetails('/getTripDetails/driver/9000111111').subscribe(function (resp) {
            _this.tripDetail = JSON.parse(resp._body);
            _this.tripDetail = _this.tripDetail[0];
            _this.cabDetail = _this.tripDetail.cab;
            _this.driverDetail = _this.tripDetail.driver;
            _this.srcSubstr = _this.tripDetail.source.substring(0, 3);
            _this.destSubstr = _this.tripDetail.destination.substring(0, 3);
            _this.commonProvider.hideLoader();
            console.log("trip response ", _this.tripDetail);
            console.log("cabDetail response ", _this.cabDetail);
            console.log("driver Detail response ", _this.driverDetail);
        }, function (err) {
            _this.commonProvider.hideLoader();
            console.log("error ", err);
            _this.commonProvider.showToast(err.message);
        });
    };
    DriverPage.prototype.startTrip = function (ev) {
        var _this = this;
        this.commonProvider.showLoader('Trip starting..');
        var today = new Date();
        var cdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '/' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log("ctime ", cdate);
        this.serviceProvider.tripStart('/updateOngoingTripDetails/driver/', '10fWbCSh4', cdate).subscribe(function (resp) {
            console.log("response ", resp);
            _this.commonProvider.hideLoader();
        }, function (err) {
            console.log("error", err);
            _this.commonProvider.showToast(err.message);
            _this.commonProvider.hideLoader();
        });
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/driver/driver.html"*/'<ion-header>\n    <ion-navbar color="navColor">\n        <ion-title text-center>Trip Details</ion-title>\n        <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n        <!-- <span class="icon-bell" style="float:right" (click)="showNotifn($event)"></span>\n        <ion-badge class="cart-badge">5</ion-badge> -->\n    </ion-navbar>\n     <ion-toolbar style="color: white;">\n      <!-- <section> -->\n        <ion-row>\n          <ion-col text-center>\n             <span>\n               {{srcSubstr}}\n             </span><br>\n            <span  style="font-size: 1.5em;font-weight: bold;">{{tripDetail.source}} </span>\n               <!-- <span>\n                 {{tripDetail.travel_time}}\n               </span> -->\n          </ion-col>\n          <ion-col text-center>\n            <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_date}}</span><br>\n            <span class="icon-automobile" style="font-size: 1.5em"></span><br>\n            <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_time}}</span>\n          </ion-col>\n          <ion-col text-center>\n             <span>\n               {{destSubstr}}\n             </span><br>\n            <span style="font-size: 1.5em;font-weight: bold;"> {{tripDetail.destination}} </span>\n               <!-- <span>\n                 {{tripDetail.travel_time}}\n               </span> -->\n          </ion-col>\n        </ion-row>\n      <!-- </section> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-row text-center class="row-height"  style="margin-top: 10%">\n      <ion-col>\n      <qr-code [value]="tripDetail.barcodeId" [size]="200"></qr-code>\n    </ion-col>\n  </ion-row> -->\n    <!-- <ion-col> -->\n    <div *ngIf="driverPage == \'tripPage\' ">\n      <ion-card class="driverCard">\n        <ion-card-header style="text-align: center" color="red">\n          Passengers Details</ion-card-header>\n          <ion-card-content>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Passanger Name</span>\n            </ion-col>\n            <ion-col>\n              {{tripDetail.emp_userName}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n          <ion-col>\n            <span class="formtitle">Mobile Number</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_phoneNo}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Email Id</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_email}}\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n      </ion-card>\n\n\n      <ion-card class="driverCard">\n        <ion-card-header style="text-align: center" color="red">\n          Cab Details</ion-card-header>\n          <ion-card-content>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Cab Name</span>\n            </ion-col>\n            <ion-col>\n                {{cabDetail.cab_name}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Cab Number</span>\n            </ion-col>\n            <ion-col>\n                {{cabDetail.cab_no}}\n            </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Number of seats</span>\n          </ion-col>\n          <ion-col>\n            {{cabDetail.no_of_seats}}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n  </ion-card>\n</div>\n  <div *ngIf="driverPage == \'ticketPage\' ">\n  <ion-row text-center class="row-height"  style="margin-top: 10%">\n      <ion-col>\n      <qr-code [value]="tripDetail.barcodeId" [size]="200"></qr-code>\n    </ion-col>\n  </ion-row>\n  <ion-row text-center class="row-height"  style="margin-top: 1%">\n    <ion-col>\n      <button ion-button  color="red" (click)="startTrip($event)">Start Trip\n    </button>\n    <button ion-button  color="red" (click)="endTrip()">End Trip\n  </button>\n    </ion-col>\n  </ion-row>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/driver/driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpdashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(83);
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
    function EmpdashboardPage(navCtrl, navParams, formBuilder, popoverController, serviceProvider, commonProvider, nativeStorage
        //  public fcm: FCM
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.nativeStorage = nativeStorage;
        this.confirmReqst = false;
        this.historyData = [];
        this.userDetails = [];
        this.dhDetails = [];
        console.log("params ", navParams);
        this.userDetails = navParams.data.EmployeeDetail;
        console.log("params ", this.userDetails);
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
    EmpdashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.serviceProvider.getDeptHeadUser('http://mivlad1rd2.corp.mahindra.com:8001/sap/bc/zzhr_org_grade?sap-client=220&empid=EMPLOYEE04').subscribe(function (response) {
            console.log('DH response ', response);
            _this.dhDetails = JSON.parse(response._body);
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
        this.serviceProvider.getAllLocations('/getAllLocations').subscribe(function (response) {
            console.log("Locations ", response);
            console.log("Locations ", JSON.parse(response._body));
            _this.locations = JSON.parse(response._body);
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
        console.log('ionViewDidLoad EmpdashboardPage');
    };
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
        this.commonProvider.showLoader();
        this.serviceProvider.getBookingHistory('/getTripHistory', this.userDetails.emp_no).subscribe(function (response) {
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
            var ustr = _this.userDetails.emp_esg.substring(0, 2);
            var reqData;
            reqData = {
                'userID': _this.userDetails.emp_no,
                'source': _this.bookingForm.value.travelsrc,
                'destination': _this.bookingForm.value.traveldest,
                'purpose': _this.bookingForm.value.updatepurpose,
                'travel_date': _this.bookingForm.value.traveldate,
                'travel_time': _this.bookingForm.value.traveltime,
                'emp_email': _this.userDetails.emp_email,
                'emp_UserName': _this.userDetails.emp_f_name + ' ' + _this.userDetails.emp_l_name,
                'emp_phoneNo': _this.userDetails.emp_cell,
                'status': 'Pending'
                //'bh_Id' : '00211779'
                //'bh_Id':this.userDetails.emp_no
            };
            console.log("ustr", reqData);
            //  return;
            if (ustr == "L4" || ustr == "L5" || ustr == "L6" || ustr == "L7" || ustr == "L8" || ustr == "L9") {
                reqData.bh_Id = '00211779';
            }
            else {
                reqData.bh_Id = 'null';
            }
            console.log("reqraise data", reqData);
            _this.serviceProvider.raiseRequest('/insertTrip', reqData).subscribe(function (response) {
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
    EmpdashboardPage.prototype.logout = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to logout?').then(function (res) {
            _this.nativeStorage.remove('userData');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], {});
        }, function (err) {
            console.log('user cancelled');
        });
    };
    EmpdashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-empdashboard',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/employee/empdashboard/empdashboard.html"*/'<ion-header>\n    <ion-navbar color="navColor">\n        <ion-title text-center>Dashboard</ion-title>\n        <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n        <span class="icon-bell" style="float:right" (click)="showNotifn($event)"></span>\n        <ion-badge class="cart-badge">5</ion-badge>\n    </ion-navbar>\n    <ion-toolbar color="white">\n      <ion-grid>\n        <!-- <ion-item> -->\n        <ion-row>\n          <ion-col col-8>\n            <span style="font-size: 17px;">{{userDetails.emp_f_name}}</span>\n          </ion-col>\n          <ion-col col-4>\n            <span> {{userDetails.emp_no}} </span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-8 style="padding-top: 0px;">\n            <span> {{userDetails.emp_pos}} </span>\n          </ion-col>\n        </ion-row>\n      <!-- </ion-item> -->\n    </ion-grid>\n    </ion-toolbar>\n\n</ion-header>\n<ion-content>\n<div>\n<ion-segment [(ngModel)]="requestSegment" color="red">\n    <ion-segment-button value="raisereq">\n      Raise Request\n    </ion-segment-button>\n    <ion-segment-button value="history" (ionSelect)="getEmpHistory()">\n      History\n    </ion-segment-button>\n  </ion-segment>\n</div>\n<div [ngSwitch]="requestSegment">\n\n      <form *ngSwitchCase="\'raisereq\'" [formGroup]="bookingForm">\n        <div *ngIf="!confirmReqst">\n      <ion-item>\n        <ion-label floating>Update Purpose</ion-label>\n        <ion-input type="text" formControlName="updatepurpose"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Travel Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [min]="minDate" [max]="2050"formControlName="traveldate"></ion-datetime>\n\n        <!-- <ion-input type="date" formControlName="traveldate"></ion-input> -->\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="traveltime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Source</ion-label>\n        <ion-select formControlName="travelsrc">\n          <div  *ngFor="let locs of locations">\n          <ion-option value="{{locs.loc_name}}">{{locs.loc_name}}</ion-option>\n        </div>\n        </ion-select>\n        <!-- <ion-label floating>Source</ion-label>\n        <ion-input type="text" formControlName="travelsrc"></ion-input> -->\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Destination</ion-label>\n        <!-- <ion-select formControlName="traveldest">\n          <ion-option value="Reay Road">Reay Road</ion-option>\n          <ion-option value="Cotton Green">Cotton Green</ion-option>\n        </ion-select> -->\n        <ion-input type="text" formControlName="traveldest"></ion-input>\n      </ion-item>\n      <ion-row text-center class="row-height"  style="margin-top: 1%">\n        <ion-col>\n            <button ion-button small="true" [disabled]="!bookingForm.valid" color="red" (click)="logForm()">Next\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="confirmReqst" >\n      <ion-card>\n        <ion-card-header style="text-align: center" color="red">\n\n    <span >Confirm Request</span>\n    <span class="icon-pencil" style="float: right;" (click)="editRequest()"></span>\n        </ion-card-header>\n        <ion-card-content style="padding: 13px 6px 5px;">\n            <ion-row>\n              <ion-col>\n                <span class="formtitle">Update Purpose</span>\n              </ion-col>\n              <ion-col>\n                {{bookingForm.value.updatepurpose}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Date</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldate}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Time</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveltime}}\n            </ion-col>\n          </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Source</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.travelsrc}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Destination</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldest}}\n            </ion-col>\n          </ion-row>\n          <ion-row text-center class="row-height"  style="margin-top: 1%">\n            <ion-col>\n\n              <button ion-button small="true" color="red" (click)="cancelReq()">Cancel Request\n            </button>\n            <button ion-button small="true" color="red" (click)="sendRequest()">Send Request\n          </button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </form>\n  <div *ngSwitchCase="\'history\'">\n  <ion-list >\n      <ion-list-header style="background: #9e9e9e1f !important;">\n        <span style="color:#ad081f">Pending for approval</span>\n      </ion-list-header>\n      <ng-container *ngFor= "let hdata of historyData">\n      <ion-item *ngIf="hdata.travel_date && hdata.travel_date != \'null\' ">\n        <span class="icon-directions_car" style="float:left"></span>\n        <h2 style="float:right; color: #a90e1b;">{{hdata.status}}</h2>\n            <h3 style="float:left; padding-left: 12px;font-weight: 500;">{{hdata.travel_date | date}}, {{hdata.travel_time}}</h3>\n            <!--<br> <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3> -->\n            <div>\n              <br>\n            <ul class="bar">\n              <li style="color:green"><h3>{{hdata.source}}</h3></li>\n              <li style="color:#a90e1b"><h3>{{hdata.destination}}</h3></li>\n            </ul>\n            </div>\n      </ion-item>\n      </ng-container>\n    </ion-list>\n  </div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/employee/empdashboard/empdashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */]
            //  public fcm: FCM
        ])
    ], EmpdashboardPage);
    return EmpdashboardPage;
}());

//# sourceMappingURL=empdashboard.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoddashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(43);
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
    function HoddashboardPage(navCtrl, navParams, formBuilder, popoverController, serviceProvider, commonProvider, alertCtrl, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.confirmReqst = false;
        this.historyData = [];
        this.userDetails = [];
        console.log("params hod", navParams);
        this.userDetails = navParams.data.EmployeeDetail;
        console.log("params ", this.userDetails);
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
        alert("booking history");
        this.serviceProvider.getBookingHistory('/getTripHistory', this.userDetails.emp_no).subscribe(function (response) {
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
                'userID': _this.userDetails.emp_no,
                'source': _this.bookingForm.value.travelsrc,
                'destination': _this.bookingForm.value.traveldest,
                'purpose': _this.bookingForm.value.updatepurpose,
                'travel_date': _this.bookingForm.value.traveldate,
                'travel_time': _this.bookingForm.value.traveltime,
                'emp_email': _this.userDetails.emp_email,
                'emp_UserName': _this.userDetails.emp_f_name + ' ' + _this.userDetails.emp_l_name,
                'emp_phoneNo': _this.userDetails.emp_cell,
                'status': 'Pending'
            };
            _this.serviceProvider.raiseRequest('/insertTrip', reqData).subscribe(function (response) {
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
        if (status == "Rejected") {
            var prompt_1 = this.alertCtrl.create({
                title: 'Are you confirm ?',
                message: "Please enter a comment",
                inputs: [
                    {
                        name: 'comment',
                        placeholder: 'Your reason'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            console.log('Cancel clicked', data);
                        }
                    },
                    {
                        text: 'Send',
                        handler: function (data) {
                            console.log('Saved clicked', data);
                            _this.confirmReqAction(status, obj, data.comment);
                        }
                    }
                ]
            });
            prompt_1.present();
            return;
        }
        else {
            this.commonProvider.Alert.confirm('Are you confirm ?').then(function (res) {
                _this.confirmReqAction(status, obj);
            }, function (err) {
                console.log('user cancelled');
                _this.commonProvider.hideLoader();
                _this.commonProvider.showToast(err.message);
            });
        }
    };
    HoddashboardPage.prototype.confirmReqAction = function (status, obj, comment) {
        var _this = this;
        if (comment === void 0) { comment = "null"; }
        console.log("status ", status);
        console.log("status obj ", obj);
        this.commonProvider.showLoader('Sending request...');
        var reqData = {
            'userID': obj.userID,
            'source': obj.source,
            'destination': obj.destination,
            'purpose': obj.purpose,
            'travel_date': obj.travel_date,
            'travel_time': obj.travel_time,
            'id': obj.id,
            'status': status,
            'modified_by': this.userDetails.emp_no,
            'comment': comment,
            'emp_email': obj.emp_email,
            'emp_UserName': obj.emp_userName,
            'emp_phoneNo': obj.emp_phoneNo,
            'bh_Id': this.userDetails.emp_no
        };
        console.log("raise request ", reqData);
        //return;
        this.serviceProvider.raiseRequest('/approveRequest/hod', reqData, 'hodAction').subscribe(function (response) {
            _this.commonProvider.hideLoader();
            if (response) {
                _this.getApprovalHistory();
                _this.commonProvider.showToast('Request sent successfully');
            }
            else {
                _this.commonProvider.showToast('Request error, Please check with admin');
            }
        }, function (err) {
            console.log("error ", err);
            _this.commonProvider.hideLoader();
            _this.commonProvider.showToast(err.message);
        });
    };
    HoddashboardPage.prototype.viewReqHistory = function () {
        this.navCtrl.push('RequesthistoryPage', { EmployeeDetail: this.userDetails });
    };
    HoddashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.commonProvider.showLoader();
        this.serviceProvider.getAllLocations('/getAllLocations').subscribe(function (response) {
            console.log("Locations ", JSON.parse(response._body));
            _this.locations = JSON.parse(response._body);
            _this.commonProvider.hideLoader();
            _this.getApprovalHistory();
        }, function (err) {
            _this.commonProvider.hideLoader();
            _this.commonProvider.showToast(err.message);
        });
        console.log('ionViewDidLoad EmpdashboardPage');
    };
    HoddashboardPage.prototype.getApprovalHistory = function () {
        var _this = this;
        this.commonProvider.showLoader('');
        this.serviceProvider.getApprovalList('/getApprovalList/hod', this.userDetails.emp_no).subscribe(function (response) {
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
    HoddashboardPage.prototype.segmentChanged = function (event) {
        var _this = this;
        console.log("Segment clicked! " + event.value, this, event);
        this.zone.run(function () {
            _this.requestSegment = event.value;
        });
    };
    HoddashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hoddashboard',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/hoddashboard/hoddashboard.html"*/'<!--\n  Generated template for the HoddashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navColor">\n      <ion-title text-center>Dashboard</ion-title>\n      <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n      <span class="icon-bell" style="float:right" (click)="showNotifn($event)"></span>\n      <ion-badge class="cart-badge">5</ion-badge>\n  </ion-navbar>\n  <ion-toolbar color="white">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8>\n          <span style="font-size: 17px;">{{userDetails.emp_f_name}}</span>\n        </ion-col>\n        <ion-col col-4>\n          <span> {{userDetails.emp_no}} </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8 style="padding-top: 0px;">\n          <span> {{userDetails.emp_pos}} </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <div>\n  <ion-segment [(ngModel)]="requestSegment" color="red" (ionSelect)="segmentChanged($event)">\n    <ion-segment-button value="pendingReq" (ionSelect)="getApprovalHistory()">\n      Requests\n    </ion-segment-button>\n    <ion-segment-button value="raisereq">\n      Raise Request\n    </ion-segment-button>\n    <ion-segment-button value="history" (ionSelect)="getEmpHistory()">\n      Booking History\n    </ion-segment-button>\n\n  </ion-segment>\n\n</div>\n<div [ngSwitch]="requestSegment">\n\n      <form *ngSwitchCase="\'raisereq\'" [formGroup]="bookingForm">\n        <div *ngIf="!confirmReqst">\n      <ion-item>\n        <ion-label floating>Update Purpose</ion-label>\n        <ion-input type="text" formControlName="updatepurpose"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Travel Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [min]="minDate" [max]="2050"formControlName="traveldate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="traveltime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Source</ion-label>\n        <ion-select formControlName="travelsrc">\n          <div  *ngFor="let locs of locations">\n          <ion-option value="{{locs.loc_name}}">{{locs.loc_name}}</ion-option>\n        </div>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Destination</ion-label>\n        <ion-input type="text" formControlName="traveldest"></ion-input>\n      </ion-item>\n      <ion-row text-center class="row-height"  style="margin-top: 1%">\n        <ion-col>\n            <button ion-button small="true" [disabled]="!bookingForm.valid" color="red" (click)="logForm()">Next\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="confirmReqst" >\n      <ion-card>\n        <ion-card-header style="text-align: center" color="red">\n\n    <span >Confirm Request</span>\n    <span class="icon-pencil" style="float: right;" (click)="editRequest()"></span>\n        </ion-card-header>\n        <ion-card-content style="padding: 13px 6px 5px;">\n            <ion-row>\n              <ion-col>\n                <span class="formtitle">Update Purpose</span>\n              </ion-col>\n              <ion-col>\n                {{bookingForm.value.updatepurpose}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Date</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldate}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Travel Time</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveltime}}\n            </ion-col>\n          </ion-row>\n            <ion-row>\n            <ion-col>\n              <span class="formtitle">Source</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.travelsrc}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Destination</span>\n            </ion-col>\n            <ion-col>\n              {{bookingForm.value.traveldest}}\n            </ion-col>\n          </ion-row>\n          <ion-row text-center class="row-height"  style="margin-top: 1%">\n            <ion-col>\n\n              <button ion-button small="true" color="red" (click)="cancelReq()">Cancel Request\n            </button>\n            <button ion-button small="true" color="red" (click)="sendRequest()">Send Request\n          </button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </form>\n  <div *ngSwitchCase="\'pendingReq\'">\n  <ion-list>\n      <ion-list-header style="background: #9e9e9e1f !important;">\n        <span style="color:#ad081f">Pending for approval</span>\n        <span style="color:#ad081f; float: right;border-bottom: 1px solid;" (click)="viewReqHistory();">View History</span>\n      </ion-list-header>\n      <ion-item *ngFor="let applh of approvalList">\n        <span class="icon-directions_car" style="float:left"></span>\n        <h3 style="float:left; padding-left: 12px;font-weight: 500;">{{applh.purpose}}</h3><br>\n            <h3  style="float:left; padding-left: 29px;color: #424242;" *ngIf="applh.travel_date!=null">{{applh.travel_date | date}}, {{applh.travel_time}}</h3>\n             <button item-right ion-button icon-only (click)="reqAction(\'Inprocess\', applh);" style="background-color: #398b00;" (click)="reqAction(\'Inprocess\', applh);"><span class="icon-cross" style="float:right;font-size: 25px;"></span></button>\n            <button item-right ion-button icon-only (click)="reqAction(\'Rejected\', applh);" style="background-color: #ca3636;" (click)="reqAction(\'Rejected\', applh);"><span class="icon-checkmark2" style="float:right;font-size: 25px;"></span></button>\n            <!-- <button item-right text-center ion-button outline small="true" solid="true" style="background-color: #398b00;" (click)="reqAction(\'Inprocess\', applh);">Accept</button>\n            <button item-right text-center ion-button outline small="true" solid="true" style="background-color: #ca3636;" (click)="reqAction(\'Rejected\', applh);">Decline</button> -->\n            <div>\n              <br>\n            <ul class="bar">\n              <li style="color:green"><h3>{{applh.source}}</h3></li>\n              <li style="color:#a90e1b"><h3>{{applh.destination}}</h3></li>\n            </ul>\n            </div>\n      </ion-item>\n    </ion-list>\n  </div>\n    <div *ngSwitchCase="\'history\'">\n    <ion-list>\n        <ion-list-header style="background: #9e9e9e1f !important;">\n          <span style="color:#ad081f">Booking History</span>\n        </ion-list-header>\n        <ng-container *ngFor= "let hdata of historyData">\n        <ion-item *ngIf="hdata.travel_date && hdata.travel_date != \'null\' ">\n          <span class="icon-directions_car" style="float:left"></span>\n          <h2 style="float:right; color: #a90e1b;">{{hdata.status}}</h2>\n          <h3 style="float:left; padding-left: 12px;font-weight: 500;">{{hdata.purpose}}</h3><br>\n              <h3 style="float:left; padding-left: 29px;color: #424242;">{{hdata.travel_date | date}}, {{hdata.travel_time}}</h3>\n              <div>\n                <br>\n              <ul class="bar">\n                <li style="color:green"><h3>{{hdata.source}}</h3></li>\n                <li style="color:#a90e1b"><h3>{{hdata.destination}}</h3></li>\n              </ul>\n              </div>\n        </ion-item>\n      </ng-container>\n      </ion-list>\n    </div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/hoddashboard/hoddashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HoddashboardPage);
    return HoddashboardPage;
}());

//# sourceMappingURL=hoddashboard.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesthistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(31);
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
    function RequesthistoryPage(navCtrl, navParams, serviceProvider, commonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.userDetails = [];
        this.tripHistory = [];
        this.userDetails = navParams.get('EmployeeDetail');
        console.log("nav params ", this.userDetails);
    }
    RequesthistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.commonProvider.showLoader('');
        this.serviceProvider.getAllTripHistory('/getAllTripHistory', this.userDetails.emp_no).subscribe(function (response) {
            console.log("getAllTripHistory ", response);
            console.log("getAllTripHistory ", JSON.parse(response._body));
            _this.tripHistory = JSON.parse(response._body);
            // this.approvalList = JSON.parse(response._body);
            _this.commonProvider.hideLoader();
        }, function (err) {
            _this.commonProvider.hideLoader();
            _this.commonProvider.showToast(err.message);
        });
    };
    RequesthistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-requesthistory',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/requesthistory/requesthistory.html"*/'<!--\n  Generated template for the RequesthistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Request History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header style="background: #9e9e9e1f !important;">\n      <span style="color:#ad081f">Trip Completed</span>\n    </ion-list-header>\n    <ng-container *ngFor= "let hdata of tripHistory">\n    <ion-item *ngIf="hdata.travel_date && hdata.travel_date != \'null\' ">\n      <span class="icon-directions_car" style="float:left"></span>\n      <h2 style="float:right; color: #a90e1b;">{{hdata.status}}</h2>\n      <h3 style="float:left; padding-left: 12px;font-weight: 500;">{{hdata.purpose}}</h3><br>\n          <h3 style="float:left; padding-left: 29px;color: #424242;">{{hdata.travel_date | date}}, {{hdata.travel_time}}</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>{{hdata.source}}</h3></li>\n            <li style="color:#a90e1b"><h3>{{hdata.destination}}</h3></li>\n          </ul>\n          </div>\n    </ion-item>\n  </ng-container>\n    <!-- <ion-item>\n          <span class="icon-directions_car" style="float:left"></span>\n        <h2 style="float:right; color: #a90e1b;">Accept</h2>\n          <h3 style="float:left; padding-left: 12px;font-weight: 500;">Mon, Sep 03, 06:49AM</h3><br>\n          <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>Reay Road</h3></li>\n            <li style="color:#a90e1b"><h3>CSMT</h3></li>\n          </ul>\n          </div>\n    </ion-item><ion-item>\n          <span class="icon-directions_car" style="float:left"></span>\n          <h2 style="float:right; color: #a90e1b;">Decline</h2>\n          <h3 style="float:left; padding-left: 12px;font-weight: 500;">Mon, Sep 03, 06:49AM</h3><br>\n          <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>Reay Road</h3></li>\n            <li style="color:#a90e1b"><h3>CSMT</h3></li>\n          </ul>\n          </div>\n    </ion-item><ion-item>\n          <span class="icon-directions_car" style="float:left"></span>\n          <h2 style="float:right; color: #a90e1b; ">Accept</h2>\n          <h3 style="float:left; padding-left: 2px;font-weight: 500;">Mon, Sep 03, 06:49AM</h3><br>\n          <h3 style="float:left; padding-left: 20px;color: #424242;">Micro . CRN 22312312</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>Reay Road</h3></li>\n            <li style="color:#a90e1b"><h3>CSMT</h3></li>\n          </ul>\n          </div>\n    </ion-item>-->\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/requesthistory/requesthistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */]])
    ], RequesthistoryPage);
    return RequesthistoryPage;
}());

//# sourceMappingURL=requesthistory.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(43);
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
            _this.fcm.subscribeToTopic('/topics/all');
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(265);
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
        //  private url = 'http://mmkndmobdev.corp.mahindra.com';
        //  private url = 'http://192.168.42.115';
        this.url = 'http://10.174.50.137:8080/vms';
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getBookingHistory = function (param, usrID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //  headers.append()
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param + "/" + usrID, options);
        //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
    };
    ServiceProvider.prototype.getAllTripHistory = function (param, usrID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //  headers.append()
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param + "/" + usrID, options);
        //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
    };
    ServiceProvider.prototype.getAllLocations = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        //  headers.append()
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param);
        //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
    };
    ServiceProvider.prototype.getApprovalList = function (param, uid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param + '/' + uid);
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
        this.raiseReq.append("status", data.status);
        this.raiseReq.append("bh_Id", data.bh_Id);
        this.raiseReq.append("emp_email", data.emp_email);
        this.raiseReq.append("emp_userName", data.emp_UserName);
        this.raiseReq.append("emp_phoneNo", data.emp_phoneNo);
        if (datastatus == "hodAction") {
            this.raiseReq.append("id", data.id);
            this.raiseReq.append("modifiedby", data.modified_by);
            this.raiseReq.append("comment", data.comment);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("in service ", this.raiseReq);
        console.log("in options ", options);
        return this.http.post(this.url + param, this.raiseReq, options);
    };
    ServiceProvider.prototype.getUsrRoleDetails = function (url, sapClinet, ivPernr, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        //  headers.append()
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(url + "?sap-client=" + sapClinet + "&IV_PERNR=" + ivPernr + "&TYPE=" + type, options);
    };
    ServiceProvider.prototype.getDeptHeadUser = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(url);
    };
    ServiceProvider.prototype.getDriverTripDetails = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + params);
    };
    ServiceProvider.prototype.tripStart = function (params, barcodeId, startTrip) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.tripTime = new FormData();
        this.tripTime.append("barcodeId", barcodeId);
        this.tripTime.append("startTrip", startTrip);
        return this.http.post(this.url + params, this.tripTime, options);
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

// https://appstore.mahindra.com/saml <https://appstore.mahindra.com/saml>
//# sourceMappingURL=service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_dashboard_users_dashboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(83);
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
    function LoginPage(navCtrl, serviceProvider, commonProvider, iab, nativeStorage) {
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.iab = iab;
        this.nativeStorage = nativeStorage;
        this.isLoggedIn = false;
        this.users = [];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        //     this.commonProvider.Alert.confirm('Sure you want to cancel request?').then((res) => {
        //     this.bookingForm.reset();
        //     this.confirmReqst = false;
        // }, err => {
        //     console.log('user cancelled');
        // })
    };
    LoginPage.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    LoginPage.prototype.createFormControls = function () {
        this.email = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](this.email, [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(4)
        ]);
    };
    LoginPage.prototype.createForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            email: this.email,
            password: this.password
        });
    };
    LoginPage.prototype.loginAction = function () {
        var _this = this;
        console.log('this.loginForm ', this.email.value);
        if (this.email.value) {
            if (isNaN(this.email.value)) {
                if (this.email.value == "security") {
                    this.securitylogin = this.email.value;
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__users_dashboard_users_dashboard__["a" /* UsersDashboardPage */], { 'security': this.securitylogin });
                }
                else {
                    this.commonProvider.showToast("Enter correct credentials ");
                }
            }
            else {
                this.mobileNumber = this.email.value;
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__users_dashboard_users_dashboard__["a" /* UsersDashboardPage */], { 'driverNumber': this.mobileNumber });
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
            this.serviceProvider.getUsrRoleDetails('https://emss.mahindra.com/sap/bc/zsi_user_detail', '500', 211779, 'DTA').subscribe(function (response) {
                response = JSON.parse(response._body);
                console.log("response ", response);
                //  browser.close();
                var str = response.EmployeeDetail.emp_esg.substring(0, 2);
                if (str == "L4" || str == "L5" || str == "L6" || str == "L7" || str == "L8" || str == "L9") {
                    //   browser.close();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__users_dashboard_users_dashboard__["a" /* UsersDashboardPage */], { response: response });
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__users_dashboard_users_dashboard__["a" /* UsersDashboardPage */], { response: response });
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
            });
        }
    };
    LoginPage.prototype.getParameterByName = function (name, url) {
        if (!url)
            url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/login/login.html"*/'<!-- <ion-header no-border>\n  <ion-navbar>\n    <ion-title text-center></ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="page-content">\n  <ion-grid>\n    <ion-row text-center>\n      <ion-col style="margin-top: 5%;">\n        <img src="assets/imgs/mahindra_logo_white.png" alt="" style="width: 61%;height: 75%;">\n      </ion-col>\n    </ion-row>\n    <ion-row text-center>\n      <ion-col>\n        <div class="reset-title">VEHICLE MANAGEMENT SYSTEM</div>\n      </ion-col>\n    </ion-row>\n\n\n   <form novalidate [formGroup]="loginForm" (ngSubmit)="loginAction()">\n      <ion-row text-center class="row-height" style="margin-top: 1%">\n        <ion-col class="input-height">\n          <input type="text" class="login-input1" formControlName="email"\n                 placeholder="Mobile number"\n                 required\n                 [style.background-color]="(!email.errors) ? \'#C24857\' : \'\'"\n                 [style.color]="(!email.errors) ? \'#f8f8f8\' : \'\'"\n          />\n          <div class="form-control-feedback">\n               <p style="margin: 7px;font-family: font-medium; color: white; ">If your Driver login, please enter your mobile number here, otherwise click login button</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row text-center class="row-height" style="margin-top: 1%">\n        <ion-col class="input-height">\n          <input type="email" class="login-input1" formControlName="email"\n                 placeholder="Email"\n                 required\n                 [style.background-color]="(!email.errors) ? \'#C24857\' : \'\'"\n                 [style.color]="(!email.errors) ? \'#f8f8f8\' : \'\'"\n          />\n          <div class="form-control-feedback"\n               *ngIf="email.errors && (email.dirty || email.touched)">\n               <p *ngIf="email.errors.pattern" style="margin: 7px;font-size: 12px">Please enter valid email</p>\n          </div>\n        </ion-col>\n      </ion-row> -->\n      <!-- <ion-row text-center class="row-height" style="margin-top: 7%">\n        <ion-col class="input-height">\n          <input type="password" class="login-input1" formControlName="password"\n                 [ngClass]="{\'typed\':password.length>1}"\n                 placeholder="Password"\n                 required\n                 [style.background-color]="(!password.errors) ? \'#C24857\' : \'\'"\n                 [style.color]="(!password.errors) ? \'#f8f8f8\' : \'\'"\n          />\n          <div class="form-control-feedback"\n               *ngIf="password.errors && (password.dirty || password.touched)">\n            <p *ngIf="password.errors.minlength" style="margin:7px;font-size: 12px">\n              Passsword must be at least 8 characters long.\n            </p>\n          </div>\n        </ion-col>\n      </ion-row> -->\n      <!-- <ion-row text-center class="row-height">\n        <ion-col>\n          <p class="forgot-password">FORGOT PASSWORD?</p>\n        </ion-col>\n      </ion-row> -->\n      <ion-row text-center  style="margin-top: 18%">\n        <ion-col>\n            <button [ngClass]="{\'login-button\':(!email.errors),\'login-button-dynamic\':(email.errors)}">LOGIN\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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

/***/ })

},[213]);
//# sourceMappingURL=main.js.map