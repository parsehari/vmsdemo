webpackJsonp([1],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDetailPageModule", function() { return ModalDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_detail__ = __webpack_require__(312);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_detail__["a" /* ModalDetailPage */]),
            ],
        })
    ], ModalDetailPageModule);
    return ModalDetailPageModule;
}());

//# sourceMappingURL=modal-detail.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetailPage; });
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
 * Generated class for the ModalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalDetailPage = /** @class */ (function () {
    function ModalDetailPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    ModalDetailPage.prototype.ionViewWillLoad = function () {
        this.tripDetail = this.navParams.get('data');
        console.log('ionViewDidLoad ModalDetailPage', this.tripDetail);
        this.srcSubstr = this.tripDetail.source.substring(0, 3);
        this.destSubstr = this.tripDetail.destination.substring(0, 3);
    };
    ModalDetailPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-detail',template:/*ion-inline-start:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/modal-detail/modal-detail.html"*/'<ion-header>\n  <ion-navbar color="navColor">\n    <ion-title text-center>Request Details</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        Close\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar style="color: white;">\n    <ion-row>\n      <ion-col text-center>\n        <span>\n          {{srcSubstr}}\n        </span><br>\n        <span style="font-size: 1.5em;font-weight: bold;">{{tripDetail.source}} </span>\n      </ion-col>\n      <ion-col text-center>\n        <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_date}}</span><br>\n        <span class="icon-automobile" style="font-size: 1.5em"></span><br>\n        <span style="font-size: 1.0em;font-weight: bold;">{{tripDetail.travel_time}}</span>\n      </ion-col>\n      <ion-col text-center>\n        <span>\n          {{destSubstr}}\n        </span><br>\n        <span style="font-size: 1.5em;font-weight: bold;"> {{tripDetail.destination}} </span>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n\n    <ion-card class="driverCard">\n      <ion-card-header style="text-align: center" color="red">\n        Request Details</ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Purpose</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.purpose}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Remark</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.remark}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Employee Name</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_userName}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Employee Location</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_location}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Mobile Number</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_phoneNo}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Email Id</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.emp_email}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="formtitle">Status</span>\n          </ion-col>\n          <ion-col>\n            {{tripDetail.status}} {{tripDetail.bh_UserName}}\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/Apple/Desktop/mahindraApps/VMS/src/pages/modal-detail/modal-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], ModalDetailPage);
    return ModalDetailPage;
}());

//# sourceMappingURL=modal-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map