import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  nome;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sala = this.navParams.get("salaParam")
    this.nome = this.navParams.get("nomeParam")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    console.log(this.sala)
  }

  enviarMensagem(nome, texto){
    this.sala.mensagens.push({
      nome: nome,
      texto: texto
    })
  }

}
