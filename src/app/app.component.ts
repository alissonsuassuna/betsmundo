import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AccountCheckPage } from '../pages/account-check/account-check';
import { AccountLoginPage } from '../pages/account-login/account-login';

import { JogosPage } from '../pages/jogos/jogos';
import { BilhetePage } from '../pages/bilhete/bilhete';
import { ApostasPage } from '../pages/apostas/apostas';
import { OpcoesPage } from '../pages/opcoes/opcoes';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = AccountCheckPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
