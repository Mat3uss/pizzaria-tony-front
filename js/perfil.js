'use strict'

const imagem = localStorage.getItem('imagem')
const nome = localStorage.getItem('nome')
const emailCadastrado = localStorage.getItem('email')
const telefoneCadastrado = localStorage.getItem('telephone')
const icon = document.getElementById('imagem-usuario')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const nomeUsuario = document.getElementById('nome')
const input = document.getElementById('foto-perfil')
const botaoSair = document.getElementById('sair')


const montarPerfil = () => {

    icon.style.backgroundImage = `url(${imagem})`
    nomeUsuario.textContent = nome

    if(telefoneCadastrado){
        telefone.textContent = telefoneCadastrado
    }
    
    email.textContent = emailCadastrado

}

input.addEventListener('change', () => {

    let file = input.files[0]
    
    if (file) {

        const reader = new FileReader();
    
        reader.addEventListener('load', (e) => {
            const readerTarget = e.target
            localStorage.setItem('imagem', readerTarget.result)
            icon.style.backgroundImage = `url(${localStorage.getItem('imagem')})`
        })
    
    reader.readAsDataURL(file);

    }

})

botaoSair.addEventListener('click', () => {
    window.location.href = './login.html'
    localStorage.clear()
})

window.addEventListener('load', montarPerfil)
