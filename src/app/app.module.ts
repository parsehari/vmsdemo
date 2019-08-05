import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';

// plugins
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ServiceProvider } from '../providers/service/service';
import { CommonProvider } from '../providers/common/common';
// import { FCM } from '@ionic-native/fcm';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { CallNumber } from '@ionic-native/call-number';
//page
import { EmpdashboardPageModule } from '../pages/employee/empdashboard/empdashboard.module';
import { NotificationPageModule } from '../pages/notification/notification.module';
import { TermsconditionPageModule } from '../pages/termscondition/termscondition.module';
import { NotificationDetailPageModule } from '../pages/notification-detail/notification-detail.module';
import { ScanPageModule } from '../pages/scan/scan.module';

//hod Dashboard
import { HoddashboardPageModule } from '../pages/hod/hoddashboard/hoddashboard.module';
import { RequesthistoryPageModule } from '../pages/hod/requesthistory/requesthistory.module';
//Driver page
import { DriverPageModule } from '../pages/driver/driver.module';
import { UsersDashboardPageModule } from '../pages/users-dashboard/users-dashboard.module';
//Admin page
import { AdminrequestsPageModule } from '../pages/adminrequests/adminrequests.module';
import { AdminHistoryPageModule } from '../pages/adminrequests/admin-history/admin-history.module';
import { AdminAprvlPageModule } from '../pages/admin-aprvl/admin-aprvl.module';
import { SecretaryPageModule } from '../pages/secretary/secretary.module';
import { SecretaryHistoryPageModule } from '../pages/secretary/secretary-history/secretary-history.module';


import { FeedbackPageModule } from '../pages/feedback/feedback.module';

import { DatePickerModule } from 'ionic3-datepicker';


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
    UsersDashboardPageModule,
    AdminrequestsPageModule,
    AdminHistoryPageModule,
    TermsconditionPageModule,
    AdminAprvlPageModule,
    HttpModule,
    DriverPageModule,
    ScanPageModule,
    DatePickerModule,
    FeedbackPageModule,
    SecretaryPageModule,
    SecretaryHistoryPageModule,
    IonicModule.forRoot(MyApp, {
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiceProvider,
    CommonProvider,
    //  FCM,
    Network,
    InAppBrowser,
    QRScanner,
    CallNumber,
    HTTP


  ]
})
export class AppModule { }
