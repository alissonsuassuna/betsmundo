import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AccountCheckPage } from '../pages/account-check/account-check';
import { AccountLoginPage } from '../pages/account-login/account-login';

import { JogosPage } from '../pages/jogos/jogos';
import { BilhetePage } from '../pages/bilhete/bilhete';
import { ApostasPage } from '../pages/apostas/apostas';
import { OpcoesPage } from '../pages/opcoes/opcoes';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountCheckPage,
    AccountLoginPage,
    JogosPage,
    BilhetePage,
    ApostasPage,
    OpcoesPage
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
    JogosPage,
    BilhetePage,
    ApostasPage,
    OpcoesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
