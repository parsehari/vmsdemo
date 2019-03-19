import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the ModalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-detail',
  templateUrl: 'modal-detail.html',
})
export class ModalDetailPage {
  tripDetail: any;
  srcSubstr: any;
  destSubstr: any;
  viewName: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    public events: Events,
    public callnumber: CallNumber
  ) {

    this.events.subscribe('closeModalev', () => {
      this.view.dismiss();
    })

  }


  ionViewWillLoad() {
    this.tripDetail = this.navParams.get('data');
    if (this.navParams.get('viewName')) {
      this.viewName = this.navParams.get('viewName');

    }
    this.srcSubstr = this.tripDetail.source.substring(0, 3);
    this.destSubstr = this.tripDetail.destination.substring(0, 3);
  }

  closeModal() {
    this.view.dismiss();
  }

  reqAction(ev: any, status: any) {
    this.events.publish('actionReq', ev, status, this.tripDetail);
  }

  callnum(num: any) {
    this.callnumber.callNumber(num, true).then(res => {
      return;
    }).catch(err => {
      return;
    });
  }


}
