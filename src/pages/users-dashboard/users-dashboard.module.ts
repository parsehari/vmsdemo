import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersDashboardPage } from './users-dashboard';

@NgModule({
  declarations: [
    UsersDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersDashboardPage),
  ],
})
export class UsersDashboardPageModule {}
