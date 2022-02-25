function Generar() {
    var nuevo = document.createElement("p");
    var texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptate quaerat neque laborum doloremque, accusantium aspernatur at quibusdam quidem praesentium voluptatum eveniet corrupti est facilis illo quam nostrum aliquam minima.";
    var nodotexto = document.createTextNode(texto);
    nuevo.appendChild(nodotexto);
    var padre = document.querySelector("article")
    nuevo.className="pnuevo";
    padre.appendChild(nuevo);
    var dedo1 = document.getElementsByTagName("input")[2];
    dedo1.disabled = false;

}




function Borrarviejo() {


    var dedo1 = document.getElementsByTagName("input")[1];
    var dedo2 = document.getElementsByTagName("input")[3];
    dedo1.disabled = true;
    dedo2.disabled = true;

    var padre = document.querySelector("article");
    var elemento = document.getElementsByTagName("p");
    padre.removeChild(elemento[0])

}





function Borrarnuevo() {
    var padre = document.getElementsByTagName("article");
    var elemento = document.getElementsByClassName("pnuevo");
        
    for (let i = 1; i <= elemento.length; i++){
        padre.remove(elemento[i]);
    }

}


function Sustituir() {
    var padre = document.querySelector("article");
    var elemento = document.getElementsByTagName("p");
    padre.removeChild(elemento[0])

    var tabla = document.createElement("table")
    for (let i=1; i<=2; i++){
        var fila = document.createElement("tr");
        for (let j = 1; j <= 2; j++){
        var celda = document.createElement("td");
        celda.innerHTML = " 1 ";
        fila.appendChild(celda);
        tabla.appendChild(fila);
        }
    }
    document.body.appendChild(tabla);
}