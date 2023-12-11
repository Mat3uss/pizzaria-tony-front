'use strict';

const imagemPizza = localStorage.getItem('imagemPizza');
const nomePizza = localStorage.getItem('nomePizza');
const precoPizza = localStorage.getItem('precoPizza');
const like = document.getElementById('like');

const criarImagem = () => {
    const header = document.getElementById('header');
    header.style.backgroundImage = `url(../img/${imagemPizza}.webp)`;

    document.title = nomePizza;

    document.getElementById('pizza-name').textContent = nomePizza;
    document.getElementById('preco').textContent = precoPizza;
};

const darLike = () => {
    const img = like.children[0];
    img.src = img.src.includes('Off') ? '../img/icons/LikeOn.svg' : '../img/icons/LikeOff.svg';
};

like.addEventListener('click', darLike);
window.addEventListener('load', criarImagem);
