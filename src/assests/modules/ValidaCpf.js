import FormatarCpf from "./FormatarCpf.js"

export default class ValidaCpf {
  static CPF_LENGTH = 11;
  static FACTOR_FIRST_DIGIT = 10;
  static FACTOR_SECOND_DIGIT = 11;

  static #cpfOnlyNumbers(array) {
    return array.replace(/\D+/g, '');
  }

  static #computeDigit(array, factor) {
    let cpfNumbers = Array.from(array, Number);
    let total = cpfNumbers.reduce((acc, value) => {
      if (factor > 1) {
        acc += value * factor;
        factor--;
      }
      return acc;
    }, 0)

    const rest = total % 11;
    return rest < 2 ? 0 : 11 - rest;
  }

  getDigits(code) {
    let cpf = ValidaCpf.#cpfOnlyNumbers(code).slice(0, -2);
    let firstDigit = ValidaCpf.#computeDigit(cpf, ValidaCpf.FACTOR_FIRST_DIGIT);
    let secondDigit = ValidaCpf.#computeDigit(cpf + firstDigit, ValidaCpf.FACTOR_SECOND_DIGIT);

    return `${firstDigit}${secondDigit}`;
  }

  validar(cpf) {
    cpf = FormatarCpf.formatar(cpf);
    if (cpf.length !== 14) return false;
    console.log(cpf.getDigits(cpf) === cpf.slice(-2));
  }

}

ValidaCpf.validar("123.456.789-09")
ValidaCpf.validar("12345678909")
ValidaCpf.validar("47713926844")