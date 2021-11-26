import { Negociacoes } from '../models/negociacoes.js'
import { View } from './view.js'
export class NegociacoesView extends View<Negociacoes>{

    protected template(model: Negociacoes): string {
        return `
        <table class='table table-hover table-bordered'>
            <thead>
                <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                </tr>
            </thead>
            <tbody>            
                ${
                    model.listar().map((negociacao) => {
                        return `
                    <tr>
                        <td>${this.converterData(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `
                    }).join('')
                }
            </tbody>
        </table>
        `
    }

    private converterData(data: Date): string {
        return new Intl.DateTimeFormat().format(data)
    }
}
