function avanzar() {
    var dedo = document.querySelector ("img");
    var dedoretroceder = document.getElementById("boton1")
    var dedoavanzar = document.getElementById("boton2")
    var imagen = dedo.getAttribute("src");
    dedoretroceder.disabled = false;

    if (imagen == "01.png") {
        dedo.setAttribute("src", "02.jpg")
    }
    else if (imagen == "02.jpg") {
        dedo.setAttribute("src", "03.jpg")
    }
    else if (imagen == "03.jpg") {
        dedo.setAttribute("src", "04.jpg")
    }
    else if (imagen == "04.jpg") {
        dedo.setAttribute("src", "05.jpg")
        dedoavanzar.disabled = true;
    }
}

function retroceder() {
    var dedo = document.querySelector ("img");
    var dedoretroceder = document.getElementById("boton1")
    var dedoavanzar = document.getElementById("boton2")
    var imagen = dedo.getAttribute("src");
    dedoavanzar.disabled = false;

    if (imagen == "05.jpg") {
        dedo.setAttribute("src", "04.jpg")
    }
    else if (imagen == "04.jpg") {
        dedo.setAttribute("src", "03.jpg")
    }
    else if (imagen == "03.jpg") {
        dedo.setAttribute("src", "02.jpg")
    }
    else if (imagen == "02.jpg") {
        dedo.setAttribute("src", "01.png")
        dedoretroceder.disabled = true;
    }
    else if (imagen == "01.png") {
    }
}

