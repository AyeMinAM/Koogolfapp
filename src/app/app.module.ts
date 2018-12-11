import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { AboutPage } from '../pages/about/about';
import { MePage } from '../pages/me/me';
import { PrebookteePage } from '../pages/prebooktee/prebooktee';
import { TabsPage } from '../pages/tabs/tabs';
import {PrebookteedetailPage} from "../pages/prebookteedetail/prebookteedetail";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountProvider } from '../providers/account/account';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MePage,
    PrebookteePage,
    PrebookteedetailPage,
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
    AboutPage,
    MePage,
    PrebookteePage,
    PrebookteedetailPage,
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
