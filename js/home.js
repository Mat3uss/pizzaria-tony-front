'use strict'

const selecionarPizza = () => {
    
    const pizzas = document.getElementsByClassName('pizza-favorita')
    
    for (let pizza of pizzas){
        
        pizza.addEventListener('click', () => {

            localStorage.setItem('imagemPizza', pizza.classList[1])
            localStorage.setItem('nomePizza', pizza.children[0].children[1].textContent)
            localStorage.setItem('precoPizza', pizza.children[0].children[0].textContent)

        })

    }
    
}

const montarUsuario = () => {
    
    let nomeUsuario = localStorage.getItem('nome')
    let imagem = localStorage.getItem('imagem')

    const foto = document.getElementById('foto-usuario')
    const nome = document.getElementById('nome-usuario')
    
    if(!nomeUsuario && !imagem){
        nomeUsuario = 'Celso'
        imagem = '../img/celso.webp'
        localStorage.setItem('nome', nomeUsuario)
        localStorage.setItem('imagem', imagem)
    }

    foto.src = imagem
    foto.alt = nome
    nome.textContent = `Bom dia, ${nomeUsuario}`

}

const bebidas = document.getElementById('bebidas')

bebidas.addEventListener('click', () => {

        window.location.href = '#bebidas'

})

window.addEventListener('load', montarUsuario)
window.addEventListener('load', selecionarPizza)