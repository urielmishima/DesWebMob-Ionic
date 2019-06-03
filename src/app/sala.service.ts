import { Injectable } from "@angular/core";

@Injectable()
export class SalaService {
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
}