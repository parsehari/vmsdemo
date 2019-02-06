import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

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
    public events: Events) {

    this.events.subscribe('closeModalev', () => {
      this.view.dismiss();
    })

  }


  ionViewWillLoad() {
    this.tripDetail = this.navParams.get('data');
    if (this.navParams.get('viewName')) {
      this.viewName = this.navParams.get('viewName');

    }
    console.log("viewName ", this.viewName);
    console.log('ionViewDidLoad ModalDetailPage', this.tripDetail);
    this.srcSubstr = this.tripDetail.source.substring(0, 3);
    this.destSubstr = this.tripDetail.destination.substring(0, 3);
  }

  closeModal() {
    this.view.dismiss();
  }

  reqAction(ev, status: any) {
    this.events.publish('actionReq', ev, status, this.tripDetail);
  }


}
