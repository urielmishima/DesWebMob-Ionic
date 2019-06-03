import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SalaService } from '../../app/sala.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private salaService: SalaService, public alertCtrl: AlertController) {
  }

  onEntrarClick(nome, sala, icone) {
    console.log("icone:", icone)    
    if (!this.salaService.nomeNaSala(nome, sala)) {
      sala = this.salaService.salas[sala.id];
      const usuario = {
        nome: nome,
        icone: icone
      }      
      sala.usuarios.push(usuario);
      this.navCtrl.push('ChatPage', {
        usuarioParam: usuario,
        salaParam: sala
      })
    }
    else {
      this.alertCtrl.create({
        title: 'Usuario já existente.',
        subTitle: 'O nome o usuario deve ser único.',
        buttons: ['OK']
      }).present()
    }
  }
}
