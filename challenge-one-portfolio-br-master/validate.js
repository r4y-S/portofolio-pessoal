var usernomeValue = nome.value.trim();
var useremailValue = email.value.trim();
var userassuntoValue = assunto.value.trim();
var usermensagemValue = mensagem.value.trim();

function validar() {

  var nome = formulario.nome;
  if(nome.value == '') {
    alert("Nome não informado");

    nome.focus();
  }

  var email = formulario.email;
  if(email.value == '') {
    prompt("email não informado");
    email.focus();
  }

  var assunto = formulario.assunto;
  if(assunto.value == '') {
    prompt("assunto não informado");
    assunto.focus();
  }

  var mensagem = formulario.mensagem;
  if(mensagem.value == '') {
    prompt("mensagem não informado");
    mensagem.focus();
  }
}



