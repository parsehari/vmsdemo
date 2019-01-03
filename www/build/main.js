webpackJsonp([2],{

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-aprvl/admin-aprvl.module": [
		162
	],
	"../pages/adminrequests/adminrequests.module": [
		180
	],
	"../pages/driver/driver.module": [
		166
	],
	"../pages/employee/empdashboard/empdashboard.module": [
		185
	],
	"../pages/hod/hoddashboard/hoddashboard.module": [
		184
	],
	"../pages/hod/requesthistory/requesthistory.module": [
		174
	],
	"../pages/modal-detail/modal-detail.module": [
		310,
		1
	],
	"../pages/notification-detail/notification-detail.module": [
		175
	],
	"../pages/notification/notification.module": [
		176
	],
	"../pages/requestdetails/requestdetails.module": [
		311,
		0
	],
	"../pages/scan/scan.module": [
		177
	],
	"../pages/users-dashboard/users-dashboard.module": [
		179
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAprvlPageModule", function() { return AdminAprvlPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_aprvl__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminAprvlPageModule = /** @class */ (function () {
    function AdminAprvlPageModule() {
    }
    AdminAprvlPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_aprvl__["a" /* AdminAprvlPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_aprvl__["a" /* AdminAprvlPage */]),
            ],
        })
    ], AdminAprvlPageModule);
    return AdminAprvlPageModule;
}());

//# sourceMappingURL=admin-aprvl.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAprvlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(20);
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
 * Generated class for the AdminAprvlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminAprvlPage = /** @class */ (function () {
    function AdminAprvlPage(navCtrl, navParams, serviceProvider, commonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.cabList = [];
        this.driverList = [];
        this.vendorList = [];
        console.log("navparams ", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]);
        console.log("location ", this.navParams.get('adminLocation'));
        this.adminLocationID = this.navParams.get('adminLocation');
        //  this.getCabDriverDetails();
    }
    AdminAprvlPage.prototype.ionViewWillLoad = function () {
        this.getAllDetails();
    };
    AdminAprvlPage.prototype.getAllDetails = function () {
        var _this = this;
        this.tripDetail = this.navParams.get('viewData');
        console.log('ionViewDidLoad ModalDetailPage', this.tripDetail);
        this.srcSubstr = this.tripDetail.source.substring(0, 3);
        this.destSubstr = this.tripDetail.destination.substring(0, 3);
        this.serviceProvider.getReqDetails('/getAllAvailableResources/adminMobile', this.adminLocationID).subscribe(function (response) {
            if (response.status == 200) {
                _this.tripData = JSON.parse(response._body);
                _this.cabList = _this.tripData.cabList;
                _this.vendorList = _this.tripData.vendorList;
                _this.driverList = _this.tripData.driverList;
                console.log("cabs details ", _this.tripData);
                console.log("cabs details ", _this.cabList);
            }
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
    };
    AdminAprvlPage.prototype.assignRequest = function () {
        var _this = this;
        this.commonProvider.Alert.confirm().then(function (res) {
            _this.cabs ? 'nothing' : _this.cabs = "";
            _this.driver ? 'nothing' : _this.driver = "";
            _this.vendor ? 'nothing' : _this.vendor = "";
            _this.commonProvider.showLoader('Approving trip...');
            _this.serviceProvider.assignReq('/approvependingrequestadmin', _this.tripDetail.id, _this.cabs, _this.driver, _this.vendor, _this.admincomment).subscribe(function (response) {
                console.log("response ", response);
                if (response) {
                    _this.commonProvider.hideLoader();
                    _this.commonProvider.showToast("Request assigned successfully");
                    _this.navCtrl.pop();
                }
                else {
                    _this.commonProvider.showToast("Error in request update");
                    _this.commonProvider.hideLoader();
                }
            });
        }, function (err) {
            console.log('user cancelled');
        });
    };
    AdminAprvlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin-aprvl',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/admin-aprvl/admin-aprvl.html"*/'<ion-header>\n  <ion-navbar color="navColor">\n    <ion-title text-center>Request Details</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        Close\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n  <ion-toolbar style="color: white;">\n    <ion-row>\n      <ion-col text-center>\n        <span>\n          {{srcSubstr}}\n        </span><br>\n        <span style="font-size: 1.5em;font-weight: bold;">{{tripDetail.source}} </span>\n      </ion-col>\n      <ion-col text-center>\n        <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_date | date}}</span><br>\n        <span class="icon-automobile" style="font-size: 1.5em"></span><br>\n        <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_time}}</span>\n      </ion-col>\n      <ion-col text-center>\n        <span>\n          {{destSubstr}}\n        </span><br>\n        <span style="font-size: 1.5em;font-weight: bold;"> {{tripDetail.destination}} </span>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n\n    <ion-card class="driverCard">\n      <ion-card-header style="text-align: center" color="red">\n        Request Details</ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Purpose</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.purpose}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Remark</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.remark}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Employee Name</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_userName}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Employee Location</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_location}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Mobile Number</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_phoneNo}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Email Id</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_email}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Travel Type</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.travelType}}\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item>\n      <ion-label>Assign Cab</ion-label>\n      <ion-select [(ngModel)]="cabs" [disabled]="tripDetail.travelType == \'outstation\' ">\n        <div *ngFor="let cab of cabList">\n          <ion-option value="{{cab.id}}">{{cab.cab_name}}</ion-option>\n        </div>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Assign Driver</ion-label>\n      <ion-select [(ngModel)]="driver" [disabled]="tripDetail.travelType == \'outstation\' ">\n        <div *ngFor="let drvr of driverList">\n          <ion-option value="{{drvr.id}}">{{drvr.first_name}}</ion-option>\n        </div>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Assign Vendor</ion-label>\n      <ion-select [(ngModel)]="vendor" [disabled]="tripDetail.travelType == \'local\' ">\n        <div *ngFor="let vendor of vendorList">\n          <ion-option value="{{vendor.id}}">{{vendor.vName}}</ion-option>\n        </div>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Admin note</ion-label>\n      <ion-input type="text" [(ngModel)]="admincomment"></ion-input>\n    </ion-item>\n    <ion-row text-center>\n      <ion-col>\n        <button ion-button small="true" color="red" (click)="assignRequest()">Assign</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/admin-aprvl/admin-aprvl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */]])
    ], AdminAprvlPage);
    return AdminAprvlPage;
}());

//# sourceMappingURL=admin-aprvl.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPageModule", function() { return DriverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_qrcode__ = __webpack_require__(288);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver__["a" /* DriverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driver__["a" /* DriverPage */]),
            ],
        })
    ], DriverPageModule);
    return DriverPageModule;
}());

