// Nomes não podem conter números ou caracteres especiais
export default class ValidaNome {
  static validar(nome) {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Aceita letras (maiúsculas e minúsculas), acentuação e espaços
    return regex.test(nome);
  }
}
