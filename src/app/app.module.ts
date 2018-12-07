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
import { ServiceProvider } from '../providers/service/service';
import { CommonProvider } from '../providers/common/common';
import { FCM } from '@ionic-native/fcm';
import { InAppBrowser} from '@ionic-native/in-app-browser';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

//page
import { EmpdashboardPageModule } from '../pages/employee/empdashboard/empdashboard.module';
import { NotificationPageModule } from '../pages/notification/notification.module';
import { NotificationDetailPageModule } from '../pages/notification-detail/notification-detail.module';
import { ScanPageModule } from '../pages/scan/scan.module';
//hod Dashboard
import { HoddashboardPageModule } from '../pages/hod/hoddashboard/hoddashboard.module';
import { RequesthistoryPageModule } from '../pages/hod/requesthistory/requesthistory.module';
//Driver page
import { DriverPageModule } from '../pages/driver/driver.module';
import { UsersDashboardPageModule } from '../pages/users-dashboard/users-dashboard.module';
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
    HttpModule,
    DriverPageModule,
    ScanPageModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    CommonProvider,
    FCM,
    Network,
    InAppBrowser,
    QRScanner

  ]
})
export class AppModule {}
