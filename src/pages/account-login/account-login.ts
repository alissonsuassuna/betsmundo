import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountCheckPage } from '../account-check/account-check';

/*
  Generated class for the AccountLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'account-login',
  templateUrl: 'account-login.html'
})
export class AccountLoginPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  viewCheck(): void{
   this.nav.push(AccountCheckPage);
   console.log("passou")
  }

}
