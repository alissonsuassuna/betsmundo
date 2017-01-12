import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountCheckPage } from '../account-check/account-check';

@Component({
  selector: 'page-tab-games',
  templateUrl: 'tab-games.html'
})
export class TabGamesPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabGamesPage');
  }
  logout(): void{
    this.nav.push(AccountCheckPage);
  }

}
