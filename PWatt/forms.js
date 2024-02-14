var inputEmail = document.getElementById("nome");
var inputSenha = document.getElementById("password");
const btn = document.getElementById("button");
let dados = [];

class Pessoa {
  constructor() {
    this.email = inputEmail.value;
    this.senha = inputSenha.value;
  }
}

function NovoUsuario() {
  if (inputEmail.value === "" || inputSenha.value === "") {
    alert("Preencha o cadastro");
  } else {
    const pessoa = new Pessoa();
    dados.push(pessoa);
    const json = JSON.stringify(dados);
    const objJson = JSON.parse(json);
    console.log(objJson);
    inputEmail.value = "";
    inputSenha.value = "";
  }
}

const PasswordView = () => {
  let eyeOpen = document.getElementById("eyeOpen");
  let eyeclosed = document.getElementById("eyeclosed");

  if (inputSenha.type === "password") {
    inputSenha.type = "text";
    eyeclosed.style.display = "none";
    eyeOpen.style.display = "block";
  } else if (inputSenha.type === "text") {
    inputSenha.type = "password";
    eyeclosed.style.display = "block";
    eyeOpen.style.display = "none";
  }
};
