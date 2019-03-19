import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';
import { CommonProvider } from '../../../providers/common/common';
import { AdminAprvlPage } from '../../admin-aprvl/admin-aprvl';
/**
 * Generated class for the AdminHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-history',
  templateUrl: 'admin-history.html',
})
export class AdminHistoryPage {

  userDetails: any = [];
  tripHistory: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public serviceProvider: ServiceProvider,
    public commonProvider: CommonProvider,
    public modal: ModalController
  ) {

    //this.loadUserData();
  }

  ionViewWillEnter() {
    this.loadUserData();
  }
  loadUserData() {
    this.userDetails = this.navParams.get('EmployeeDetail');
    this.commonProvider.showLoader('');
    this.serviceProvider.getAllTripHistory('/getAllApprovedTripRequest/adminMobile', this.userDetails.location.id).subscribe((response: any) => {
      this.tripHistory = JSON.parse(response._body);
      this.commonProvider.hideLoader();
    },
      (err) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast(err.message);
      });
  }

  openDetail(obj: any) {
    const myModal = this.modal.create('ModalDetailPage', { data: obj });
    myModal.present();
  }

  editRequest(event: any, obj: any) {
    this.navCtrl.push(AdminAprvlPage, { viewData: obj, adminLocation: this.userDetails.location.id, adminID: this.userDetails.id, viewName: 'editRequest' })
  }
}
