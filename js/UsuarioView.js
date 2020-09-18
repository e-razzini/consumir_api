function exibirUsuarios(Usuarios){
var usuario = Usuarios[0];

var eleCodigo = document.getElementById('codigo');
eleCodigo.innerHTML =usuario.codigo;
var eleNome = document.getElementById('nome');
eleNome.innerHTML =usuario.nome;
var eleLogin = document.getElementById('login');
eleLogin.innerHTML =usuario.login;
var eleEmail = document.getElementById('email');
eleEmail.innerHTML =usuario.email;

}