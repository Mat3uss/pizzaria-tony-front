'use strict';

// Obtenha as referências dos elementos uma vez no início para evitar repetição.
const icon = document.getElementById('imagem-usuario');
const nomeUsuario = document.getElementById('nome');
const emailElement = document.getElementById('email');
const telefoneElement = document.getElementById('telefone');
const input = document.getElementById('foto-perfil');
const botaoSair = document.getElementById('sair');

// Obtenha os dados do localStorage uma vez no início.
const imagem = localStorage.getItem('imagem');
const nome = localStorage.getItem('nome');
const emailCadastrado = localStorage.getItem('email');
const telefoneCadastrado = localStorage.getItem('telephone');

const montarPerfil = () => {
    icon.style.backgroundImage = `url(${imagem})`;
    nomeUsuario.textContent = nome;

    if (telefoneCadastrado) {
        telefoneElement.textContent = telefoneCadastrado;
    }

    emailElement.textContent = emailCadastrado;
};

input.addEventListener('change', () => {
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', (e) => {
            localStorage.setItem('imagem', e.target.result);
            icon.style.backgroundImage = `url(${localStorage.getItem('imagem')})`;
        });

        reader.readAsDataURL(file);
    }
});

botaoSair.addEventListener('click', () => {
    window.location.href = './login.html';
    localStorage.clear();
});

window.addEventListener('load', montarPerfil);
