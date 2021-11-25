import { View } from './view.js'

export class MensagemView extends View<string>{ 

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
