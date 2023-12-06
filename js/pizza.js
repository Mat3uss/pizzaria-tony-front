'use strict'

const imagemPizza = localStorage.getItem('imagemPizza')
const nomePizza = localStorage.getItem('nomePizza')
const precoPizza = localStorage.getItem('precoPizza')
const like = document.getElementById('like')

const criarImagem = () => {
    
    
    const header = document.getElementById('header')
    header.style.backgroundImage = `url(../img/${imagemPizza}.webp)`

    document.getElementsByTagName('title')[0].innerText = nomePizza

    const nome = document.getElementById('pizza-name')
    const preco = document.getElementById('preco')

    nome.textContent = nomePizza
    preco.textContent = precoPizza

}

const darLike = () => {

    const img = like.children[0]

    if (img.src.includes('Off'))
        img.src = '../img/icons/LikeOn.svg'
    else if (img.src.includes('On'))
        img.src = '../img/icons/LikeOff.svg'

}

like.addEventListener('click', darLike)
window.addEventListener('load', criarImagem)