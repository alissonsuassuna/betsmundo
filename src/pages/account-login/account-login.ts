import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountCheckPage } from '../account-check/account-check';
import { HomePage } from '../home/home';


@Component({
  selector: 'account-login',
  templateUrl: 'account-login.html'
})
export class AccountLoginPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  viewCheck(): void{
   this.nav.push(AccountCheckPage);
  }
  enterLogin(): void{
    this.nav.push(HomePage);
  }

}
