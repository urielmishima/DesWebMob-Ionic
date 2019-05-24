import { Injectable } from "@angular/core";

@Injectable()
export class SalaService {
    salas = [
        {
            id: '1',
            nome: 'Cinema',
            mensagens: [],
            usuarios: []
        },
        {
            id: '2',
            nome: 'Curiosidades',
            mensagens: [],
            usuarios: []
        },
        {
            id: '3',
            nome: 'Esportes',
            mensagens: [],
            usuarios: []
        }
    ]

    nomeNaSala(nome, sala) {
        return this.salas[sala.id].usuarios.some(e => e.nome == nome)
    }
}