function mostrar() {

    var dedo = document.getElementById("Caja")
    var texto = document.querySelector("span")
    if (dedo.style.display=="none") {
        dedo.style.display="block";
        texto.textContent="Ocultar"
    }
    else{
        dedo.style.display="none"
        texto.textContent="Mostrar"
    }
}