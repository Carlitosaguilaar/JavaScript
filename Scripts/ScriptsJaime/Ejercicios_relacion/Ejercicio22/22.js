function cambios(){
    var padre = document.querySelector("div");
    var capa = document.createElement("div");
    capa.className = ("nuevo")
    padre.appendChild(capa)

    var imagen = document.querySelector("img");
    imagen.setAttribute("width", "10rem")
    imagen.setAttribute("height", "10rem")
}