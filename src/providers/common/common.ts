//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  loader: any;
  toaster: any;
  loading: any = false;
  isOnline: boolean = true;
  vapt: boolean = true;
  accessToken: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toast: ToastController,
    public alertCtrl: AlertController,
    public network: Network
  ) {
    this.network.onConnect().subscribe(data => {
      this.displayNetworkUpdate(data.type);
    }, (error) => {
      return;
    });
    this.network.onDisconnect().subscribe(data => {
      this.displayNetworkUpdate(data.type);
    }, (error) => {
      return;
    });
  }

  showLoader(msg?) {
    if (!this.loading) {
      this.loader = this.loadingCtrl.create({
        content: msg || ''
      });
      this.loading = true;
      this.loader.present();
    } else {
      return;
    }
  }

  hideLoader() {
    if (this.loading) {
      this.loader.dismiss();
      this.loading = false;
    } else {
      return;
    }
  }

  showToast(msg, time?) {
    this.toaster = this.toast.create({
      message: msg,
      duration: time || 2000,
      position: 'bottom'
    });
    this.toaster.onDidDismiss(() => {
      return;
    });
    this.toaster.present()
  }

  public Alert = {
    confirm: (msg?, title?) => {
      return new Promise((resolve, reject) => {
        let alert = this.alertCtrl.create({
          title: title || 'Confirm',
          message: msg || '',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                reject(false);
              }
            },
            {
              text: 'Ok',
              handler: () => {
                resolve(true);
              }
            }
          ]
        });
        alert.present();
      });

    },
    alert: (msg, title?) => {
      let alert = this.alertCtrl.create({
        title: title || 'Alert',
        subTitle: msg,
        buttons: ['Dismiss']
      });
      alert.present();
    }
  };

  displayNetworkUpdate(connectionState: string) {
    if (connectionState == 'online') {
      this.isOnline = true;
    } else {
      this.isOnline = false;
    }
    this.showToast('You are now ' + connectionState, 2500);
  }

}
