import { Negociacao } from '../models/negociacao.js'
import { Negociacoes } from '../models/negociacoes.js'

export class MensagemView {
    private elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    template(model: string): string {
        return `
        <p class='alert alert-info'>${model}</p>
        `
    }

    create(model: string): void {
        const mensagem = this.template(model)
        this.elemento.innerHTML = mensagem
    }
}
