import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  // header for json/content-type

  //private url = 'https://gmc.mahindra.com/vms';
  private url = 'https://mapps.mahindra.com/vms';
  //public url = 'http://10.174.55.66:8080/vms';

  raiseReq: any;
  tripDTO: any;
  lgnDTO: any;
  assignTripDto: any;


  constructor(public http: Http,
    public ahttp: HTTP

  ) {

  }

  getBookingHistory(param: any, usrID: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + param + "/" + usrID, options);
  }

  getAllTripHistory(param: any, usrID: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + param + "/" + usrID, options);
  }

  getAllLocations(param: any): Observable<any> {
    return this.http.get(this.url + param);
  }

  getApprovalList(param: any, uid: any): Observable<any> {
    return this.http.get(this.url + param + "/" + uid);
  }

  raiseRequest(param: any, data: any, datastatus: any = "default"): Observable<any> {

    this.raiseReq = new FormData();
    this.raiseReq.append("userID", data.userID);
    this.raiseReq.append("source", data.source);
    this.raiseReq.append("destination", data.destination);
    this.raiseReq.append("pickupPoint", data.pickpoint);
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
    this.raiseReq.append("isRoundTrip", data.isRoundTrip);
    this.raiseReq.append("returnDate", data.returnDate);
    this.raiseReq.append("returnTime", data.returnTime);

    this.raiseReq.append("isactive", 'Y');


    if (datastatus == "hodAction") {
      this.raiseReq.append("id", data.id);
      this.raiseReq.append("modifiedby", data.modified_by);
      this.raiseReq.append("comment", data.comment);
    }
    let headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + param, this.raiseReq, options);
  }

  raiseRequestAdmin(param: any, data: any): Observable<any> {

    this.raiseReq = new FormData();
    this.raiseReq.append("source", data.source);
    this.raiseReq.append("destination", data.destination);
    this.raiseReq.append("pickupPoint", data.pickpoint);
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
    this.raiseReq.append("isRoundTrip", data.isRoundTrip);
    this.raiseReq.append("returnDate", data.returnDate);
    this.raiseReq.append("returnTime", data.returnTime);
    this.raiseReq.append("adminapproverId", data.adminapproverId);


    let headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + param, this.raiseReq);
  }

  getUsrRoleDetails(param: any, ivPernr: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + param + "/" + ivPernr, options);
  }

  getDeptHeadUser(param: any, ivPernr: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + param + "/" + ivPernr, options);
  }

  getDriverTripDetails(params: any): Observable<any> {
    return this.http.get(this.url + params);
  }

  tripStart(params: any, cdate: any, type: any, id: any, km: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    this.tripDTO = new FormData();
    this.tripDTO.append("id", id);
    if (type == 'startTrip') {
      this.tripDTO.append("startTrip", cdate);
      this.tripDTO.append("startKm", km);
    } else {
      this.tripDTO.append("endTrip", cdate);
      this.tripDTO.append("endKm", km);
    }

    return this.http.post(this.url + params, this.tripDTO, options);
  }

  weblogin(params: any, username: any, pwd: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });

    this.lgnDTO = new FormData();
    this.lgnDTO.append('employeeId', username);
    this.lgnDTO.append('pwd', pwd);

    return this.http.post(this.url + params, this.lgnDTO, options)
  }

  saveScan(params: any, text: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + params + "/" + text, options)
  }

  getReqDetails(params: any, id: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + params + "/" + id, options)
  }

  cancelCab(params: any, id: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + params + "/" + id, options)

  }

  assignReq(params: any, tripID: any, cabs: any, driver: any, vendor: any, admincomment: any, adminId: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    this.assignTripDto = new FormData();
    this.assignTripDto.append('tripId', tripID);
    this.assignTripDto.append('cabId', cabs);
    this.assignTripDto.append('driverId', driver);
    this.assignTripDto.append('vendorId', vendor);
    this.assignTripDto.append('admincomment', admincomment);
    this.assignTripDto.append('adminapproverId', adminId);

    return this.http.post(this.url + params, this.assignTripDto, options);
  }

  submitRating(params: any, tripId: any, ratings: any, reason: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    this.tripDTO = new FormData();
    this.tripDTO.append('id', tripId);
    this.tripDTO.append('feedbackRating', ratings);
    this.tripDTO.append('feedbackComment', reason);
    return this.http.post(this.url + params, this.tripDTO, options);
  }

  adminCancelReq(params: any, cmnt: any, tripId: any, adminId: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    this.tripDTO = new FormData();
    this.tripDTO.append('tripId', tripId);
    this.tripDTO.append('adminapproverId', adminId);
    this.tripDTO.append('rejectComment', cmnt);
    return this.http.post(this.url + params, this.tripDTO, options);
  }

  getAllReq() {

  }

  public get(url: any, params?: any, options: any = {}) {
    return new Promise(resolve => {
      let responseData: any;
      this.ahttp.setSSLCertMode("nocheck").then((data) => {
        this.ahttp.setDataSerializer('json');
        this.ahttp.get(this.url + url, params, {}).then(resp => {
          console.log("response ", resp);
          responseData = options.responseType == 'text' ? resp.data : JSON.parse(resp.data);
          resolve(responseData);
        }, (err) => {
          resolve(err);
        });
      }).catch((err) => {
        console.log("catch error ", err);
        resolve(err);
      });
    });
  }

  post(url: any, params?: any, options: any = {}) {
    return new Promise(resolve => {
      this.ahttp.setSSLCertMode("nocheck").then((data) => {
        this.ahttp.setDataSerializer('json');
        this.ahttp.post(this.url + url, params, {}).then(resp => {
          console.log("response ", resp);
          resolve(options.responseType == 'text' ? resp.data : JSON.parse(resp.data));
        }, (err) => {
          console.log("error ", err);
          resolve(err);
        });
      }).catch((err) => {
        console.log("catch error ", err);
        resolve(err);
      });
    });
  }

}
