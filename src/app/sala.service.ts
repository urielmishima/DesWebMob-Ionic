import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class SalaService {
    constructor(private db:AngularFireDatabase){

    }

    icones = [
        'logo-reddit',
        'logo-html5',
        'logo-javascript',
        'rainy',
        'power',
        'paw',
        'glasses',
        'refresh-circle',
        'return-left',
        'logo-python',
        'pizza'
    ];

    salas = [
        {
            id: '1',
            nome: 'Cinema',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT',
                },
                texto: 'Bem-vindo a sala'
            }],
            usuarios: []
        },
        {
            id: '2',
            nome: 'Curiosidades',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT',
                },
                texto: 'Bem-vindo a sala'
            }],
            usuarios: []
        },
        {
            id: '3',
            nome: 'Esportes',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT'
                },
                texto: 'Bem-vindo a sala'
            }],
            usuarios: []
        }
    ];

    nomeNaSala(nome, sala) {
        let a = this.salas[sala.id].usuarios.some(e => e.nome == nome);
        console.log(a)
        return a;
    }

    addMensagem(usuario, texto, sala){
        this.db.list("/salas/" + sala.$key + "/mensagens/").push({
            usuario: usuario,
            texto: texto
        });
    }

    addUsuario(usuario, sala){
        this.db.list("/salas/" + sala.$key + "/usuarios/").push(usuario);
    }

    
}