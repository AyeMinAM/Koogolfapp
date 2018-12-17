import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { MePage } from '../pages/me/me';
import { PrebookteePage } from '../pages/prebooktee/prebooktee';
import { TabsPage } from '../pages/tabs/tabs';
// import {PrebookteedetailPage} from "../pages/prebooktee/prebookteedetail/prebookteedetail";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountProvider } from '../providers/account/account';
import {HomePage} from "../pages/home/home";
import {CalenderPage} from "../pages/calender/calender";


@NgModule({
  declarations: [
    MyApp,
    MePage,
    PrebookteePage,
    HomePage,
    // PrebookteedetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MePage,
    PrebookteePage,
    CalenderPage,
    // PrebookteedetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountProvider
  ]
})
export class AppModule {}
