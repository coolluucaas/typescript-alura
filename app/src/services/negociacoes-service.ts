import { NegociacaoApiInterface } from '../interfaces/negociacaoApi.js'
import { Negociacao } from '../models/negociacao.js'

export class NegociacaoService {
    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then((res) => res.json())
            .then((dados: NegociacaoApiInterface[]) => {
                return dados.map((dado) => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante)
                })
            })
    }
}
