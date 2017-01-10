import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountLoginPage } from '../account-login/account-login';

@Component({
  selector: 'account-check',
  templateUrl: 'account-check.html'
})
export class AccountCheckPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountCheckPage');
  }

  viewCamb(): void {
    this.nav.push(AccountLoginPage);
  }

}
