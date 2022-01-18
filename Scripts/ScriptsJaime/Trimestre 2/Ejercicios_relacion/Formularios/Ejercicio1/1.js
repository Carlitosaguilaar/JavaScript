
function copiar() {
    var dedo = document.getElementById("cajatexto1");
    var dedo2 = document.getElementById("cajatexto2");
    var texto = dedo.innerHTML;

    console.log ("El valor de texto es:"+texto)

    if (dedo.innerHTML!="") {

        dedo2.innerHTML = texto;
        
    }
} 