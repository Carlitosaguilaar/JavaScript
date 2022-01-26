window.onload = function () {
    var campo = document.querySelectorAll("input[type='button']");
    campo[0].onclick = function (e) {
        e.preventDefault();
        convertir();
    };    
    campo[1].onclick = function (e) {
        e.preventDefault();
        convertir();
    };  
}

function convertir() {
    var campo = document.querySelectorAll("input[type='text']");
    campo[1].value=campo[0].value/0.83;
}