function sumar() {
    var dedo = document.querySelector ("p");
    var numero = parseInt(dedo.innerHTML)
    dedo.textContent = parseInt(numero+1);
}

function restar() {
    var dedo = document.querySelector ("p");
    var numero = parseInt(dedo.innerHTML)
    dedo.textContent = parseInt(numero-1);
}