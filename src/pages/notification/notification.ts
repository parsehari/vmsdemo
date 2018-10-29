import { Component } from '@angular/core';
import { IonicPage,AlertController, NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';
import { NotificationDetailPage } from '../notification-detail/notification-detail';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                private modal: ModalController,
                private alertCtrl: AlertController
            ) {

  }

  showDetails(){
      this.navCtrl.push(NotificationDetailPage, {});
  }



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

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
