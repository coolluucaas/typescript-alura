import { inspect } from '../decorators/inspect.js'
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js'
import { DiasDaSemana } from '../enums/dias-da-semana.js'
import { Negociacao } from '../models/negociacao.js'
import { Negociacoes } from '../models/negociacoes.js'
import { NegociacaoService } from '../services/negociacoes-service.js'
import { MensagemView } from '../views/mensagem-view.js'
import { NegociacoesView } from '../views/negociacoes-view.js'

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')
    private negociacaoService = new NegociacaoService()

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement
        this.inputQuantidade = document.querySelector(
            '#quantidade'
        ) as HTMLInputElement
        this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacoesView.update(this.negociacoes)
    }

    @inspect()
    @logarTempoDeExecucao()
    public adicionar(): void {
        const negociacao = Negociacao.Criar(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update(
                'Apenas negociações em dias úteis são aceitas.'
            )
            return
        }
        this.negociacoes.adicionar(negociacao)
        console.log(negociacao.paraTexto());
        console.log(this.negociacoes.paraTexto());
        this.limparFormulario()
        this.atualizarView()
    }

    importarDados(): void {
        this.negociacaoService.obterNegociacoes()
        .then((negociacoesApi) => {
            for (let negociacao of negociacoesApi) {
                this.negociacoes.adicionar(negociacao)
            }
            this.negociacoesView.update(this.negociacoes)
        })
    }

    private ehDiaUtil(data: Date): boolean {
        return (
            data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO
        )
    }

    private limparFormulario(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus
    }

    private atualizarView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação adicionada com sucesso!')
    }
}
