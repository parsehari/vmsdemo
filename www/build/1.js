webpackJsonp([1],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDetailPageModule", function() { return ModalDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_detail__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalDetailPageModule = /** @class */ (function () {
    function ModalDetailPageModule() {
    }
    ModalDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_detail__["a" /* ModalDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_detail__["a" /* ModalDetailPage */]),
            ],
        })
    ], ModalDetailPageModule);
    return ModalDetailPageModule;
}());

//# sourceMappingURL=modal-detail.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(64);
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
 * Generated class for the ModalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalDetailPage = /** @class */ (function () {
    function ModalDetailPage(navCtrl, navParams, view, events, callnumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.events = events;
        this.callnumber = callnumber;
        this.events.subscribe('closeModalev', function () {
            _this.view.dismiss();
        });
    }
    ModalDetailPage.prototype.ionViewWillLoad = function () {
        this.tripDetail = this.navParams.get('data');
        if (this.navParams.get('viewName')) {
            this.viewName = this.navParams.get('viewName');
        }
        console.log("viewName ", this.viewName);
        console.log('ionViewDidLoad ModalDetailPage', this.tripDetail);
        this.srcSubstr = this.tripDetail.source.substring(0, 3);
        this.destSubstr = this.tripDetail.destination.substring(0, 3);
    };
    ModalDetailPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalDetailPage.prototype.reqAction = function (ev, status) {
        this.events.publish('actionReq', ev, status, this.tripDetail);
    };
    ModalDetailPage.prototype.callnum = function (num) {
        console.log("inside call number function");
        this.callnumber.callNumber(num, true).then(function (res) {
            return console.log('Dialer opened', res);
        }).catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ModalDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-detail',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/modal-detail/modal-detail.html"*/'<ion-header>\n  <ion-navbar color="navColor">\n    <ion-title text-center>Request Details</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        Close\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar style="color: white;">\n    <ion-row>\n      <ion-col text-center>\n        <span>\n          {{srcSubstr}}\n        </span><br>\n        <!-- <span style="font-size: 1.5em;font-weight: bold;">{{tripDetail.source}} </span> -->\n        <span style="font-size: 1.5em;font-weight: bold;">{{tripDetail.pickupPoint}} </span>\n      </ion-col>\n      <ion-col text-center>\n        <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_date}}</span><br>\n        <span class="icon-automobile" style="font-size: 1.5em"></span><br>\n        <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_time}}</span>\n      </ion-col>\n      <ion-col text-center>\n        <span>\n          {{destSubstr}}\n        </span><br>\n        <span style="font-size: 1.5em;font-weight: bold;"> {{tripDetail.destination}} </span>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n\n    <ion-card class="driverCard">\n      <ion-card-header style="text-align: center" color="red">\n        <span *ngIf=" tripDetail.isRoundTrip == \'Yes\'">Round Trip</span>\n        <span *ngIf=" tripDetail.isRoundTrip == \'No\'">One Way</span>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Pick up point</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.pickupPoint}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">My Location</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.source}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Purpose</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.purpose}}\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="tripDetail.remark != null">\n          <ion-col>\n            <span class="formtitle">Remark</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.remark}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Employee Name</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_userName}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Employee Location</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.source}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Mobile Number</span>\n          </ion-col>\n          <!-- <ion-col (click)="callnum(tripDetail.emp_phoneNo);" style="text-decoration: underline blue;">\n            {{tripDetail.emp_phoneNo}}\n          </ion-col> -->\n          <ion-col (click)="callnum(tripDetail.emp_phoneNo);">\n            <u style="color: blue;">{{tripDetail.emp_phoneNo}}\n            </u>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Email Id</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_email}}\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="tripDetail.isRoundTrip == \'Yes\'">\n          <ion-col>\n            <span class="formtitle">Return Date</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.returnDate}}\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="tripDetail.isRoundTrip == \'Yes\'">\n          <ion-col>\n            <span class="formtitle">Return Time</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.returnTime}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Status</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.status}} {{tripDetail.bh_UserName}}\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="tripDetail.comment != null">\n          <ion-col>\n            <span class="formtitle">Comment</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.comment}}\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="driverCard" *ngIf="tripDetail.cab">\n      <ion-card-header style="text-align: center" color="red">\n        Cab Details</ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Cab Name</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.cab.cab_name}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Cab Number</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.cab.cab_no}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Number of seats</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.cab.no_of_seats}}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="driverCard" *ngIf="tripDetail.driver">\n      <ion-card-header style="text-align: center" color="red">\n        Driver Details</ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Driver Name</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.driver.first_name}} {{ tripDetail.driver.last_name }}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Driver Number</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.driver.mobile_no}}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <div *ngIf="viewName == \'hodView\'">\n      <ion-row text-center class="row-height" style="margin-top: 1%">\n        <ion-col>\n          <button ion-button outline small="true" solid="true" style="background-color: #398b00;" (click)="reqAction($event,\'Pending with Admin\');">Accept\n          </button>\n          <button ion-button outline small="true" solid="true" style="background-color: #ca3636;" (click)="reqAction($event,\'Rejected\');">Decline\n          </button>\n        </ion-col>\n        <!-- <button text-center ion-button outline small="true" solid="true" style="background-color: #398b00;" (click)="reqAction($event,\'Pending with Admin\');">Accept</button>\n        <button text-center ion-button outline small="true" solid="true" style="background-color: #ca3636;" (click)="reqAction($event,\'Rejected\');">Decline</button> -->\n      </ion-row>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/modal-detail/modal-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], ModalDetailPage);
    return ModalDetailPage;
}());

//# sourceMappingURL=modal-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map