//# sourceMappingURL=driver.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(19);
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
        console.log('driver driverNumber page', this.navParams.get('driverNumber'));
        this.driverphno = this.navParams.get('driverNumber');
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
    DriverPage.prototype.getTrip = function () {
        var _this = this;
        this.commonProvider.showLoader('Getting cab details..');
        this.serviceProvider.getDriverTripDetails('/getTripDetails/driver/' + this.driverphno).subscribe(function (resp) {
            _this.tripDetail = JSON.parse(resp._body);
            console.log("this.tripDetail ", _this.tripDetail.length);
            if (_this.tripDetail.length) {
                _this.tripDetail[0] ? _this.tripDetail = _this.tripDetail[0] : 'nothing';
                console.log("this.tripDetail ", _this.tripDetail.length);
                _this.tripDetail.cab ? _this.cabDetail = _this.tripDetail.cab : 'nothing';
                _this.driverDetail = _this.tripDetail.driver;
                _this.srcSubstr = _this.tripDetail.source.substring(0, 3);
                _this.destSubstr = _this.tripDetail.destination.substring(0, 3);
                _this.commonProvider.hideLoader();
                console.log("trip response ", _this.tripDetail);
                console.log("cabDetail response ", _this.cabDetail);
                console.log("driver Detail response ", _this.driverDetail);
            }
            else {
                _this.commonProvider.hideLoader();
            }
            // }else{
            //   this.commonProvider.hideLoader();
            // }
        }, function (err) {
            _this.commonProvider.hideLoader();
            console.log("error ", err);
            _this.commonProvider.showToast('Service error');
        });
    };
    DriverPage.prototype.ionViewDidLoad = function () {
        this.getTrip();
    };
    DriverPage.prototype.startTrip = function (type) {
        var _this = this;
        console.log(this.startkm);
        if (this.startkm) {
            this.commonProvider.showLoader('Updating Kms..');
            var today = new Date();
            var cdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '/' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            console.log("ctime ", cdate);
            console.log("this.tripDetail ", this.tripDetail);
            this.serviceProvider.tripStart('/updateOngoingTripDetails', cdate, type, this.tripDetail.id, this.startkm).subscribe(function (resp) {
                console.log("response ", resp);
                _this.commonProvider.hideLoader();
                // if (type == 'endTrip') {
                console.log("end trip");
                _this.getTrip();
                // }
            }, function (err) {
                console.log("error", err);
                _this.commonProvider.showToast(err.message);
                _this.commonProvider.hideLoader();
            });
        }
        else {
            this.commonProvider.hideLoader();
            this.commonProvider.showToast("Please enter kms");
        }
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-driver',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/driver/driver.html"*/'<ion-header>\n  <ion-navbar color="navColor">\n    <ion-title text-center>Trip Details</ion-title>\n    <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n\n  </ion-navbar>\n  <ion-toolbar style="color: white;" *ngIf="tripDetail.length != 0">\n    <ion-row>\n      <ion-col text-center>\n        <span>\n          {{srcSubstr}}\n        </span><br>\n        <span style="font-size: 1.5em;font-weight: bold;">{{tripDetail.source}} </span>\n      </ion-col>\n      <ion-col text-center>\n        <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_date}}</span><br>\n        <span class="icon-automobile" style="font-size: 1.5em"></span><br>\n        <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_time}}</span>\n      </ion-col>\n      <ion-col text-center>\n        <span>\n          {{destSubstr}}\n        </span><br>\n        <span style="font-size: 1.5em;font-weight: bold;"> {{tripDetail.destination}} </span>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="tripDetail.length == 0">\n    <ion-card class="driverCard">\n      <ion-card-header style="text-align: center" color="red">\n        No cab is assigned</ion-card-header>\n    </ion-card>\n  </div>\n  <div *ngIf="tripDetail.length != 0" style="margin-top: 26%;">\n    <div>\n      <ion-card class="driverCard">\n        <ion-card-header style="text-align: center" color="red">\n          Passengers Details</ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Passanger Name</span>\n            </ion-col>\n            <ion-col>\n              {{tripDetail.emp_userName}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Mobile Number</span>\n            </ion-col>\n            <ion-col>\n              {{tripDetail.emp_phoneNo}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Email Id</span>\n            </ion-col>\n            <ion-col>\n              {{tripDetail.emp_email}}\n            </ion-col>\n          </ion-row>\n\n        </ion-card-content>\n      </ion-card>\n\n\n      <ion-card class="driverCard">\n        <ion-card-header style="text-align: center" color="red">\n          Cab Details</ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Cab Name</span>\n            </ion-col>\n            <ion-col>\n              {{cabDetail.cab_name}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Cab Number</span>\n            </ion-col>\n            <ion-col>\n              {{cabDetail.cab_no}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span class="formtitle">Number of seats</span>\n            </ion-col>\n            <ion-col>\n              {{cabDetail.no_of_seats}}\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-row text-center class="row-height" style="margin-top: 10%">\n        <ion-col>\n          <qr-code [value]="asd" [size]="200"></qr-code>\n        </ion-col>\n      </ion-row>\n\n    </div>\n    <div *ngIf="tripDetail.length != 0">\n      <ion-item>\n        <ion-label floating>Enter kms.</ion-label>\n        <ion-input type="number" [(ngModel)]="startkm"></ion-input>\n      </ion-item>\n      <ion-row text-center class="row-height" style="margin-top: 1%">\n        <ion-col>\n          <button ion-button color="red" (click)="startTrip(\'startTrip\')" [disabled]="tripDetail.startKm != 0">Start Trip\n          </button>\n          <button ion-button color="red" (click)="startTrip(\'endTrip\')" [disabled]="tripDetail.startKm == 0">End Trip\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/driver/driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification-detail',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/notification-detail/notification-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trip Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item>\n    <span class="icon-directions_car" style="float:left"></span>\n      <h2 style="float:left; padding-left: 12px;font-weight: 500;">Micro . CRN 22312312</h2>\n      </ion-item>\n      <ion-item>\n    <span class="icon-user" style="float:left"></span>\n      <h2 style="float:left; padding-left: 12px;font-weight: 500;">ABCD XYZ/9890123345</h2><br>\n        <h3 style="float:left; padding-left: 29px;color: #424242;">Mon, Sep 03, 06:49AM</h3>\n      </ion-item>\n  <ion-item>\n    <ul class="bar">\n      <li style="color:green"><h3>Reay Road</h3></li>\n      <li style="color:#a90e1b"><h3>CSMT</h3></li>\n    </ul>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/notification-detail/notification-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NotificationDetailPage);
    return NotificationDetailPage;
}());

//# sourceMappingURL=notification-detail.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpdashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { Calendar } from '@ionic-native/calendar';
//import { FCM } from '@ionic-native/fcm';
/**
 * Generated class for the EmpdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmpdashboardPage = /** @class */ (function () {
    function EmpdashboardPage(navCtrl, navParams, formBuilder, popoverController, serviceProvider, commonProvider, modal
        //  public calendar: Calendar
        //  public fcm: FCM
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.modal = modal;
        this.confirmReqst = false;
        this.historyData = [];
        this.userDetails = [];
        this.dhDetails = [];
        this.dhUsrDetails = [];
        this.travelType = [];
        console.log("params ", navParams);
        //  this.userDetails = navParams.data.EmployeeDetail;
        this.userDetails = navParams.data.response;
        this.userName = navParams.get('userId');
        this.userName = navParams.get('response');
        //alert(this.userName)
        console.log("params ", this.userDetails);
        console.log("params ", this.userDetails);
        this.bookingForm = this.formBuilder.group({
            updatepurpose: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            // traveldate: ['', Validators.required],
            traveltime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            travelsrc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            traveldest: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            remark: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            travelType: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.requestSegment = "raisereq";
        this.minDate = new Date();
        this.travelDate = new Date();
        // console.log("current time ", this.minDate.getHours());
        // console.log("current time ", this.minDate.getMinutes());
        console.log('this...', this.minDate);
    }
    EmpdashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.serviceProvider.getDeptHeadUser('/getEmployeeDept', this.userDetails.emp_no).subscribe(function (response) {
            _this.dhDetails = JSON.parse(response._body);
            console.log('DH response ', _this.dhDetails);
            _this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', _this.dhDetails.pernr).subscribe(function (response) {
                _this.dhUsrDetails = JSON.parse(response._body);
                console.log("this.dhUsrDetails ", _this.dhUsrDetails);
            }, function (err) {
                _this.commonProvider.showToast("Error in user details");
            });
        }, function (err) {
            _this.commonProvider.showToast("Error in dh details");
        });
        this.serviceProvider.getAllLocations('/getAllLocations').subscribe(function (response) {
            console.log("Locations ", response);
            console.log("Locations ", JSON.parse(response._body));
            _this.locations = JSON.parse(response._body);
            console.log("this.locations[0].loc_name ", _this.locations[1].loc_name);
            _this.bookingForm.get('travelsrc').setValue(_this.userDetails.emp_psa);
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
        this.startDatetimeMin = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString(); // set the current date time
        this.endDatetimeMax = (new Date((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString()); // sets the 30 days from the current date time
        console.log('ionViewDidLoad EmpdashboardPage ', this.startDatetimeMin);
        console.log('ionViewDidLoad EmpdashboardPage ', this.endDatetimeMax);
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
            _this.bookingForm.get('travelsrc').setValue(_this.userDetails.emp_psa);
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
            //let ustr = this.userDetails.emp_esg.substring(0, 2);
            //var tdate = new Date(this.travelDate);
            //tdate.getHour
            var reqData;
            reqData = {
                'userID': _this.userDetails.emp_no,
                'source': _this.bookingForm.value.travelsrc,
                'destination': _this.bookingForm.value.traveldest,
                'purpose': _this.bookingForm.value.updatepurpose,
                'travel_date': new Date(_this.travelDate).toDateString(),
                // 'travel_date': this.bookingForm.value.traveldate,
                'travel_time': _this.bookingForm.value.traveltime,
                'emp_email': _this.userDetails.emp_email,
                'emp_UserName': _this.userDetails.emp_f_name + ' ' + _this.userDetails.emp_l_name,
                'emp_phoneNo': _this.userDetails.emp_cell,
                'status': 'Pending with Manager',
                'bh_Id': _this.dhDetails.pernr,
                'bh_UserName': _this.dhUsrDetails.emp_f_name + ' ' + _this.dhUsrDetails.emp_l_name,
                'bh_email': _this.dhDetails.email,
                'remark': _this.bookingForm.value.remark,
                'location': _this.userDetails.emp_psa,
                'cost_id': _this.userDetails.emp_cosid,
                'cost_center': _this.userDetails.emp_cost,
                'travelType': _this.bookingForm.value.travelType
            };
            console.log("ustr", reqData);
            //   reqData.bh_Id = '00211779' ;
            console.log("reqraise data", reqData);
            _this.serviceProvider.raiseRequest('/insertTrip', reqData).subscribe(function (response) {
                console.log("raise request ", response);
                _this.commonProvider.hideLoader();
                if (response) {
                    _this.confirmReqst = false;
                    _this.bookingForm.reset();
                    _this.bookingForm.get('travelsrc').setValue(_this.userDetails.emp_psa);
                    _this.commonProvider.showToast('Request sent successfully');
                }
                else {
                    _this.commonProvider.showToast('Request error, Please check with admin');
                }
            }, function (err) {
                _this.commonProvider.hideLoader();
                _this.commonProvider.showToast('Request error, Please check with admin');
            });
        }, function (err) {
            console.log('user cancelled');
        });
    };
    EmpdashboardPage.prototype.logout = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to logout?').then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], {});
        }, function (err) {
            console.log('user cancelled');
        });
    };
    EmpdashboardPage.prototype.openDetail = function (obj) {
        console.log("open modal");
        var myModal = this.modal.create('ModalDetailPage', { data: obj });
        myModal.present();
    };
    EmpdashboardPage.prototype.setDate = function (dte) {
        this.travelDate = new Date(dte);
        console.log("date obj ", this.travelDate);
    };
    EmpdashboardPage.prototype.cancelCabReq = function (event, id) {
        var _this = this;
        event.stopPropagation();
        this.commonProvider.Alert.confirm('Sure you want to cancel request?').then(function (res) {
            _this.commonProvider.showLoader();
            _this.serviceProvider.cancelCab('/employeecanceltrip', id).subscribe(function (response) {
                _this.commonProvider.hideLoader();
                _this.commonProvider.showToast("Trip cancelled successfully");
                _this.getEmpHistory();
            }, function (err) {
                _this.commonProvider.hideLoader();
                _this.commonProvider.showToast("Error in cancellation");
            });
        }, function (err) {
            console.log('user cancelled');
        });
    };
    EmpdashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-empdashboard',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/employee/empdashboard/empdashboard.html"*/'<ion-header>\n  <ion-navbar color="navColor">\n    <ion-title text-center>Dashboard</ion-title>\n    <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n    <span class="icon-bell" style="float:right" (click)="showNotifn($event)"></span>\n    <ion-badge class="cart-badge">5</ion-badge>\n  </ion-navbar>\n  <!-- <ion-toolbar color="white" class="webToolbar">\n    <ion-grid class="gridSize">\n      <ion-row>\n        <ion-col col-8 text-left>\n          <span style="font-size: 17px;">{{userDetails.emp_f_name}}/{{userDetails.emp_no}}</span>\n        </ion-col>\n        <ion-col col-4 text-right>\n          <span style="color:#ad081f; font-family: font-medium"> {{userDetails.emp_psa}} </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8 style="padding-top: 0px; font-family: font-medium;" text-left>\n          <span> {{userDetails.emp_cost}} </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar> -->\n  <ion-toolbar color="white" class="webToolbar">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8 text-left>\n          <span style="font-size: 17px;">{{userDetails.emp_f_name}}/{{userDetails.emp_no}}</span>\n        </ion-col>\n        <ion-col col-4 text-right>\n          <span style="color:#ad081f; font-family: font-medium"> {{userDetails.emp_psa}} </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8 style="padding-top: 0px;" text-left>\n          <span> {{userDetails.emp_cost}} </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class="formcntent">\n    <div>\n      <ion-segment [(ngModel)]="requestSegment" color="red">\n        <ion-segment-button value="raisereq">\n          Raise Request\n        </ion-segment-button>\n        <ion-segment-button value="history" (ionSelect)="getEmpHistory()">\n          History\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div [ngSwitch]="requestSegment">\n      <form *ngSwitchCase="\'raisereq\'" [formGroup]="bookingForm">\n        <div *ngIf="!confirmReqst">\n          <ion-item>\n            <ion-label floating>Purpose</ion-label>\n            <ion-input type="text" formControlName="updatepurpose"></ion-input>\n          </ion-item>\n          <ion-item>\n            <!-- <ion-label floating>Travel Date</ion-label> -->\n            <!-- <ion-datetime picker displayFormat="DD/MM/YYYY" only-valid="{\'after\': \'today\', \'inclusive\': true}" formControlName="traveldate"></ion-datetime> -->\n            <!-- <ion-datetime displayFormat="DD/MM/YYYY" [min]="minDate" [max]="2050" formControlName="traveldate"></ion-datetime> -->\n            <span ion-datepicker (ionChanged)="setDate($event);" [value]="minDate" [min]="minDate" [cancelText]=\'Today\' clear>\n              <span>{{travelDate | date}}\n                <ion-icon name="clipboard" item-left></ion-icon>\n              </span>\n            </span>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Time</ion-label>\n            <ion-datetime displayFormat="hh:mm A" formControlName="traveltime">\n            </ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Source</ion-label>\n            <ion-select formControlName="travelsrc" name="travelsrc">\n              <div *ngFor="let locs of locations">\n                <ion-option value="{{locs.loc_name}}">{{locs.loc_name}}</ion-option>\n              </div>\n            </ion-select>\n            <!-- <ion-label floating>Source</ion-label>\n        <ion-input type="text" formControlName="travelsrc"></ion-input> -->\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Destination</ion-label>\n            <ion-input type="text" formControlName="traveldest" maxlength=30></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Remark</ion-label>\n            <ion-input type="text" formControlName="remark"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Travel type</ion-label>\n            <ion-select formControlName="travelType">\n              <ion-option value="outstation">Outstation</ion-option>\n              <ion-option value="local">Local</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-row text-center class="row-height" style="margin-top: 1%">\n            <ion-col>\n              <button ion-button small="true" [disabled]="!bookingForm.valid" color="red" (click)="logForm()">Next\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div *ngIf="confirmReqst">\n          <ion-card>\n            <ion-card-header style="text-align: center" color="red">\n\n              <span>Confirm Request</span>\n              <span class="icon-pencil" style="float: right;" (click)="editRequest()"></span>\n            </ion-card-header>\n            <ion-card-content style="padding: 13px 6px 5px;">\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Purpose</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.updatepurpose}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Travel Date</span>\n                </ion-col>\n                <ion-col>\n                  {{travelDate | date}}\n                  <!-- {{bookingForm.value.traveldate | date}} -->\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Travel Time</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.traveltime}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Source</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.travelsrc}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Destination</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.traveldest}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Remark</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.remark}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Travel Type</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.travelType}}\n                </ion-col>\n              </ion-row>\n\n              <ion-row text-center class="row-height" style="margin-top: 1%">\n                <ion-col>\n\n                  <button ion-button small="true" color="red" (click)="cancelReq()">Cancel Request\n                  </button>\n                  <button ion-button small="true" color="red" (click)="sendRequest()">Send Request\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </form>\n      <div *ngSwitchCase="\'history\'">\n        <ion-list>\n          <ion-list-header style="background: #9e9e9e1f !important; margin-bottom: 0px;">\n            <span style="color:#ad081f">Booking History</span>\n          </ion-list-header>\n          <ng-container *ngFor="let hdata of historyData">\n            <ion-item *ngIf="hdata.travel_date && hdata.travel_date != \'null\' " (click)="openDetail(hdata)">\n              <span>\n                <h3 class="reqText">\n                  <span class="icon-directions_car" style="padding-right: 10px;margin-bottom: 10px;"></span>{{hdata.purpose}}</h3>\n\n              </span>\n\n              <span text-left style="color: #a90e1b;" *ngIf="hdata.travel_date!=null">\n                {{hdata.travel_date | date}}, {{hdata.travel_time}}\n              </span>\n              <span class="statusWrds">\n                <h6>{{hdata.status}}</h6>\n                <h6 *ngIf="hdata.status == \'Pending with Manager\' ">{{hdata.bh_UserName}}\n                </h6>\n              </span>\n\n              <!-- <span>\n              <h3 style="color: #424242;" *ngIf="hdata.travel_date!=null">{{hdata.travel_date | date}}, {{hdata.travel_time}}</h3>\n              <h3 style="color: #424242;">{{hdata.status}}</h3>\n            </span> -->\n              <div>\n                <ul class="bar">\n                  <li style="color:green">\n                    <h3>{{hdata.source}}</h3>\n                  </li>\n                  <li style="color:#a90e1b">\n                    <h3>{{hdata.destination}}</h3>\n                  </li>\n                </ul>\n\n              </div>\n              <span class="statusWrds" *ngIf="hdata.status != \'started\' ">\n                <button ion-button small="true" color="red" (click)="cancelCabReq($event,hdata.id)">Cancel\n                </button>\n                <!-- <h6 *ngIf="hdata.status == \'started\' ">Cancel\n                </h6> -->\n              </span>\n            </ion-item>\n          </ng-container>\n        </ion-list>\n      </div>\n    </div>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/employee/empdashboard/empdashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]
            //  public calendar: Calendar
            //  public fcm: FCM
        ])
    ], EmpdashboardPage);
    return EmpdashboardPage;
}());

