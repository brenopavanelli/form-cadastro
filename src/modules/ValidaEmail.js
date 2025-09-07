// Valida se o e-mail de entrada está em um formato válido
export default class ValidaEmail {
  static IsValid(email) {
    const regex = /^\S+@\S+\.\S+$/; // Formato básico de e-mail
    return regex.test(email);
  }
}

