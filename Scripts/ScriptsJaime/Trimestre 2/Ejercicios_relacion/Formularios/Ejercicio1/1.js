window.onload = function () {

    var campos = document.querySelectorAll("input[type='text']");

    var boton = document.querySelector("input[type='button']");

    boton.onclick = function (){

        campos[1].placeholder = campos[0].value;
    }
}