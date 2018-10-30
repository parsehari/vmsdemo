import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from  '@angular/http';
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
  private url = 'http://mmkndmobdev.corp.mahindra.com';
//  private url = 'http://10.174.55.169:8080';
  raiseReq:any;

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getBookingHistory(param: any): Observable<any> {
    var headers =  new Headers({ 'Content-Type': 'application/json' });
  //  headers.append()
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.url+param + "/" + 'chowza-cont', options );
      //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
  }

  getAllLocations(param: any): Observable<any> {
    var headers =  new Headers({ });
  //  headers.append()
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.url+param );
      //    return this.http.get('http://127.0.0.1:3000' + param + "?email=" + data.email + "&pwd=" + data.pwd,  {headers: this.headers});
  }

  getApprovalList(param: any):Observable<any>{
    var headers = new Headers({});
    var options =  new RequestOptions({headers: headers});
    return this.http.get(this.url+param);
  }

  raiseRequest(param: any, data: any, datastatus: any = "default"): Observable<any>{
  //  var params = "userID=" + data.userID + "&source=" + data.userID + "&destination=" + data.destination + "&purpose=" + data.purpose +"&travel_date="+ data.travel_date +"&travel_time"+ data.travel_time;
  console.log("datastatus ",datastatus);
    this.raiseReq = new FormData();
    this.raiseReq.append("userID", data.userID);
    this.raiseReq.append("source", data.source);
    this.raiseReq.append("destination", data.destination);
    this.raiseReq.append("purpose", data.purpose);
    this.raiseReq.append("travel_date", data.travel_date);
    this.raiseReq.append("travel_time", data.travel_time);

    if(datastatus == "hodAction"){
      this.raiseReq.append("id", data.id);
      this.raiseReq.append("status", data.status);
      this.raiseReq.append("modified_by", data.modified_by);
    }

    let headers = new Headers({ });
    let options = new RequestOptions({ headers: headers });
    console.log("in service ",this.raiseReq)
    console.log("in options ",options)
    return this.http.post(this.url + param, this.raiseReq,options)

  }

}
