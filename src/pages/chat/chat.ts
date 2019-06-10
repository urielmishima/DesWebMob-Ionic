import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

import { SalaService } from '../../app/sala.service'
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  sala;
  usuario;
  mensagens;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, private salaService: SalaService) {
    this.sala = this.navParams.get("salaParam");
    this.usuario = this.navParams.get("usuarioParam");
    this.mensagens = this.salaService.getMensagens(this.sala.$key)
  }

  ionViewWillLeave(){
    this.salaService.removeUsuario(this.navParams.get("usuarioKey"), this.sala);
  }

}
