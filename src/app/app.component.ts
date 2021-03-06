import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { FCM } from '@ionic-native/fcm';
import { LoginPage } from '../pages/login/login';
import { EmpdashboardPage } from '../pages/employee/empdashboard/empdashboard';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage: any = EmpdashboardPage;
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.fcm.subscribeToTopic('/topics/all');
      // this.fcm.getToken().then(token => {
      // console.log("Device token from fcm is ", token)
      //})
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
