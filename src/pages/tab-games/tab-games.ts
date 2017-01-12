import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';

import { AccountCheckPage } from '../account-check/account-check';

@Component({
  selector: 'page-tab-games',
  templateUrl: 'tab-games.html'
})
export class TabGamesPage {

  constructor(public nav: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabGamesPage');
  }
  logout(): void{
    let confirm = this.alertCtrl.create({
      title: 'deseja realmente sair?',
      message: 'Clicando no botão sair, você voltara para a tela de login',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sair',
          handler: () => {
            this.nav.push(AccountCheckPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
