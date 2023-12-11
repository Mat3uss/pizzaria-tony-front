'use strict';

const selecionarPizza = () => {
    const pizzas = document.getElementsByClassName('pizza-favorita');

    for (const pizza of pizzas) {
        pizza.addEventListener('click', () => {
            const nomePizza = pizza.querySelector('.nome-pizza').textContent;
            const precoPizza = pizza.querySelector('.preco-pizza').textContent;

            localStorage.setItem('imagemPizza', pizza.classList[1]);
            localStorage.setItem('nomePizza', nomePizza);
            localStorage.setItem('precoPizza', precoPizza);
        });
    }
};

const montarUsuario = () => {
    let nomeUsuario = localStorage.getItem('nome');
    let imagem = localStorage.getItem('imagem');

    const foto = document.getElementById('foto-usuario');
    const nome = document.getElementById('nome-usuario');

    if (!nomeUsuario && !imagem) {
        nomeUsuario = 'Celso';
        imagem = '../img/celso.webp';
        localStorage.setItem('nome', nomeUsuario);
        localStorage.setItem('imagem', imagem);
    }

    foto.src = imagem;
    foto.alt = nome;
    nome.textContent = `Bom dia, ${nomeUsuario}`;
};

const bebidas = document.getElementById('bebidas');

bebidas.addEventListener('click', () => {
    window.location.href = '#bebidas';
});

window.addEventListener('load', () => {
    montarUsuario();
    selecionarPizza();
});
