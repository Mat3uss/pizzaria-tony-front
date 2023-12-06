'use strict'

const botaoLogin = document.getElementById('botao')
const login = localStorage.getItem('login')

const verificarLogin = () => {

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let validacaoEmail = localStorage.getItem('email') 
    let validacaoSenha = localStorage.getItem('senha')
    
    if(!validacaoEmail && !validacaoSenha){
        validacaoEmail = 'celso@senai.com'
        validacaoSenha = 'java'
        localStorage.setItem('email', validacaoEmail)
        localStorage.setItem('senha', validacaoSenha)
    }
    
    if(email && senha){
        if(email == validacaoEmail && senha == validacaoSenha){
            localStorage.setItem('login', 'true')
            window.location.href = './home.html'
        }
        else
        alert('Email e/ou senha incorreto(s)')
    }
    
}

botaoLogin.addEventListener('click', verificarLogin)

window.addEventListener('load', () => {

    if(login == 'true'){

        console.log('opa')
        window.location.href = './home.html'

    }

})