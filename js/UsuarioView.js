function exibirUsuarios(Usuarios){
var usuario = Usuarios[0];

/*
var eleCodigo = document.getElementById('codigo');
eleCodigo.innerHTML =usuario.codigo;
var eleNome = document.getElementById('nome');
eleNome.innerHTML =usuario.nome;
var eleLogin = document.getElementById('login');
eleLogin.innerHTML =usuario.login;
var eleEmail = document.getElementById('email');
eleEmail.innerHTML =usuario.email;
*/
popularTabela(Usuarios);
}

function popularTabela(Usuarios) {
    
    for(let i = 0; i < Usuarios.length; i++){
        inserirLinhaTabela(Usuarios[i]);
    }

}

function inserirLinhaTabela(usuario){

   var tabela = document.getElementById('tabelaUsuarios');
   var numLinhas =tabela.rows.length;
   var novaLinha = tabela.insertRow(numLinhas);

   var celCodigo = novaLinha.insertCell(0);
   celCodigo.innerHTML = usuario.codigo;

   var celNome = novaLinha.insertCell(1);
   celNome.innerHTML = usuario.nome;

   var celEmail = novaLinha.insertCell(2);
   celEmail.innerHTML = usuario.email;

   var celLogin = novaLinha.insertCell(3);
   celLogin.innerHTML = usuario.login;
   
   
}