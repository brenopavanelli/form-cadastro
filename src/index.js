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



const subimitButton = document.querySelector('.realizar-cadastro');
subimitButton.addEventListener('click', (event) => {
  event.preventDefault();
  EnviaFormulario.enviar();
});