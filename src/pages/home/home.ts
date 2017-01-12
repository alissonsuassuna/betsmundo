import { Component } from '@angular/core';

import { TabGamesPage } from '../tab-games/tab-games';
import { TabTicketsPage } from '../tab-tickets/tab-tickets';
import { ApostasPage } from '../apostas/apostas';
import { OpcoesPage } from '../opcoes/opcoes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = TabGamesPage;
  tab2Root: any = TabTicketsPage;
  tab3Root: any = ApostasPage;
  tab4Root: any = OpcoesPage;

  constructor(){

  }
}