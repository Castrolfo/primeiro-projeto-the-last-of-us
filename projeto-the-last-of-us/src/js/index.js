// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
/* EXEMPLO: const botao1 = document.getElementById('botao1')
botao1.addEventListener('click', () => {
    console.log('clicou no botao 1')
})

const botao2 = document.getElementById('botao2')
botao1.addEventListener('click', () => {
    console.log('clicou no botao 2')})*/
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        console.log(indice);

        // passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        // passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // passao 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // passo 6 - fazer aparecer a imagem de fundo correspondente com o botão clicado
        imagens[indice].classList.add('ativa');
    })
});