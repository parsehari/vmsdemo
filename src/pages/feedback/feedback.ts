import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  ratingComment: any;
  ratingValue: any;
  islowRateing: any = false;
  tripDataObj: any;
  tripDetail: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public commonProvider: CommonProvider,
    public serviceProvider: ServiceProvider,
    public view: ViewController,
  ) {
    this.tripDataObj = this.navParams.get('tripObj');
    this.tripDataObj = JSON.parse(this.tripDataObj._body);
    this.tripDetail = this.tripDataObj[0];
    console.log('trip datatripDataObj ', this.tripDetail);
  }

  postRating(val: any, reason: any) {
    if (val <= '3') {
      this.islowRateing = true;
    } else {
      this.islowRateing = false;
      this.submitFeedback(val);
    }
  }

  submitFeedback(ratings: any, reason = null) {
    this.commonProvider.showLoader();
    if (this.commonProvider.vapt) {
      let reqData = { "id": this.tripDataObj[0].id, "feedbackRating": ratings, "feedbackComment": reason }
      this.serviceProvider.post('/submitEmployeeFeedback', reqData).then((response: any) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast("Thank you for your feedback");
        this.view.dismiss();
      }, (error) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast("Error in update rating");
      })
    } else {
      this.serviceProvider.submitRating('/submitEmployeeFeedback', this.tripDataObj[0].id, ratings, reason).subscribe((response: any) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast("Thank you for your feedback");
        this.view.dismiss();
      }, (error) => {
        this.commonProvider.hideLoader();
        this.commonProvider.showToast("Error in update rating");
      })
    }
  }

  ionViewDidLoad() {
  }

}
