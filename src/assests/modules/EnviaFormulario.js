import ValidaNome from "./ValidaNome.js";
import ValidaCpf from "./ValidaCpf.js";
import ValidaEmail from "./ValidaEmail.js";
import ValidaUsuario from "./ValidaUsuario.js";
import ValidaSenha from "./ValidaSenha.js";
import Formulario from "./Formulario.js"

export default class EnviaFormulario {
  
  static enviar() {
    console.log(Formulario.nome);
    console.log(Formulario.nome);
    alert(Formulario.nome);
  }
}