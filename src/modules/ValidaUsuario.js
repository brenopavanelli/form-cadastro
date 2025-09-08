// Deve conter de 3 a 12 caracteres, letras e/ou números, sem caracteres especiais
export default class ValidaUsuario {
  static validar(usuario) {
    const regex = /^[A-Za-z0-9]{3,12}$/; // Aceita letras e números, de 3 a 12 vezes
    return regex.test(usuario);
  }
}