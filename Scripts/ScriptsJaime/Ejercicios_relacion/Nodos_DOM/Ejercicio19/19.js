function añadir() {
    var nuevo = document.createElement("p");
    var texto = prompt("Inserte una cadena de texto","");
    nuevo.align="center";
    var nodotexto = document.createTextNode(texto);
    nuevo.appendChild(nodotexto);
    var padre = document.querySelector("article");
    padre.appendChild(nuevo)
}