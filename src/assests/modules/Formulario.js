export default class Formulario {
  static #nomeInput = document.querySelector('#inputNome');
  static #cpfInput = document.querySelector('#inputCpf');
  static #emailInput = document.querySelector('#inputEmail');
  static #usuarioInput = document.querySelector('#inputUsuario');
  static #senhaInput = document.querySelector('#inputSenha');

  static get nome() {
    return this.#nomeInput.value;
  }
  static get cpf() {
    return this.#cpfInput.value;
  }
  static get email() {
    return this.#emailInput.value;
  }
  static get usuario() {
    return this.#usuarioInput.value;
  }
  static get senha() {
    return this.#senhaInput.value;
  }

  static limpar() {
    this.#nomeInput.value = '';
    this.#cpfInput.value = '';
    this.#emailInput.value = '';
    this.#usuarioInput.value = '';
    this.#senhaInput.value = '';
  }

}