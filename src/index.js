import EnviaFormulario from "./assests/modules/EnviaFormulario.js"
import ValidaNome from "./assests/modules/ValidaNome.js";
import ValidaCpf from "./assests/modules/ValidaCpf.js";
import ValidaEmail from "./assests/modules/ValidaEmail.js";
import ValidaUsuario from "./assests/modules/ValidaUsuario.js";
import ValidaSenha from "./assests/modules/ValidaSenha.js";

const inputNome = document.getElementById('inputNome');
const mensagemErroNome = document.getElementById('mensagemErroNome');
inputNome.addEventListener('blur', () => {
    if (!ValidaNome.validar(inputNome.value)) {
        mensagemErroNome.classList.remove('hidden');
        mensagemErroNome.classList.add('text-danger');
        inputNome.classList.add('form-error');
    } else {
        mensagemErroNome.classList.add('hidden');
        inputNome.classList.remove('form-error');
    }
});

const inputCpf = document.getElementById('inputCpf');
const mensagemErroCpf = document.getElementById('mensagemErroCpf');
inputCpf.addEventListener('blur', () => {
    if (!ValidaCpf.validar(inputCpf.value)) {
        mensagemErroCpf.classList.remove('hidden');
        mensagemErroCpf.classList.add('text-danger');
        inputCpf.classList.add('form-error');
    } else {
        mensagemErroCpf.classList.add('hidden');
        inputCpf.classList.remove('form-error');
    }
});

const inputEmail = document.getElementById('inputEmail');
const mensagemErroEmail = document.getElementById('mensagemErroEmail');
const mensagemEmail = document.getElementById('mensagemEmail');
inputEmail.addEventListener('blur', () => {
    if (!ValidaEmail.validar(inputEmail.value)) {
        mensagemErroEmail.classList.remove('hidden');
        mensagemErroEmail.classList.add('text-danger');
        inputEmail.classList.add('form-error');
        mensagemEmail.classList.add('hidden');
    } else {
        mensagemErroEmail.classList.add('hidden');
        inputEmail.classList.remove('form-error');
        mensagemEmail.classList.remove('hidden');
    }
});

const inputUsuario = document.getElementById('inputUsuario');
const mensagemErroUsuario = document.getElementById('mensagemErroUsuario');
inputUsuario.addEventListener('blur', () => {
    if (!ValidaUsuario.validar(inputUsuario.value)) {
        mensagemErroUsuario.classList.remove('hidden');
        mensagemErroUsuario.classList.add('text-danger');
        inputUsuario.classList.add('form-error');
    } else {
        mensagemErroUsuario.classList.add('hidden');
        inputUsuario.classList.remove('form-error');
    }
});

const inputSenha = document.getElementById('inputSenha');
const mensagemErroSenha = document.getElementById('mensagemErroSenha');
inputSenha.addEventListener('blur', () => {
    if (!ValidaSenha.validar(inputSenha.value)) {
        mensagemErroSenha.classList.remove('hidden');        
        mensagemErroSenha.classList.add('text-danger');
        inputSenha.classList.add('form-error');
    } else {
        mensagemErroSenha.classList.add('hidden');
        inputSenha.classList.remove('form-error');
    }
});


const subimitButton = document.querySelector('.realizar-cadastro');
subimitButton.addEventListener('click', (event) => {
  event.preventDefault();
  EnviaFormulario.enviar();
});