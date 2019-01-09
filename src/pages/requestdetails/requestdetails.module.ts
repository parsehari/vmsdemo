import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestdetailsPage } from './requestdetails';

@NgModule({
  declarations: [
    RequestdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestdetailsPage),
  ],
})
export class RequestdetailsPageModule {}
