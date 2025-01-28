"use strict"

const botaoTrocarImagem = document.getElementById('trocar-imagem');

const imagens = [
    './amorinha.jpg',
    './framboesa.jpg',
    './laranjinha.jpg',
    './limaozinha.jpg',
    './moranguinho-ameixinha.jpg'
];

function trocaCor() {
    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    
    document.documentElement.style.setProperty('--imagem-fundo', `url(${imagens[indiceAleatorio]})`);
}

botaoTrocarImagem.addEventListener('click', trocaCor);