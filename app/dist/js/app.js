import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
const botaoImportar = document.querySelector('#botao-importar');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        controller.adicionar();
    });
}
else {
    throw new Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
if (botaoImportar) {
    botaoImportar.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw new Error('Botão "importar" não foi encontrado.');
}
//# sourceMappingURL=app.js.map