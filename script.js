const elOpcoesImagem = document.querySelectorAll('[name="opcao-imagem"]');
const elOpcoesTamanho = document.querySelectorAll('[name="opcao-tamanho"]');
const elOpcoesCores = document.querySelectorAll('[name="opcao-cor"]');
const imagemVisualização = document.querySelector('#imagem-visualizacao');
const tituloProduto = document.querySelector('#titulo-produto');
const nomeCorSelecionada = document.querySelector('#nome-cor-selecionada');
const imagemMiniatura0 = document.getElementById('0-imagem-miniatura');
const imagemMiniatura1 = document.getElementById('1-imagem-miniatura');
const imagemMiniatura2 = document.getElementById('2-imagem-miniatura');

class CriarVarianteRelogio {
  constructor(nomeCor, pasta) {
    this.nome = nomeCor;
    this.pasta = pasta;
  }
}

const azulInverno = new CriarVarianteRelogio(
  'Azul-Inverno',
  'imagens-azul-inverno'
);
const estelar = new CriarVarianteRelogio('Estelar', 'imagens-estelar');
const meiaNoite = new CriarVarianteRelogio('Meia-Noite', 'imagens-meia-noite');
const rosaClaro = new CriarVarianteRelogio('Rosa-claro', 'imagens-rosa-claro');
const verdeCipreste = new CriarVarianteRelogio(
  'Verde-Cipreste',
  'imagens-verde-cipreste'
);

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41mm', '45mm'];

elOpcoesImagem.forEach(miniatura => {
  miniatura.addEventListener('click', trocarImagem);
});
elOpcoesTamanho.forEach(tamanho => {
  tamanho.addEventListener('click', trocarTamanho);
});
elOpcoesCores.forEach(cor => {
  cor.addEventListener('click', trocarCor);
});

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-imagem"]:checked'
  ).id;
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualização.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSelecionada}.jpeg`;
  trocarCor()
}

function trocarTamanho() {
  const idOpcaoTamanho = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  tamanhoSelecionado = idOpcaoTamanho.charAt(0);

  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;

  if (opcoesTamanho[tamanhoSelecionado] === '41mm') {
    imagemVisualização.classList.add('caixa-pequena');
  } else {
    imagemVisualização.classList.remove('caixa-pequena');
  }
}

function trocarCor() {
  const idOpcaoCor = document.querySelector('[name="opcao-cor"]:checked').id;
  corSelecionada = idOpcaoCor.charAt(0);

  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;

  nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;

  imagemVisualização.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;

  imagemMiniatura0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
  imagemMiniatura1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
  imagemMiniatura2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;
}
