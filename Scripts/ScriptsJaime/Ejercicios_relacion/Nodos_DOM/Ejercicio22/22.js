function cambios(){
    var padre = document.querySelector("div");
    var capa = document.createElement("div");
    capa.style.opacity = 0.7;
    capa.style.backgroundColor="Black";
    capa.onclick = hola ;


    var imagen = document.querySelector("img");
    imagen.setAttribute("width", "10rem")
    imagen.setAttribute("height", "10rem")
}



function salir() {
    var fondo = document.querySelector("div")
    var img = document.querySelector("img");

    var papi1 = fondo.parentNode;
    papi1.removeChild(fondo);

    img.parentNode.removeChild(img);
    
}