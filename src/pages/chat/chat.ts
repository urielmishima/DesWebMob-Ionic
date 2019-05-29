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

  ionViewWillLeave(){
    const index = this.sala.usuarios.indexOf(this.nome, 0);
    this.sala.usuarios.splice(index, 1);
  }

  enviarMensagem(nome, texto){
    this.sala.mensagens.push({
      nome: nome,
      texto: texto
    })
  }

}
