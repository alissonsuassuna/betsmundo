import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountCheckPage } from '../pages/account-check/account-check';
/*
  Generated class for the AccountLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account-login',
  templateUrl: 'account-login.html'
})
export class AccountLoginPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountLoginPage');
  }

}
