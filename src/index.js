// Ao clicar no botao de submit, o formulário não deve ser enviado caso haja algum campo inválido
// Exibir mensagens de erro abaixo dos campos inválidos
// Exibir confirmação de sucesso caso o formulário seja enviado com todos os campos válidos
// Exibir um alerta caso o formulário seja enviado com algum erro nos dados
import EnviaFormulario from "./assests/modules/EnviaFormulario.js"


const subimitButton = document.querySelector('.realizar-cadastro');

subimitButton.addEventListener('click', (event) => {
  event.preventDefault();
  EnviaFormulario.enviar();
});