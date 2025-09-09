export default class Formulario {
  static get nome() {
    return document.querySelector('#inputNome').value;
  }

  static get cpf() {
    return document.querySelector('#inputCpf').value;
  }

  static get email() {
    return document.querySelector('#inputEmail').value;
  }

  static get usuario() {
    return document.querySelector('#inputUsuario').value;
  }

  static get senha() {
    return document.querySelector('#inputSenha').value;
  }
}