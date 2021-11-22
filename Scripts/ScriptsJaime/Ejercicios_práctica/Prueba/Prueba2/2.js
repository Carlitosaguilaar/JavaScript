function crear() {
    var nuevo = document.createElement("p");
    var texto = prompt ("Inserta texto, payaso", "");
    nuevo.align="center";
    var nodotexto = document.createTextNode(texto);
    nuevo.appendChild(nodotexto);
    var padre = document.querySelector("article");
    padre.appendChild(nuevo)
    
}

function borrar() {
    var padre = document.querySelector("article");
    var elemento = document.getElementsByTagName("p");

    while (padre.firstChild) {
        padre.remove(padre.firstChild)
        
    }

    // padre.removeChild(elemento[0]);
    
}