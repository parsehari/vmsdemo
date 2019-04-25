import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackPage } from './feedback';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    FeedbackPage,
  ],
  imports: [
    Ionic2RatingModule,
    IonicPageModule.forChild(FeedbackPage),
  ],
})
export class FeedbackPageModule {}
