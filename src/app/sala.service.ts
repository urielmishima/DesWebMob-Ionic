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
            nome: 'Cinema',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT',
                },
                texto: 'Bem-vindo a sala',
                data: Date.now(),
                reverseData: 0 - Date.now()
            }],
            usuarios: []
        },
        {
            nome: 'Curiosidades',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT',
                },
                texto: 'Bem-vindo a sala',
                data: Date.now(),
                reverseData: 0 - Date.now()
            }],
            usuarios: []
        },
        {
            nome: 'Esportes',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT'
                },
                texto: 'Bem-vindo a sala',
                data: Date.now(),
                reverseData: 0 - Date.now()
            }],
            usuarios: []
        }
    ]
    start(){
        for (const sala in this.salas) {
            if (this.salas.hasOwnProperty(sala)) {
                const element = this.salas[sala];
                this.db.list("/salas/").push(element);                
            }
        }
    }

    fetchSalas (){
        return this.db.list("/salas/");
    }

    addMensagem(usuario, texto, sala){
        this.db.list("/salas/" + sala.$key + "/mensagens/").push({
            usuario: {
                nome: usuario.nome,
                icone: usuario.icone
            },
            texto: texto,
            data: Date.now(),
            reverseData: 0 - Date.now()
        });
    }

    getMensagens(salaKey){
        return this.db.list("/salas/" + salaKey + "/mensagens/", {
            query: {
              orderByChild: 'reverseData'
            }
          });
    }

    addUsuario(usuario, sala){
        return this.db.list("/salas/" + sala.$key + "/usuarios/").push(usuario).key;
    }

    getUsuario(sala, usuarioNome){
        return this.db.list("/salas/" + sala.$key + "/usuarios/");
    }
    
    removeUsuario(usuarioKey, sala){
        this.db.object("/salas/" + sala.$key + "/usuarios/" + usuarioKey).remove()
            .then(
                x => console.log ("User deleted successfully")
            ).
            catch( error => {
                console.log ("Could not delete user");
                alert ("Could not delete user")
            });

    }

    
}