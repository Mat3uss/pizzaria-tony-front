'use strict';

const botao = document.getElementById('criar-conta');
const input = document.getElementById('foto-perfil');

botao.addEventListener('click', () => {
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('password-confirmation').value;
    const telefone = document.getElementById('telephone').value;

    if (nome && email && password && passwordConfirmation && telefone) {
        if (password === passwordConfirmation) {
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('senha', password);
            localStorage.setItem('telefone', telefone);

            if (!localStorage.getItem('imagem')) {
                localStorage.setItem('imagem', '../img/icons/User.svg');
            }

            clearFormFields(['name', 'email', 'telephone', 'password', 'password-confirmation']);

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
            const imagem = document.getElementById('imagem-usuario');
            localStorage.setItem('imagem', e.target.result);
            imagem.style.backgroundImage = `url(${localStorage.getItem('imagem')})`;
            clearChildNodes(imagem);
        });

        reader.readAsDataURL(file);
    }
});

function clearFormFields(fields) {
    fields.forEach(field => {
        document.getElementById(field).value = '';
    });
}

function clearChildNodes(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