//# sourceMappingURL=empdashboard.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoddashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hod_requesthistory_requesthistory__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(36);
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
    function HoddashboardPage(navCtrl, navParams, formBuilder, popoverController, serviceProvider, commonProvider, alertCtrl, zone, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.modal = modal;
        this.confirmReqst = false;
        this.historyData = [];
        this.userDetails = [];
        this.dhDetails = [];
        console.log("params hod", navParams);
        this.userDetails = navParams.data.response;
        console.log("params ", this.userDetails);
        this.bookingForm = this.formBuilder.group({
            updatepurpose: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            // traveldate: ['', Validators.required],
            traveltime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            travelsrc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            traveldest: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            remark: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            travelType: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.requestSegment = "pendingReq";
        this.minDate = new Date();
        this.travelDate = new Date();
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
            _this.bookingForm.get('travelsrc').setValue(_this.userDetails.emp_psa);
        }, function (err) {
            console.log('user cancelled');
        });
    };
    HoddashboardPage.prototype.getEmpHistory = function () {
        var _this = this;
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
        this.commonProvider.Alert.confirm().then(function (res) {
            _this.commonProvider.showLoader('Sending request...');
            console.log('this.bookingForm.value ', _this.bookingForm.value);
            var reqData = {
                'userID': _this.userDetails.emp_no,
                'source': _this.bookingForm.value.travelsrc,
                'destination': _this.bookingForm.value.traveldest,
                'purpose': _this.bookingForm.value.updatepurpose,
                'travel_date': new Date(_this.travelDate).toDateString(),
                // 'travel_date': this.bookingForm.value.traveldate,
                'travel_time': _this.bookingForm.value.traveltime,
                'emp_email': _this.userDetails.emp_email,
                'remark': _this.bookingForm.value.remark,
                'location': _this.userDetails.emp_psa,
                'cost_id': _this.userDetails.emp_cosid,
                'cost_center': _this.userDetails.emp_cost,
                'emp_UserName': _this.userDetails.emp_f_name + ' ' + _this.userDetails.emp_l_name,
                'emp_phoneNo': _this.userDetails.emp_cell,
                'status': 'Pending with Admin',
                'travelType': _this.bookingForm.value.travelType
            };
            _this.serviceProvider.raiseRequest('/insertTrip', reqData).subscribe(function (response) {
                console.log("raise request ", response);
                _this.commonProvider.hideLoader();
                if (response) {
                    _this.confirmReqst = false;
                    _this.bookingForm.reset();
                    _this.bookingForm.get('travelsrc').setValue(_this.userDetails.emp_psa);
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
                title: '',
                message: "Please enter comments for rejection",
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
            this.commonProvider.Alert.confirm('').then(function (res) {
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
            'bh_Id': this.userDetails.emp_no,
            'bh_UserName': obj.bh_UserName,
            'remark': obj.remark,
            //  'location': obj.source,
            'location': obj.emp_location,
            'cost_id': obj.cost_id,
            'cost_center': obj.cost_center,
            'travelType': obj.travelType,
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__hod_requesthistory_requesthistory__["a" /* RequesthistoryPage */], { EmployeeDetail: this.userDetails });
    };
    HoddashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.serviceProvider.getDeptHeadUser('/getEmployeeDept', this.userDetails.emp_no).subscribe(function (response) {
            _this.dhDetails = JSON.parse(response._body);
            console.log('DH response ', _this.dhDetails);
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
        this.commonProvider.showLoader();
        this.serviceProvider.getAllLocations('/getAllLocations').subscribe(function (response) {
            console.log("Locations ", JSON.parse(response._body));
            _this.locations = JSON.parse(response._body);
            _this.bookingForm.get('travelsrc').setValue(_this.userDetails.emp_psa);
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
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */], {});
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
    HoddashboardPage.prototype.openDetail = function (obj) {
        console.log("open modal");
        var myModal = this.modal.create('ModalDetailPage', { data: obj });
        myModal.present();
    };
    HoddashboardPage.prototype.setDate = function (dte) {
        this.travelDate = new Date(dte);
        console.log("date obj ", this.travelDate);
    };
    HoddashboardPage.prototype.cancelDate = function (dte) {
        console.log("date obj ", dte);
        this.minDate = new Date();
    };
    HoddashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hoddashboard',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/hoddashboard/hoddashboard.html"*/'<!--\n  Generated template for the HoddashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navColor">\n    <ion-title text-center>Dashboard</ion-title>\n    <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n    <span class="icon-bell" style="float:right" (click)="showNotifn($event)"></span>\n    <ion-badge class="cart-badge">5</ion-badge>\n  </ion-navbar>\n  <ion-toolbar color="white" class="webToolbar">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8 text-left>\n          <span style="font-size: 17px;">{{userDetails.emp_f_name}}/{{userDetails.emp_no}}</span>\n        </ion-col>\n        <ion-col col-4 text-right>\n          <span style="color:#ad081f; font-family: font-medium"> {{userDetails.emp_psa}} </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8 style="padding-top: 0px;" text-left>\n          <span> {{userDetails.emp_cost}} </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid class="formcntent">\n    <div>\n      <ion-segment [(ngModel)]="requestSegment" color="red" (ionSelect)="segmentChanged($event)">\n        <ion-segment-button value="pendingReq" (ionSelect)="getApprovalHistory()">\n          Requests\n        </ion-segment-button>\n        <ion-segment-button value="raisereq">\n          Raise Request\n        </ion-segment-button>\n        <ion-segment-button value="history" (ionSelect)="getEmpHistory()">\n          Booking History\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n    <div [ngSwitch]="requestSegment">\n\n      <form *ngSwitchCase="\'raisereq\'" [formGroup]="bookingForm">\n        <div *ngIf="!confirmReqst">\n          <ion-item>\n            <ion-label floating>Purpose</ion-label>\n            <ion-input type="text" formControlName="updatepurpose"></ion-input>\n          </ion-item>\n          <ion-item>\n            <!-- <ion-label floating>Travel Date</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" [min]="minDate" [max]="2050" formControlName="traveldate"></ion-datetime> -->\n            <span ion-datepicker (ionChanged)="setDate($event);" [value]="minDate" [min]="minDate" [cancelText]=\'Today\' clear>\n              <span>{{travelDate | date}}\n                <ion-icon name="clipboard" item-left></ion-icon>\n              </span>\n            </span>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Time</ion-label>\n            <ion-datetime displayFormat="hh:mm A" formControlName="traveltime"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Source</ion-label>\n            <ion-select formControlName="travelsrc" name="travelsrc">\n              <div *ngFor="let locs of locations">\n                <ion-option value="{{locs.loc_name}}">{{locs.loc_name}}</ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Destination</ion-label>\n            <ion-input type="text" formControlName="traveldest" maxlength=30></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Remark</ion-label>\n            <ion-input type="text" formControlName="remark"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Travel type</ion-label>\n            <ion-select formControlName="travelType">\n              <ion-option value="outstation">Outstation</ion-option>\n              <ion-option value="local">Local</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-row text-center class="row-height" style="margin-top: 1%">\n            <ion-col>\n              <button ion-button small="true" [disabled]="!bookingForm.valid" color="red" (click)="logForm()">Next\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div *ngIf="confirmReqst">\n          <ion-card>\n            <ion-card-header style="text-align: center" color="red">\n\n              <span>Confirm Request</span>\n              <span class="icon-pencil" style="float: right;" (click)="editRequest()"></span>\n            </ion-card-header>\n            <ion-card-content style="padding: 13px 6px 5px;">\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Purpose</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.updatepurpose}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Travel Date</span>\n                </ion-col>\n                <ion-col>\n                  {{travelDate | date}}\n                  <!-- {{bookingForm.value.traveldate | date}} -->\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Travel Time</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.traveltime}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Source</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.travelsrc}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Destination</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.traveldest}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Remark</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.remark}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Travel Type</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.travelType}}\n                </ion-col>\n              </ion-row>\n              <ion-row text-center class="row-height" style="margin-top: 1%">\n                <ion-col>\n                  <button ion-button small="true" color="red" (click)="cancelReq()">Cancel Request\n                  </button>\n                  <button ion-button small="true" color="red" (click)="sendRequest()">Send Request\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </form>\n      <div *ngSwitchCase="\'pendingReq\'">\n        <ion-list>\n          <ion-list-header style="background: #9e9e9e1f !important;">\n            <span style="color:#ad081f">Pending for approval</span>\n            <span style="color:#ad081f; float: right;border-bottom: 1px solid;" (click)="viewReqHistory();">View History</span>\n          </ion-list-header>\n          <ion-item *ngFor="let applh of approvalList">\n            <span (click)="openDetail(applh)">\n              <h3 class="reqText">\n                <span class="icon-directions_car" style="padding-right: 10px;margin-bottom: 10px;"></span>{{applh.purpose}}</h3>\n            </span>\n\n            <div style="float: right">\n              <button text-center ion-button outline small="true" solid="true" style="background-color: #398b00;" (click)="reqAction(\'Pending with Admin\', applh);">Accept</button>\n              <button text-center ion-button outline small="true" solid="true" style="background-color: #ca3636;" (click)="reqAction(\'Rejected\', applh);">Decline</button>\n            </div>\n            <span>\n              <h3 style="color: #424242;" *ngIf="applh.travel_date!=null">{{applh.travel_date | date}}, {{applh.travel_time}}</h3>\n            </span>\n            <div>\n              <ul class="bar">\n                <li style="color:green">\n                  <h3>{{applh.source}}</h3>\n                </li>\n                <li style="color:#a90e1b">\n                  <h3>{{applh.destination}}</h3>\n                </li>\n              </ul>\n            </div>\n            <!-- <div>\n              <button text-center ion-button outline small="true" solid="true" style="background-color: #398b00;" (click)="reqAction(\'Pending with Admin\', applh);">Accept</button>\n              <button text-center ion-button outline small="true" solid="true" style="background-color: #ca3636;" (click)="reqAction(\'Rejected\', applh);">Decline</button>\n            </div> -->\n          </ion-item>\n        </ion-list>\n      </div>\n      <div *ngSwitchCase="\'history\'">\n        <ion-list>\n          <ion-list-header style="background: #9e9e9e1f !important;  margin-bottom: 0px;">\n            <span style="color:#ad081f">Booking History</span>\n          </ion-list-header>\n          <ng-container *ngFor="let hdata of historyData">\n            <ion-item *ngIf="hdata.travel_date && hdata.travel_date != \'null\' " (click)="openDetail(hdata)">\n              <span>\n                <h3 class="reqText">\n                  <span class="icon-directions_car" style="padding-right: 10px;margin-bottom: 10px;"></span>{{hdata.purpose}}</h3>\n              </span>\n              <span text-left style="color: #a90e1b;" *ngIf="hdata.travel_date!=null">\n                {{hdata.travel_date | date}}, {{hdata.travel_time}}\n              </span>\n              <span class="statusWrds">\n                <h6>{{hdata.status}}</h6>\n              </span>\n              <div>\n                <ul class="bar">\n                  <li style="color:green">\n                    <h3>{{hdata.source}}</h3>\n                  </li>\n                  <li style="color:#a90e1b">\n                    <h3>{{hdata.destination}}</h3>\n                  </li>\n                </ul>\n              </div>\n            </ion-item>\n          </ng-container>\n        </ion-list>\n      </div>\n    </div>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/hoddashboard/hoddashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], HoddashboardPage);
    return HoddashboardPage;
}());

//# sourceMappingURL=hoddashboard.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesthistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(20);
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
    function RequesthistoryPage(navCtrl, navParams, serviceProvider, commonProvider, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.modal = modal;
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
    RequesthistoryPage.prototype.openDetail = function (obj) {
        console.log("open modal");
        var myModal = this.modal.create('ModalDetailPage', { data: obj });
        myModal.present();
    };
    RequesthistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-requesthistory',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/requesthistory/requesthistory.html"*/'<!--\n  Generated template for the RequesthistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Request History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid class="formcntent">\n    <ion-list>\n      <ion-list-header style="background: #9e9e9e1f !important;">\n        <span style="color:#ad081f">Trip Completed</span>\n      </ion-list-header>\n      <ng-container *ngFor="let hdata of tripHistory">\n        <ion-item *ngIf="hdata.travel_date && hdata.travel_date != \'null\' " (click)="openDetail(hdata)">\n          <span>\n            <h3 class="reqText">\n              <span class="icon-directions_car" style="padding-right: 10px;margin-bottom: 10px;"></span>{{hdata.purpose}}</h3>\n          </span>\n          <span text-left style="color: #a90e1b;" *ngIf="hdata.travel_date!=null">\n            {{hdata.travel_date | date}}, {{hdata.travel_time}}\n          </span>\n          <span class="statusWrds">\n            <h6>{{hdata.status}}</h6>\n          </span>\n          <div>\n            <ul class="bar">\n              <li style="color:green">\n                <h3>{{hdata.source}}</h3>\n              </li>\n              <li style="color:#a90e1b">\n                <h3>{{hdata.destination}}</h3>\n              </li>\n            </ul>\n          </div>\n\n          <!-- <span class="icon-directions_car" style="float:left"></span>\n      <h2 style="float:right; color: #a90e1b;">{{hdata.status}}</h2>\n      <h3 style="float:left; padding-left: 12px;font-weight: 500;">{{hdata.purpose}}</h3><br>\n          <h3 style="float:left; padding-left: 29px;color: #424242;">{{hdata.travel_date | date}}, {{hdata.travel_time}}</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>{{hdata.source}}</h3></li>\n            <li style="color:#a90e1b"><h3>{{hdata.destination}}</h3></li>\n          </ul>\n          </div> -->\n        </ion-item>\n      </ng-container>\n      <!-- <ion-item>\n          <span class="icon-directions_car" style="float:left"></span>\n        <h2 style="float:right; color: #a90e1b;">Accept</h2>\n          <h3 style="float:left; padding-left: 12px;font-weight: 500;">Mon, Sep 03, 06:49AM</h3><br>\n          <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>Reay Road</h3></li>\n            <li style="color:#a90e1b"><h3>CSMT</h3></li>\n          </ul>\n          </div>\n    </ion-item><ion-item>\n          <span class="icon-directions_car" style="float:left"></span>\n          <h2 style="float:right; color: #a90e1b;">Decline</h2>\n          <h3 style="float:left; padding-left: 12px;font-weight: 500;">Mon, Sep 03, 06:49AM</h3><br>\n          <h3 style="float:left; padding-left: 29px;color: #424242;">Micro . CRN 22312312</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>Reay Road</h3></li>\n            <li style="color:#a90e1b"><h3>CSMT</h3></li>\n          </ul>\n          </div>\n    </ion-item><ion-item>\n          <span class="icon-directions_car" style="float:left"></span>\n          <h2 style="float:right; color: #a90e1b; ">Accept</h2>\n          <h3 style="float:left; padding-left: 2px;font-weight: 500;">Mon, Sep 03, 06:49AM</h3><br>\n          <h3 style="float:left; padding-left: 20px;color: #424242;">Micro . CRN 22312312</h3>\n          <div>\n            <br>\n          <ul class="bar">\n            <li style="color:green"><h3>Reay Road</h3></li>\n            <li style="color:#a90e1b"><h3>CSMT</h3></li>\n          </ul>\n          </div>\n    </ion-item>-->\n    </ion-list>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/hod/requesthistory/requesthistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], RequesthistoryPage);
    return RequesthistoryPage;
}());

//# sourceMappingURL=requesthistory.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminrequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_aprvl_admin_aprvl__ = __webpack_require__(163);
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
 * Generated class for the AdminrequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminrequestsPage = /** @class */ (function () {
    function AdminrequestsPage(navCtrl, navParams, formBuilder, popoverController, serviceProvider, commonProvider, alertCtrl, zone, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.modal = modal;
        this.confirmReqst = false;
        this.historyData = [];
        this.userDetails = [];
        this.dhDetails = [];
        this.cabList = [];
        this.driverList = [];
        this.vendorList = [];
        console.log("params hod", navParams);
        this.userDetails = navParams.data.response;
        console.log("userDetails ", this.userDetails);
        this.bookingForm = this.formBuilder.group({
            usrID: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            usrName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            usrphone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[0-9 _!@#$&()\\-`.+,/\]*[0-9!@#$&()\\-`.+,/\][0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            updatepurpose: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            // traveldate: ['', Validators.required],
            traveltime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            travelsrc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            cabs: [],
            driver: [],
            vendor: [],
            traveldest: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            remark: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern("^[A-Za-z0-9 _!@#$&()\\-`.+,/\]*[A-Za-z0-9!@#$&()\\-`.+,/\][A-Za-z0-9 _!@#$&()\\-`.+,/\]*$")
                ])],
            travelType: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.requestSegment = "pendingReq";
        this.minDate = new Date();
        this.travelDate = new Date();
        console.log('this...', this.minDate);
        this.bookingForm.get('travelsrc').setValue(this.userDetails.location.loc_name);
    }
    AdminrequestsPage.prototype.getPendingList = function () {
        var _this = this;
        this.commonProvider.showLoader('');
        this.serviceProvider.getApprovalList('/getAllPendingRequest/adminMobile', this.userDetails.location.id).subscribe(function (response) {
            console.log("Locations ", response);
            console.log("Locations ", JSON.parse(response._body));
            _this.approvalList = JSON.parse(response._body);
            _this.commonProvider.hideLoader();
        }, function (err) {
            _this.commonProvider.hideLoader();
            _this.commonProvider.showToast(err.message);
        });
    };
    AdminrequestsPage.prototype.segmentChanged = function (event) {
        var _this = this;
        console.log("Segment clicked! " + event.value, this, event);
        this.zone.run(function () {
            _this.requestSegment = event.value;
        });
    };
    AdminrequestsPage.prototype.logout = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to logout?').then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], {});
        }, function (err) {
            console.log('user cancelled');
        });
    };
    AdminrequestsPage.prototype.getEmpHistory = function () {
        var _this = this;
        this.serviceProvider.getApprovalList('/getAllApprovedRequest/adminMobile', this.userDetails.location.id).subscribe(function (response) {
            console.log("Emplyee history ", response);
            if (response.status == 200) {
                _this.historyData = JSON.parse(response._body);
                console.log("Emplyee history ", _this.historyData);
            }
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
    };
    AdminrequestsPage.prototype.openDetail = function (obj) {
        console.log("open modal");
        var myModal = this.modal.create('ModalDetailPage', { data: obj });
        myModal.present();
    };
    AdminrequestsPage.prototype.viewRequest = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__admin_aprvl_admin_aprvl__["a" /* AdminAprvlPage */], { viewData: obj, adminLocation: this.userDetails.location.id });
    };
    AdminrequestsPage.prototype.sendRequest = function () {
        var _this = this;
        this.commonProvider.Alert.confirm().then(function (res) {
            _this.commonProvider.showLoader('Sending request...');
            console.log('this.bookingForm.value ', _this.bookingForm.value);
            _this.bookingForm.value.cabs ? 'nothing' : _this.bookingForm.value.cabs = "";
            _this.bookingForm.value.driver ? 'nothing' : _this.bookingForm.value.driver = "";
            _this.bookingForm.value.vendor ? 'nothing' : _this.bookingForm.value.vendor = "";
            var reqData = {
                'source': _this.userDetails.location.id,
                'destination': _this.bookingForm.value.traveldest,
                'purpose': _this.bookingForm.value.updatepurpose,
                'travel_date': new Date(_this.travelDate).toDateString(),
                'travel_time': _this.bookingForm.value.traveltime,
                'remark': _this.bookingForm.value.remark,
                'status': 'Pending with Admin',
                'travelType': _this.bookingForm.value.travelType,
                'usrID': _this.bookingForm.value.usrID,
                'username': _this.bookingForm.value.usrName,
                'usrphone': _this.bookingForm.value.usrphone,
                'cabs': _this.bookingForm.value.cabs,
                'driver': _this.bookingForm.value.driver,
                'vendor': _this.bookingForm.value.vendor
            };
            _this.serviceProvider.raiseRequestAdmin('/adminraisecabrequest/adminMobile', reqData).subscribe(function (response) {
                console.log("raise request ", response);
                _this.commonProvider.hideLoader();
                if (response) {
                    _this.confirmReqst = false;
                    _this.bookingForm.reset();
                    _this.bookingForm.get('travelsrc').setValue(_this.userDetails.location.loc_name);
                    _this.commonProvider.showToast('Request sent successfully');
                }
                else {
                    _this.commonProvider.showToast('Request error, Please check with admin');
                }
            }, function (err) {
                _this.commonProvider.hideLoader();
                _this.commonProvider.showToast('Request error, Please check with admin');
            });
        }, function (err) {
            console.log('user cancelled');
        });
    };
    AdminrequestsPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad AdminrequestsPage');
        this.getPendingList();
        this.getAllDetails();
    };
    AdminrequestsPage.prototype.setDate = function (dte) {
        this.travelDate = new Date(dte);
        console.log("date obj ", this.travelDate);
    };
    AdminrequestsPage.prototype.cancelDate = function (dte) {
        console.log("date obj ", dte);
        this.minDate = new Date();
    };
    AdminrequestsPage.prototype.logForm = function () {
        console.log(this.bookingForm.value);
        this.confirmReqst = true;
    };
    AdminrequestsPage.prototype.cancelReq = function () {
        var _this = this;
        this.commonProvider.Alert.confirm('Sure you want to cancel request?').then(function (res) {
            _this.bookingForm.reset();
            _this.confirmReqst = false;
            _this.bookingForm.get('travelsrc').setValue(_this.userDetails.location.loc_name);
        }, function (err) {
            console.log('user cancelled');
        });
    };
    AdminrequestsPage.prototype.getAllDetails = function () {
        var _this = this;
        this.serviceProvider.getReqDetails('/getAllAvailableResources/adminMobile', this.userDetails.location.id).subscribe(function (response) {
            if (response.status == 200) {
                _this.tripData = JSON.parse(response._body);
                _this.cabList = _this.tripData.cabList;
                _this.vendorList = _this.tripData.vendorList;
                _this.driverList = _this.tripData.driverList;
                console.log("cabs details ", _this.tripData);
                console.log("cabs details ", _this.cabList);
            }
        }, function (err) {
            _this.commonProvider.showToast(err.message);
        });
    };
    AdminrequestsPage.prototype.editRequest = function () {
        this.confirmReqst = false;
    };
    AdminrequestsPage.prototype.typeChange = function (ev) {
        console.log("type change ", ev);
        if (ev == "outstation") {
            this.bookingForm.get('cabs').setValue(null);
            this.bookingForm.get('driver').setValue(null);
        }
        if (ev == "local") {
            this.bookingForm.get('vendor').setValue(null);
        }
    };
    AdminrequestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-adminrequests',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/adminrequests/adminrequests.html"*/'<!--\n  Generated template for the HoddashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navColor">\n    <ion-title text-center>Dashboard</ion-title>\n    <span class="icon-switch" style="float:right" (click)="logout($event)"></span>\n    <span class="icon-bell" style="float:right" (click)="showNotifn($event)"></span>\n    <ion-badge class="cart-badge">5</ion-badge>\n  </ion-navbar>\n  <ion-toolbar color="white" class="webToolbar">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8 text-left>\n          <span style="font-size: 17px;">{{userDetails.username}}/{{userDetails.id}}</span>\n        </ion-col>\n        <ion-col col-4 text-right>\n          <span style="color:#ad081f; font-family: font-medium"> {{userDetails.role}} </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8 style="padding-top: 0px;" text-left>\n          <span> {{userDetails.location.loc_name}} </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid class="formcntent">\n    <div>\n      <ion-segment [(ngModel)]="requestSegment" color="red" (ionSelect)="segmentChanged($event)">\n        <ion-segment-button value="pendingReq" (ionSelect)="getPendingList()">\n          Pending\n        </ion-segment-button>\n        <ion-segment-button value="raisereq">\n          Raise Request\n        </ion-segment-button>\n        <ion-segment-button value="history" (ionSelect)="getEmpHistory()">\n          Approved\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n    <div [ngSwitch]="requestSegment">\n\n      <form *ngSwitchCase="\'raisereq\'" [formGroup]="bookingForm">\n        <div *ngIf="!confirmReqst">\n          <ion-item>\n            <ion-label floating>UserID</ion-label>\n            <ion-input type="text" formControlName="usrID"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>User Name</ion-label>\n            <ion-input type="text" formControlName="usrName"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Phone</ion-label>\n            <ion-input type="number" formControlName="usrphone"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Purpose</ion-label>\n            <ion-input type="text" formControlName="updatepurpose"></ion-input>\n          </ion-item>\n          <ion-item>\n            <!-- <ion-label floating>Travel Date</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" [min]="minDate" [max]="2050" formControlName="traveldate"></ion-datetime> -->\n            <span ion-datepicker (ionChanged)="setDate($event);" [value]="minDate" [min]="minDate" [cancelText]=\'Today\' clear>\n              <span>{{travelDate | date}}\n                <ion-icon name="clipboard" item-left></ion-icon>\n              </span>\n            </span>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Time</ion-label>\n            <ion-datetime displayFormat="hh:mm A" formControlName="traveltime"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Source</ion-label>\n            <ion-input type="text" formControlName="travelsrc"></ion-input>\n            <!-- <ion-select formControlName="travelsrc" name="travelsrc">\n              <div *ngFor="let locs of locations">\n                <ion-option value="{{locs.loc_name}}">{{locs.loc_name}}</ion-option>\n              </div>\n            </ion-select> -->\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Destination</ion-label>\n            <ion-input type="text" formControlName="traveldest" maxlength=30></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Remark</ion-label>\n            <ion-input type="text" formControlName="remark"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Travel type</ion-label>\n            <ion-select formControlName="travelType" (ionChange)="typeChange($event)">\n              <ion-option value="outstation">Outstation</ion-option>\n              <ion-option value="local">Local</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Assign Cab</ion-label>\n            <ion-select formControlName="cabs" name="cabs" [disabled]="bookingForm.value.travelType == \'outstation\' ">\n              <div *ngFor="let cab of cabList">\n                <ion-option value="{{cab.id}}">{{cab.cab_name}}</ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Assign Driver</ion-label>\n            <ion-select formControlName="driver" name="driver" [disabled]="bookingForm.value.travelType == \'outstation\' ">\n              <div *ngFor="let drvr of driverList">\n                <ion-option value="{{drvr.id}}">{{drvr.first_name}}</ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Assign Vendor</ion-label>\n            <ion-select formControlName="vendor" name="vendor" [disabled]="bookingForm.value.travelType == \'local\' ">\n              <div *ngFor="let vendor of vendorList">\n                <ion-option value="{{vendor.id}}">{{vendor.vName}}</ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-row text-center class="row-height" style="margin-top: 1%">\n            <ion-col>\n              <button ion-button small="true" [disabled]="!bookingForm.valid" color="red" (click)="logForm()">Next\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div *ngIf="confirmReqst">\n          <ion-card>\n            <ion-card-header style="text-align: center" color="red">\n\n              <span>Confirm Request</span>\n              <span class="icon-pencil" style="float: right;" (click)="editRequest()"></span>\n            </ion-card-header>\n            <ion-card-content style="padding: 13px 6px 5px;">\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">User ID</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.usrID}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">User Name</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.usrName}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Phone</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.usrphone}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Purpose</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.updatepurpose}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Travel Date</span>\n                </ion-col>\n                <ion-col>\n                  {{travelDate | date}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Travel Time</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.traveltime}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Source</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.travelsrc}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Destination</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.traveldest}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Remark</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.remark}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="formtitle">Travel Type</span>\n                </ion-col>\n                <ion-col>\n                  {{bookingForm.value.travelType}}\n                </ion-col>\n              </ion-row>\n              <ion-row text-center class="row-height" style="margin-top: 1%">\n                <ion-col>\n                  <button ion-button small="true" color="red" (click)="cancelReq()">Cancel Request\n                  </button>\n                  <button ion-button small="true" color="red" (click)="sendRequest()">Send Request\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </form>\n      <div *ngSwitchCase="\'pendingReq\'">\n        <ion-list>\n          <ion-list-header style="background: #9e9e9e1f !important;">\n            <span style="color:#ad081f">Pending for approval</span>\n            <!-- <span style="color:#ad081f; float: right;border-bottom: 1px solid;" (click)="viewReqHistory();">View History</span> -->\n          </ion-list-header>\n          <ion-item *ngFor="let applh of approvalList">\n            <span (click)="openDetail(applh)">\n              <h3 class="reqText">\n                <span class="icon-directions_car" style="padding-right: 10px;margin-bottom: 10px;"></span>{{applh.purpose}}</h3>\n            </span>\n\n            <div style="float: right">\n              <button text-center ion-button outline small="true" solid="true" style="background-color: #398b00;" (click)="viewRequest(applh);">View</button>\n              <!-- <button text-center ion-button outline small="true" solid="true" style="background-color: #ca3636;" (click)="reqAction(\'Rejected\', applh);">Decline</button> -->\n            </div>\n            <span>\n              <h3 style="color: #424242;" *ngIf="applh.travel_date!=null">{{applh.travel_date | date}}, {{applh.travel_time}}</h3>\n            </span>\n            <div>\n              <ul class="bar">\n                <li style="color:green">\n                  <h3>{{applh.source}}</h3>\n                </li>\n                <li style="color:#a90e1b">\n                  <h3>{{applh.destination}}</h3>\n                </li>\n              </ul>\n            </div>\n            <!-- <div>\n              <button text-center ion-button outline small="true" solid="true" style="background-color: #398b00;" (click)="reqAction(\'Pending with Admin\', applh);">Accept</button>\n              <button text-center ion-button outline small="true" solid="true" style="background-color: #ca3636;" (click)="reqAction(\'Rejected\', applh);">Decline</button>\n            </div> -->\n          </ion-item>\n        </ion-list>\n      </div>\n      <div *ngSwitchCase="\'history\'">\n        <ion-list>\n          <ion-list-header style="background: #9e9e9e1f !important;  margin-bottom: 0px;">\n            <span style="color:#ad081f">Booking History</span>\n          </ion-list-header>\n          <ng-container *ngFor="let hdata of historyData">\n            <ion-item *ngIf="hdata.travel_date && hdata.travel_date != \'null\' " (click)="openDetail(hdata)">\n              <span>\n                <h3 class="reqText">\n                  <span class="icon-directions_car" style="padding-right: 10px;margin-bottom: 10px;"></span>{{hdata.purpose}}</h3>\n              </span>\n              <span text-left style="color: #a90e1b;" *ngIf="hdata.travel_date!=null">\n                {{hdata.travel_date | date}}, {{hdata.travel_time}}\n              </span>\n              <span class="statusWrds">\n                <h6>{{hdata.status}}</h6>\n              </span>\n              <div>\n                <ul class="bar">\n                  <li style="color:green">\n                    <h3>{{hdata.source}}</h3>\n                  </li>\n                  <li style="color:#a90e1b">\n                    <h3>{{hdata.destination}}</h3>\n                  </li>\n                </ul>\n              </div>\n            </ion-item>\n          </ng-container>\n        </ion-list>\n      </div>\n    </div>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/adminrequests/adminrequests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AdminrequestsPage);
    return AdminrequestsPage;
}());

