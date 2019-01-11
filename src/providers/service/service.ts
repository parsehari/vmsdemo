import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
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

  private url = 'https://mapps.mahindra.com/vms';
  //private url = 'http://10.174.55.86:8080/vms';

  raiseReq: any;
  tripDTO: any;
  lgnDTO: any;
  assignTripDto: any;

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getBookingHistory(param: any, usrID: any): Observable<any> {
    var headers = new Headers({});
    //  headers.append()
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + param + "/" + usrID, options);
    //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
  }

  getAllTripHistory(param: any, usrID: any): Observable<any> {
    var headers = new Headers({});
    //  headers.append()
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + param + "/" + usrID, options);
    //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
  }

  getAllLocations(param: any): Observable<any> {
    return this.http.get(this.url + param);
    //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
  }

  getApprovalList(param: any, uid: any): Observable<any> {
    return this.http.get(this.url + param + "/" + uid);
  }

  raiseRequest(param: any, data: any, datastatus: any = "default"): Observable<any> {
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

    let headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    console.log("in service ", this.raiseReq)
    console.log("in options ", options)
    return this.http.post(this.url + param, this.raiseReq, options);

  }

  raiseRequestAdmin(param: any, data: any): Observable<any> {

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

    let headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    console.log("in service ", this.raiseReq)
    console.log("in options ", options)
    return this.http.post(this.url + param, this.raiseReq, options);

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
    console.log("emp ", username)
    console.log("pwd ", pwd)
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

  assignReq(params: any, tripID: any, cabs: any, driver: any, vendor: any, admincomment: any): Observable<any> {
    var headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    this.assignTripDto = new FormData();
    this.assignTripDto.append('tripId', tripID);
    this.assignTripDto.append('cabId', cabs);
    this.assignTripDto.append('driverId', driver);
    this.assignTripDto.append('vendorId', vendor);
    this.assignTripDto.append('admincomment', admincomment);

    return this.http.post(this.url + params, this.assignTripDto, options);
  }

}


// https://appstore.mahindra.com/saml <https://appstore.mahindra.com/saml>
