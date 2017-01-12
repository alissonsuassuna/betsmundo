import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AccountCheckPage } from '../pages/account-check/account-check';
import { AccountLoginPage } from '../pages/account-login/account-login';

import { TabGamesPage } from '../pages/tab-games/tab-games';
import { TabTicketsPage } from '../pages/tab-tickets/tab-tickets';
import { TabCouponPage } from '../pages/tab-coupon/tab-coupon';
import { TabConfigPage } from '../pages/tab-config/tab-config';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountCheckPage,
    AccountLoginPage,
    TabGamesPage,
    TabTicketsPage,
    TabCouponPage,
    TabConfigPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountCheckPage,
    AccountLoginPage,
    TabGamesPage,
    TabTicketsPage,
    TabCouponPage,
    TabConfigPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