//# sourceMappingURL=adminrequests.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequesthistoryPageModule", function() { return RequesthistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requesthistory__ = __webpack_require__(171);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__requesthistory__["a" /* RequesthistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__requesthistory__["a" /* RequesthistoryPage */]),
            ],
        })
    ], RequesthistoryPageModule);
    return RequesthistoryPageModule;
}());

//# sourceMappingURL=requesthistory.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDetailPageModule", function() { return NotificationDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_detail__ = __webpack_require__(168);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification_detail__["a" /* NotificationDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification_detail__["a" /* NotificationDetailPage */]),
            ],
        })
    ], NotificationDetailPageModule);
    return NotificationDetailPageModule;
}());

//# sourceMappingURL=notification-detail.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScanPageModule = /** @class */ (function () {
    function ScanPageModule() {
    }
    ScanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */]),
            ],
        })
    ], ScanPageModule);
    return ScanPageModule;
}());

//# sourceMappingURL=scan.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__ = __webpack_require__(85);
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
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = /** @class */ (function () {
    function ScanPage(navCtrl, navParams, commonProvider, serviceProvider, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonProvider = commonProvider;
        this.serviceProvider = serviceProvider;
        this.qrScanner = qrScanner;
    }
    ScanPage.prototype.startScan = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                _this.qrScanner.show();
                console.log('Camera Permission Given');
                _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                    _this.qrCode = text;
                    _this.commonProvider.showToast(_this.qrCode);
                    _this.qrScanner.hide();
                    _this.serviceProvider.saveScan('/tripDetails/barcode', _this.qrCode).subscribe(function (response) {
                        console.log("barcode response ", response);
                        _this.commonProvider.showToast("PDF is created successfully");
                    }, function (err) {
                        alert('error in  pdf');
                        _this.commonProvider.showToast('Error in save');
                    });
                    _this.navCtrl.last();
                });
            }
            else if (status.denied) {
                _this.commonProvider.showToast('Camera permission denied');
            }
            else {
                _this.commonProvider.showToast('Permission denied for this runtime.');
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    // showCamera() {
    //   (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
    //   this.startScan();
    // }
    //
    // hideCamera() {
    //   (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    //   this.scanSub.unsubscribe();
    //   this.navCtrl.last();
    // }
    ScanPage.prototype.ionViewDidLoad = function () {
    };
    ScanPage.prototype.ionViewWillEnter = function () {
        this.showCamera();
        this.startScan();
    };
    ScanPage.prototype.ionViewWillLeave = function () {
        this.hideCamera();
    };
    ScanPage.prototype.showCamera = function () {
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    ScanPage.prototype.hideCamera = function () {
        window.document.querySelector('ion-app').classList.remove('cameraView');
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/scan/scan.html"*/'<!--\n  Generated template for the ScanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>scan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: none transparent;">\n\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/scan/scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDashboardPageModule", function() { return UsersDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_dashboard__ = __webpack_require__(290);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__users_dashboard__["a" /* UsersDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__users_dashboard__["a" /* UsersDashboardPage */]),
            ],
        })
    ], UsersDashboardPageModule);
    return UsersDashboardPageModule;
}());

