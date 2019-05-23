import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalaService } from '../../app/sala.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  salas;

  constructor(public navCtrl: NavController, private salaService: SalaService) {
    this.salas = this.salaService.salas;
  }
   onEntrarClick(nome, sala){
    this.navCtrl.push('ChatPage', {
      nomeParam: nome,
      salaParam: sala
    })
  }
}
