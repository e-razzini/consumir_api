
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
