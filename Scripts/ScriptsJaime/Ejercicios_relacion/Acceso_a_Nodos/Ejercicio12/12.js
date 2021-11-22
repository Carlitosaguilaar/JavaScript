function left() {
    var dedo = document.getElementById("Caja")
    var estilo = window.getComputedStyle(dedo)
    var nuevo = parseInt(estilo.getPropertyValue("left"))
    nuevo-=5
    dedo.style.left= nuevo+"px";
    console.log(nuevo)
}

function right() {
    var dedo = document.getElementById("Caja")
    var estilo = window.getComputedStyle(dedo)
    var nuevo = parseInt(estilo.getPropertyValue("left"))
    nuevo+=5
    dedo.style.left= nuevo+"px";
    console.log(nuevo)
}