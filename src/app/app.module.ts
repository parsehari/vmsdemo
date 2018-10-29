import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network';
import { HttpModule } from '@angular/http';

// plugins
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { Facebook } from '@ionic-native/facebook'
import { ServiceProvider } from '../providers/service/service';
import { CommonProvider } from '../providers/common/common';
import { FCM } from '@ionic-native/fcm';

//page
import { EmpdashboardPageModule } from '../pages/employee/empdashboard/empdashboard.module';
import { NotificationPageModule } from '../pages/notification/notification.module';
import { NotificationDetailPageModule } from '../pages/notification-detail/notification-detail.module';
//hod Dashboard
import { HoddashboardPageModule } from '../pages/hod/hoddashboard/hoddashboard.module';
import { RequesthistoryPageModule } from '../pages/hod/requesthistory/requesthistory.module';
//Driver page
import { DriverPageModule } from '../pages/driver/driver.module';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
  //  HttpClientModule,
    EmpdashboardPageModule,
    NotificationPageModule,
    NotificationDetailPageModule,
    HoddashboardPageModule,
    RequesthistoryPageModule,
    HttpModule,
    DriverPageModule,

    IonicModule.forRoot(MyApp,{
      backButtonText: 'Back',
      backButtonIcon: ''
    })


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    CommonProvider,
    FCM,
    Network
  ]
})
export class AppModule {}
