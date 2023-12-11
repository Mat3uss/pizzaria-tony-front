'use strict';

const botaoVoltar = document.getElementById('voltar');

botaoVoltar.addEventListener('click', () => {
    window.history.back();
});
