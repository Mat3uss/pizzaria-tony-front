'use strict';

const botao = document.getElementById('criar-conta');
const input = document.getElementById('foto-perfil');

botao.addEventListener('click', () => {
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('password-confirmation').value;
    const telephone = document.getElementById('telephone').value;

    if (nome && email && password && passwordConfirmation && telephone) {
        if (password === passwordConfirmation) {
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('senha', password);
            localStorage.setItem('telephone', telephone);

            if (!localStorage.getItem('imagem')) {
                localStorage.setItem('imagem', '../img/icons/User.svg');
            }

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telephone').value = '';
            document.getElementById('password').value = '';
            document.getElementById('password-confirmation').value = '';

            alert('Conta criada com sucesso');
        } else {
            alert('Informe senhas iguais');
        }
    }
});

input.addEventListener('change', () => {
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', (e) => {
            const readerTarget = e.target;
            const imagem = document.getElementById('imagem-usuario');
            localStorage.setItem('imagem', readerTarget.result);
            imagem.style.backgroundImage = `url(${localStorage.getItem('imagem')})`;
            imagem.removeChild(imagem.children[0]);
        });

        reader.readAsDataURL(file);
    }
});
