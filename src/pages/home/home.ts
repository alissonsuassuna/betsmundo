import { Component } from '@angular/core';
import { JogosPage } from '../jogos/jogos';
import { BilhetePage } from '../bilhete/bilhete';
import { ApostasPage } from '../apostas/apostas';
import { OpcoesPage } from '../opcoes/opcoes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = JogosPage;
  tab2Root: any = BilhetePage;
  tab3Root: any = ApostasPage;
  tab4Root: any = OpcoesPage;

  constructor(){

  }
}