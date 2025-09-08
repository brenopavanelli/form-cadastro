// Senha deve conter de 6 a 12 caracteres
export default class ValidaSenha {
  static validar(senha) {
    const regex = /^.{6,12}$/; // Aceita qualquer caractere, de 6 a 12 vezes
    return regex.test(senha);
  }
}

