import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecretaryHistoryPage } from './secretary-history';

@NgModule({
  declarations: [
    SecretaryHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SecretaryHistoryPage),
  ],
})
export class SecretaryHistoryPageModule { }
