import ValidaNome from "./ValidaNome.js";
import ValidaCpf from "./ValidaCpf.js";
import ValidaEmail from "./ValidaEmail.js";
import ValidaUsuario from "./ValidaUsuario.js";
import ValidaSenha from "./ValidaSenha.js";
import Formulario from "./Formulario.js"

export default class EnviaFormulario {
  
  static enviar() {
    console.log(ValidaNome.validar(Formulario.nome));
    console.log(ValidaCpf.validar(Formulario.cpf));
    console.log(ValidaEmail.validar(Formulario.email));
    console.log(ValidaUsuario.validar(Formulario.usuario));
    console.log(ValidaSenha.validar(Formulario.senha));

    if (ValidaNome.validar(Formulario.nome) && ValidaCpf.validar(Formulario.cpf) && ValidaEmail.validar(Formulario.email) && ValidaUsuario.validar(Formulario.usuario) && ValidaSenha.validar(Formulario.senha))  {
      alert('Formulário enviado com sucesso!');
      Formulario.limpar();
    } else {
      alert('Erro ao enviar formulário!')
    }
  }
  
}