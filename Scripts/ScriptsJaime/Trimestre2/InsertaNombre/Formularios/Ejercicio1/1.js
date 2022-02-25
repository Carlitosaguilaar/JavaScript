window.onload = function () {
    var campo = document.querySelectorAll("input[type='button']");
    campo[0].onclick = function (e) {
        e.preventDefault();
        copiar();
    };    
}

function copiar() {
    var campo = document.querySelectorAll("input");
    if(campo[0].value!=""){
        campo[1].value=campo[0].value;
    }
}