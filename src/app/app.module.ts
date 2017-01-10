import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AccountCheckPage } from '../pages/account-check/account-check';
import { AccountLoginPage } from '../pages/account-login/account-login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountCheckPage,
    AccountLoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountCheckPage,
    AccountLoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
