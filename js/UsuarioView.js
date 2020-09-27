function exibirUsuarios(Usuarios){
 
    popularTabela(Usuarios);
 
 }

function popularTabela(Usuarios) {
    
    for (let i = 0; i < Usuarios.length; i++) {
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
        
        var celButtonEdite = novaLinha.insertCell(4);
        celButtonEdite.innerHTML +='<button type="button"class="btn btn-secondary">Editar</button>';

        var celButtonDelete = novaLinha.insertCell(5);
        celButtonDelete.innerHTML += '<button type="button" class="btn btn-secondary">deletar</button>';
   
  }
function validarUsuario(acao){

    var nome  =document.getElementById('nome');
    var email =document.getElementById('email');
    var login =document.getElementById('login');
    var senha =document.getElementById('senha');
    var senhaValidar =document.getElementById('senhaValidar');

    if(acao == "add"){

    /*força o dado para  outro determinado dado
    var senhaInt =parseInt(senha.value);
    var senhaFloat =parseFloat(senha.value);
    */
    var dadosValidos = true;
    var senhaTxt = senha.value;
    if(nome.value == "" || email.value == "" || login.senha == "" ){

    dadosValidos=false;
    alert("email, nome ou login sem preencher");
    }

    if (senha.value == "" || senhaTxt.length < 6) {

    dadosValidos = false;
    alert("Senha esta vazia,no minimo 6 caracteres.");
    }
    if(senhaValidar.value != senha.value){

    dadosValidos=false;
    alert("senhas nao correspondem.");

    }

    if(dadosValidos){
    //ENVIAR PARA API
    var objUsuario = {
    "nome":nome.value,
    "email":email.value,
    "login":login.value,
    "senha":senha.value
    };
    alert("usuario enviado");
    //adiciona novo usuario
    //adicionarUsuario(objUsuario);
}

}
return false;
}
function editarUser(acao) {
    
  

}

    window.onload = function () {
        getUsuario();
    };