//# sourceMappingURL=users-dashboard.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminrequestsPageModule", function() { return AdminrequestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminrequests__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_datepicker__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminrequestsPageModule = /** @class */ (function () {
    function AdminrequestsPageModule() {
    }
    AdminrequestsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adminrequests__["a" /* AdminrequestsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_datepicker__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adminrequests__["a" /* AdminrequestsPage */]),
            ],
        })
    ], AdminrequestsPageModule);
    return AdminrequestsPageModule;
}());

//# sourceMappingURL=adminrequests.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoddashboardPageModule", function() { return HoddashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoddashboard__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_datepicker__ = __webpack_require__(53);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hoddashboard__["a" /* HoddashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_datepicker__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hoddashboard__["a" /* HoddashboardPage */]),
            ],
        })
    ], HoddashboardPageModule);
    return HoddashboardPageModule;
}());

//# sourceMappingURL=hoddashboard.module.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpdashboardPageModule", function() { return EmpdashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empdashboard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_datepicker__ = __webpack_require__(53);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__empdashboard__["a" /* EmpdashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_datepicker__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__empdashboard__["a" /* EmpdashboardPage */]),
            ],
        })
    ], EmpdashboardPageModule);
    return EmpdashboardPageModule;
}());

//# sourceMappingURL=empdashboard.module.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(278);
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
        //  private url = 'https://mapps.mahindra.com/vms';
        this.url = 'http://10.174.55.154:8080/vms';
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getBookingHistory = function (param, usrID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        //  headers.append()
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param + "/" + usrID, options);
        //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
    };
    ServiceProvider.prototype.getAllTripHistory = function (param, usrID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        //  headers.append()
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param + "/" + usrID, options);
        //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
    };
    ServiceProvider.prototype.getAllLocations = function (param) {
        return this.http.get(this.url + param);
        //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
    };
    ServiceProvider.prototype.getApprovalList = function (param, uid) {
        return this.http.get(this.url + param + "/" + uid);
    };
    ServiceProvider.prototype.raiseRequest = function (param, data, datastatus) {
        if (datastatus === void 0) { datastatus = "default"; }
        //  var params = "userID=" + data.userID + "&source=" + data.userID + "&destination=" + data.destination + "&purpose=" + data.purpose +"&travel_date="+ data.travel_date +"&travel_time"+ data.travel_time;
        console.log("datastatus ", data);
        this.raiseReq = new FormData();
        this.raiseReq.append("userID", data.userID);
        this.raiseReq.append("source", data.source);
        this.raiseReq.append("destination", data.destination);
        this.raiseReq.append("purpose", data.purpose);
        this.raiseReq.append("travel_date", data.travel_date);
        this.raiseReq.append("travel_time", data.travel_time);
        this.raiseReq.append("status", data.status);
        this.raiseReq.append("bh_Id", data.bh_Id);
        this.raiseReq.append("bh_UserName", data.bh_UserName);
        this.raiseReq.append("bh_email", data.bh_email);
        this.raiseReq.append("emp_email", data.emp_email);
        this.raiseReq.append("emp_userName", data.emp_UserName);
        this.raiseReq.append("emp_phoneNo", data.emp_phoneNo);
        this.raiseReq.append("remark", data.remark);
        this.raiseReq.append("locationName", data.location);
        this.raiseReq.append("cost_id", data.cost_id);
        this.raiseReq.append("cost_center", data.cost_center);
        this.raiseReq.append("travelType", data.travelType);
        this.raiseReq.append("isactive", 'Y');
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
    ServiceProvider.prototype.raiseRequestAdmin = function (param, data) {
        this.raiseReq = new FormData();
        this.raiseReq.append("source", data.source);
        this.raiseReq.append("destination", data.destination);
        this.raiseReq.append("purpose", data.purpose);
        this.raiseReq.append("travel_date", data.travel_date);
        this.raiseReq.append("travel_time", data.travel_time);
        this.raiseReq.append("comment", data.remark);
        this.raiseReq.append("travelType", data.travelType);
        this.raiseReq.append("emp_userName", data.username);
        this.raiseReq.append("emp_phoneNo", data.usrphone);
        this.raiseReq.append("userID", data.usrID);
        this.raiseReq.append("cabid", data.cabs);
        this.raiseReq.append("vendorid", data.vendor);
        this.raiseReq.append("driverid", data.driver);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("in service ", this.raiseReq);
        console.log("in options ", options);
        return this.http.post(this.url + param, this.raiseReq, options);
    };
    ServiceProvider.prototype.getUsrRoleDetails = function (param, ivPernr) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param + "/" + ivPernr, options);
    };
    ServiceProvider.prototype.getDeptHeadUser = function (param, ivPernr) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + param + "/" + ivPernr, options);
    };
    ServiceProvider.prototype.getDriverTripDetails = function (params) {
        return this.http.get(this.url + params);
    };
    ServiceProvider.prototype.tripStart = function (params, cdate, type, id, km) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.tripDTO = new FormData();
        this.tripDTO.append("id", id);
        if (type == 'startTrip') {
            this.tripDTO.append("startTrip", cdate);
            this.tripDTO.append("startKm", km);
        }
        else {
            this.tripDTO.append("endTrip", cdate);
            this.tripDTO.append("endKm", km);
        }
        return this.http.post(this.url + params, this.tripDTO, options);
    };
    ServiceProvider.prototype.weblogin = function (params, username, pwd) {
        console.log("emp ", username);
        console.log("pwd ", pwd);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.lgnDTO = new FormData();
        this.lgnDTO.append('employeeId', username);
        this.lgnDTO.append('pwd', pwd);
        return this.http.post(this.url + params, this.lgnDTO, options);
    };
    ServiceProvider.prototype.saveScan = function (params, text) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + params + "/" + text, options);
    };
    ServiceProvider.prototype.getReqDetails = function (params, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + params + "/" + id, options);
    };
    ServiceProvider.prototype.cancelCab = function (params, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + params + "/" + id, options);
    };
    ServiceProvider.prototype.assignReq = function (params, tripID, cabs, driver, vendor, admincomment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.assignTripDto = new FormData();
        this.assignTripDto.append('tripId', tripID);
        this.assignTripDto.append('cabId', cabs);
        this.assignTripDto.append('driverId', driver);
        this.assignTripDto.append('vendorId', vendor);
        this.assignTripDto.append('admincomment', admincomment);
        return this.http.post(this.url + params, this.assignTripDto, options);
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

// https://appstore.mahindra.com/saml <https://appstore.mahindra.com/saml>
//# sourceMappingURL=service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(164);
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
                        message: msg || '',
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_qr_scanner__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_employee_empdashboard_empdashboard_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notification_detail_notification_detail_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_scan_scan_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_hod_hoddashboard_hoddashboard_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_hod_requesthistory_requesthistory_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_driver_driver_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_users_dashboard_users_dashboard_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_adminrequests_adminrequests_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_admin_aprvl_admin_aprvl_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic3_datepicker__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HttpClientModule } from '@angular/common/http';


