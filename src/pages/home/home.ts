import { Component } from '@angular/core';

import { TabGamesPage } from '../tab-games/tab-games';
import { TabTicketsPage } from '../tab-tickets/tab-tickets';
import { TabCouponPage } from '../tab-coupon/tab-coupon';
import { TabConfigPage } from '../tab-config/tab-config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = TabGamesPage;
  tab2Root: any = TabTicketsPage;
  tab3Root: any = TabCouponPage;
  tab4Root: any = TabConfigPage;

  constructor(){

  }
}