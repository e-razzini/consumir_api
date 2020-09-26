
var url ="http://localhost:5000";


function getUsuario() {

    var data = new FormData();

    var xhr = new XMLHttpRequest();

     //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange",function(){

        if(this.readyState === 4){
            var usuarios = JSON.parse(this.responseText);
            // faça algo
            exibirUsuarios(usuarios);
        }
        
    });


xhr.open("GET",url);
xhr.send(data);

}

function adicionarUsuario(objUsuario){

    var xhr =new XMLHttpRequest();

    xhr.addEventListener("readystatechange",function(){
     if(this.readyState === 4){
         var usuario = JSON.parse(this.responseText);
        // alert("usuario adicionado");
         exibirUsuarios(usuarios);
     }

    });
xhr.open("POST",url);

xhr.send(JSON.stringify(objUsuario));

}
function editarUsuario(codigo,objUsuario) {
    
    let json = JSON.stringify(objUsuario);
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("PUT", url + '/codigo =' + codigo, true);
    
    xhr.setRequestHeader('content-type','application/json;charset=utf-8');
    xhr.onload = function () {
        
        var usuario = JSON.parse(xhr.responseText);
        if (this.readyState === 4 ) {
            
            exibirUsuarios(usuarios);
        } else {
            console.log("error");
        }
    }
    
    xhr.send(json);
}
function deletarUsuario(codigo) {
    
    var xhr = new XMLHttpRequest();

    xhr.open("DELETE", url + '/codigo=' + codigo, true);
    
    xhr.onload = function () {
        var usuario = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 ) {

            exibirUsuarios(usuarios);
        } else {
            console.log('erro');
        }
    }
    xhr.send(null);
}