// plugins




// import { FCM } from '@ionic-native/fcm';


//page




//hod Dashboard


//Driver page


//Admin page



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_17__pages_hod_hoddashboard_hoddashboard_module__["HoddashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_hod_requesthistory_requesthistory_module__["RequesthistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_users_dashboard_users_dashboard_module__["UsersDashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_adminrequests_adminrequests_module__["AdminrequestsPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_admin_aprvl_admin_aprvl_module__["AdminAprvlPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19__pages_driver_driver_module__["DriverPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_scan_scan_module__["ScanPageModule"],
                __WEBPACK_IMPORTED_MODULE_23_ionic3_datepicker__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    backButtonText: 'Back',
                    backButtonIcon: ''
                }, {
                    links: [
                        { loadChildren: '../pages/admin-aprvl/admin-aprvl.module#AdminAprvlPageModule', name: 'AdminAprvlPage', segment: 'admin-aprvl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver/driver.module#DriverPageModule', name: 'DriverPage', segment: 'driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hod/requesthistory/requesthistory.module#RequesthistoryPageModule', name: 'RequesthistoryPage', segment: 'requesthistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-detail/modal-detail.module#ModalDetailPageModule', name: 'ModalDetailPage', segment: 'modal-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-detail/notification-detail.module#NotificationDetailPageModule', name: 'NotificationDetailPage', segment: 'notification-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requestdetails/requestdetails.module#RequestdetailsPageModule', name: 'RequestdetailsPage', segment: 'requestdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users-dashboard/users-dashboard.module#UsersDashboardPageModule', name: 'UsersDashboardPage', segment: 'users-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adminrequests/adminrequests.module#AdminrequestsPageModule', name: 'AdminrequestsPage', segment: 'adminrequests', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hod/hoddashboard/hoddashboard.module#HoddashboardPageModule', name: 'HoddashboardPage', segment: 'hoddashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee/empdashboard/empdashboard.module#EmpdashboardPageModule', name: 'EmpdashboardPage', segment: 'empdashboard', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_common_common__["a" /* CommonProvider */],
                //  FCM,
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_qr_scanner__["a" /* QRScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_scan__ = __webpack_require__(178);
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
    function UsersDashboardPage(navCtrl, navParams, commonProvider, serviceProvider, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonProvider = commonProvider;
        this.serviceProvider = serviceProvider;
        this.qrScanner = qrScanner;
        this.userDetails = [];
        this.driverMobileNumber = '';
        this.securityCheck = '';
        this.scannig = false;
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
    UsersDashboardPage.prototype.showDashboard = function () {
        this.navCtrl.push('EmpdashboardPage', { 'EmployeeDetail': this.userDetails });
        //this.navCtrl.push('HoddashboardPage',{ 'EmployeeDetail': this.userDetails });
    };
    UsersDashboardPage.prototype.getTripDetails = function (status) {
        this.navCtrl.push('DriverPage', { 'pageOpen': status });
    };
    UsersDashboardPage.prototype.securityScan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* ScanPage */], {});
    };
    UsersDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-users-dashboard',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/users-dashboard/users-dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>(M&M)</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <section text-center class="bgclr bgimg">\n      <span class="icon-noimage-icon"></span>\n\n      <div class="header-content">\n        <h1 style="margin-top: 0rem !important;"><b>Welcome,</b> <br>\n          <b>Mr. {{userDetails.emp_f_name}} {{userDetails.emp_l_name}}</b></h1>\n        <span text-center class="userText">\n          <b> {{userDetails.emp_cost}}</b>\n        </span><br>\n        <span text-center class="userText">\n          <b> {{userDetails.emp_esg}}</b>\n        </span>\n      </div>\n    </section>\n  </ion-toolbar>\n</ion-header>\n<ion-content style="background-color: #7c8185c2;">\n  <ion-grid *ngIf="!driverMobileNumber && !securityCheck">\n    <ion-row>\n      <ion-col text-center (click)="showDashboard();">\n        <img src="assets/imgs/ani/bell2.png" alt="">\n        <span class="userText">Notifications</span>\n      </ion-col>\n      <ion-col text-center (click)="showDashboard();">\n        <img src="assets/imgs/ani/cab1.png" alt="">\n        <span class="userText">Cabs History</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col offset-3 col-6 text-center (click)="showDashboard();">\n        <img src="assets/imgs/ani/create1.png" alt="">\n        <span class="userText">Create Request</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf="driverMobileNumber">\n    <ion-row>\n      <ion-col text-center (click)="getTripDetails(\'tripPage\');">\n        <img class="height: 50%" src="assets/imgs/ani/create1.png" alt="">\n        <span class="userText">Trip Details</span>\n      </ion-col>\n      <ion-col text-center (click)="getTripDetails(\'ticketPage\');">\n        <img src="assets/imgs/ani/raise1.png" alt="">\n        <span class="userText">Scan Code</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf="securityCheck">\n    <ion-row (click)="securityScan();">\n      <ion-col offset-3 col-6 text-center (click)="securityScan();">\n        <img src="assets/imgs/ani/raise1.png" alt="">\n        <span class="userText">Scan Code</span>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/users-dashboard/users-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], UsersDashboardPage);
    return UsersDashboardPage;
}());

//# sourceMappingURL=users-dashboard.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { FCM } from '@ionic-native/fcm';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage: any = EmpdashboardPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.fcm.subscribeToTopic('/topics/all');
            // this.fcm.getToken().then(token => {
            // console.log("Device token from fcm is ", token)
            //})
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_empdashboard_empdashboard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hod_hoddashboard_hoddashboard__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adminrequests_adminrequests__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__driver_driver__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(83);
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
    function LoginPage(navCtrl, serviceProvider, commonProvider, iab, plt) {
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.commonProvider = commonProvider;
        this.iab = iab;
        this.plt = plt;
        this.isLoggedIn = false;
        this.users = [];
        this.loginToApp();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    LoginPage.prototype.createFormControls = function () {
        this.email = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](this.email, [
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].minLength(4)
        ]);
    };
    LoginPage.prototype.createForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormGroup */]({
            email: this.email,
            password: this.password
        });
    };
    LoginPage.prototype.loginToApp = function () {
        var _this = this;
        this.commonProvider.showLoader();
        var params = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["e" /* URLSearchParams */](window.location.href);
        var someParam = params.rawParams;
        this.userid = this.getQueryString('username', someParam);
        console.log("this.userid ", this.userid);
        if (this.userid) {
            this.userid = atob(this.userid);
            this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', this.userid).subscribe(function (response) {
                response = JSON.parse(response._body);
                console.log("response ", response);
                var str = response.emp_esg;
                if (str == "L5-Department Head" || str == "L6-Department Head" || str == "L7-Department Head" || str == "L4-Department Head") {
                    _this.commonProvider.hideLoader();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__hod_hoddashboard_hoddashboard__["a" /* HoddashboardPage */], { response: response });
                }
                else if (str == "L5-Managerial" || str == "L6-Managerial" || str == "L7-Managerial" || str == "L4-Managerial") {
                    _this.commonProvider.hideLoader();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__employee_empdashboard_empdashboard__["a" /* EmpdashboardPage */], { response: response });
                }
                else {
                    _this.commonProvider.hideLoader();
                    _this.commonProvider.showToast("User role band not maintained");
                }
            }, function (err) {
                _this.commonProvider.hideLoader();
                _this.commonProvider.showToast(err.message);
            });
        }
        else {
            this.commonProvider.hideLoader();
        }
    };
    LoginPage.prototype.loginAction = function () {
        var _this = this;
        console.log('this.loginForm ', this.email.value);
        if (this.password.value == 'driver' || this.password.value == 'Driver') {
            this.mobileNumber = this.email.value;
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__driver_driver__["a" /* DriverPage */], { 'driverNumber': this.mobileNumber });
        }
        else {
            this.commonProvider.showLoader('Please wait..');
            this.serviceProvider.weblogin('/login1', this.email.value, btoa(this.password.value)).subscribe(function (response) {
                console.log("response ", response);
                if (response._body == "Login success") {
                    _this.serviceProvider.getUsrRoleDetails('/getEmpDetailService', _this.email.value).subscribe(function (response) {
                        response = JSON.parse(response._body);
                        console.log("response ", response);
                        _this.commonProvider.hideLoader();
                        var str = response.emp_esg;
                        if (str == "L5-Department Head" || str == "L6-Department Head" || str == "L7-Department Head" || str == "L4-Department Head" || str == "HEAD-BUSINESS APPLICATION" || str == "L3-Executive") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__hod_hoddashboard_hoddashboard__["a" /* HoddashboardPage */], { response: response });
                            //this.navCtrl.setRoot(EmpdashboardPage, { response });
                        }
                        else if (str == "L5-Managerial" || str == "L6-Managerial" || str == "L7-Managerial" || str == "L4-Managerial") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__employee_empdashboard_empdashboard__["a" /* EmpdashboardPage */], { response: response });
                            //  this.navCtrl.setRoot(HoddashboardPage, { response });
                        }
                        else {
                            _this.commonProvider.showToast("User role is not allow to login");
                        }
                    });
                }
                else if (response._body == "false") {
                    _this.commonProvider.hideLoader();
                    _this.commonProvider.showToast("Please enter correct user credentials");
                }
                else {
                    _this.commonProvider.hideLoader();
                    response = JSON.parse(response._body);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__adminrequests_adminrequests__["a" /* AdminrequestsPage */], { response: response });
                }
            }, function (err) {
                _this.commonProvider.hideLoader();
                _this.commonProvider.showToast("Error while login");
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
    LoginPage.prototype.getQueryString = function (field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    };
    ;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/login/login.html"*/'<!-- <ion-header no-border>\n  <ion-navbar>\n    <ion-title text-center></ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="page-content">\n  <ion-grid class="gridSize">\n    <ion-row text-center>\n      <ion-col style="margin-top: 5%;">\n        <img src="assets/imgs/mahindra_logo_white.png" alt="" style="width: 61%;height: 75%;">\n      </ion-col>\n    </ion-row>\n    <ion-row text-center>\n      <ion-col>\n        <div class="reset-title">VEHICLE MANAGEMENT SYSTEM</div>\n      </ion-col>\n    </ion-row>\n\n\n    <form novalidate [formGroup]="loginForm" (ngSubmit)="loginAction()">\n      <!-- <ion-row text-center class="row-height" style="margin-top: 1%">\n        <ion-col class="input-height">\n          <input type="text" class="login-input1" formControlName="email" placeholder="Mobile number" required [style.background-color]="(!email.errors) ? \'#C24857\' : \'\'" [style.color]="(!email.errors) ? \'#f8f8f8\' : \'\'" />\n          <div class="form-control-feedback">\n            <p style="margin: 7px;font-family: font-medium; color: white; ">If your Driver login, please enter your mobile number here, otherwise click login button</p>\n          </div>\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row text-center class="row-height" style="margin-top: 1%">\n        <ion-col class="input-height">\n          <input type="email" class="login-input1" formControlName="email" placeholder="Username" required [style.background-color]="(!email.errors) ? \'#C24857\' : \'\'" [style.color]="(!email.errors) ? \'#f8f8f8\' : \'\'" />\n          <!-- <div class="form-control-feedback" *ngIf="email.errors && (email.dirty || email.touched)">\n            <p *ngIf="email.errors.pattern" style="margin: 7px;font-size: 12px">Please enter valid email</p>\n          </div> -->\n        </ion-col>\n      </ion-row>\n      <ion-row text-center class="row-height" style="margin-top: 7%">\n        <ion-col class="input-height">\n          <input type="password" class="login-input1" formControlName="password" [ngClass]="{\'typed\':password.length>1}" placeholder="Password" required [style.background-color]="(!password.errors) ? \'#C24857\' : \'\'" [style.color]="(!password.errors) ? \'#f8f8f8\' : \'\'" />\n          <!-- <div class="form-control-feedback" *ngIf="password.errors && (password.dirty || password.touched)">\n            <p *ngIf="password.errors.minlength" style="margin:7px;font-size: 12px">\n              Passsword must be at least 8 characters long.\n            </p>\n          </div> -->\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row text-center class="row-height">\n        <ion-col>\n          <p class="forgot-password">FORGOT PASSWORD?</p>\n        </ion-col>\n      </ion-row> -->\n      <ion-row text-center style="padding-top:7%">\n        <ion-col>\n          <button [ngClass]="{\'login-button\':(!email.errors),\'login-button-dynamic\':(email.errors)}">LOGIN\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_detail_notification_detail__ = __webpack_require__(168);
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
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <ion-list>\n   <ion-item (click)="showDetails()">\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n   <ion-item>\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n   <ion-item>\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n   <ion-item>\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n   <ion-item>\n      <span class="icon-directions_car" style="float:left"></span>\n      <p style="padding-left: 3px; color:#9b0c1a">Your request is Accepted</p>\n        <h6 style="color: #424242;padding-left: 22px;">Mon, Sep 03, 06:49AM</h6>\n        <h6 style="color: #424242;padding-left: 22px;">Micro . CRN 22312312</h6>\n   </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map