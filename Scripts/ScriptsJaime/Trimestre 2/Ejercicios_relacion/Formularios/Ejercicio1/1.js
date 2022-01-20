
function copiar() {
    var dedo = document.getElementById("cajatexto1");
    var dedo2 = document.getElementById("cajatexto2");

    dedo2.placeholder = dedo.innerHTML
    
    if (dedo.innerHTML!="") {
        dedo2.innerHTML = dedo.innerHTML;
        
    }
} 
