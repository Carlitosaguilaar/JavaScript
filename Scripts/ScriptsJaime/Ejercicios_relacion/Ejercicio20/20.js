function Generar() {
    var nuevo = document.createElement("p");
    var texto = prompt("Inserta cadena de texto", "")
    var nodotexto = document.createTextNode(texto);
    nuevo.appendChild(nodotexto);
    var padre = document.querySelector("article")
    nuevo.className="pn";
    padre.appendChild(nuevo);   
}

function Borrarviejo() {

    
}

function Borrarnuevo() {
    
}

function Sustituir() {
    
}