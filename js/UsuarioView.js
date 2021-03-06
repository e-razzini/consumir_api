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
        
        var btn_edit ='<button type="button"class="btn btn-secondary"  onClick ="editarUser(\''+usuario.codigo +'\',\''+usuario.nome +'\',\'' + usuario.email+'\',\''+usuario.login+'\')">Editar</button>';
        var btn_delet ='<button type="button" class="btn btn-secondary"  onClick ="deletarUsuario(\''+ usuario.codigo +'\')">deletar</button>';
        
        celButtonEdite.innerHTML = btn_edit + btn_delet;

   
  }
function validarUsuario() {
    
    var codigo =document.getElementById('codigo');
    var nome  =document.getElementById('nome');
    var email =document.getElementById('email');
    var login =document.getElementById('login');
    var senha =document.getElementById('senha');
    var senhaValidar =document.getElementById('senhaValidar');

   
    var dadosValidos = true;
    var senhaTxt = senha.value;
    

        if (nome.value == "" || email.value == "" || login.senha == "") {

            dadosValidos = false;
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
    
        if (dadosValidos) {
            //ENVIAR PARA API
            var objUsuario = {
                "codigo": codigo.value,
                "nome": nome.value,
                "email": email.value,
                "login": login.value,
                "senha": senha.value
            };
    
            if (codigo !== "") {
                editarUser(codigo, nome, email, login);                
            } else {
                adicionarUsuario(objUsuario);
            }

        }
    

return false;
}

function editarUser(codigoParam,nomeParam,emailParam,loginParam) {
    
    var codigo =document.getElementById('codigo');
    var nome  =document.getElementById('nome');
    var email =document.getElementById('email');
    var login =document.getElementById('login');
    var senha =document.getElementById('senha');

    nome.value = nomeParam;
    email.value =emailParam;
    login.value = loginParam;
    codigo.value = codigoParam;
     
    var objUsuario = {

        "codigo": codigo.value,
        "nome": nome.value,
        "email": email.value,
        "login": login.value,
        "senha": senha.value
    };

    editarUsuario(codigo,objUsuario);
}

function deleteUser(codigoPara) {

    var codigo = Document.getElementById('codigo');
    codigo.value = codigoPara;
  
    }

    window.onload = function () {
        getUsuario();
    };
