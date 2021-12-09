import { Imprimivel } from '../interfaces/imprimivel.js'
import { Negociacao } from './negociacao.js'

export class Negociacoes implements Imprimivel {
    private negociacoes: Negociacao[] = []

    public adicionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    public listar(): readonly Negociacao[] {
        return this.negociacoes
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2)
    }
}
