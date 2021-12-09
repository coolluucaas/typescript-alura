export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    public static Criar(
        inputData: string,
        inputQuantidade: string,
        inputValor: string
    ) {
        const exp = /-/g
        const date = new Date(inputData.replace(exp, ','))
        const quantidade = parseInt(inputQuantidade)
        const valor = parseFloat(inputValor)

        return new Negociacao(date, quantidade, valor)
    }

    get volume(): number {
        return this.quantidade * this.valor
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data
    }

    public paraTexto(): string {
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}
        `
    }    
}
