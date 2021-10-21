dedo2.setAttribute ("disabled", "true")


function avanzar() {
    var dedo = document.querySelector ("img");
    var dedo3 = document.getElementById("boton2")
    var imagen = dedo.getAttribute("src");

    if (imagen == "01.png") {
        dedo.setAttribute("src", "02.jpg")
    }
    if (imagen == "02.jpg") {
        dedo.setAttribute("src", "03.jpg")
    }
    if (imagen == "03.jpg") {
        dedo.setAttribute("src", "04.jpg")
    }
    if (imagen == "04.jpg") {
        dedo.setAttribute("src", "05.jpg")
        dedo3.setAttribute ("disabled", "true")
    }
}

function retroceder() {
    var dedo = document.querySelector ("img");
    var dedo2 = document.getElementById("boton1")
    var imagen = dedo.getAttribute("src");

    if (imagen == "01.png") {
        dedo2.setAttribute("disabled", "true")
    }

    if (imagen == "05.jpg") {
        dedo.setAttribute("src", "04.jpg")
    }
    if (imagen == "04.jpg") {
        dedo.setAttribute("src", "03.jpg")
    }
    if (imagen == "03.jpg") {
        dedo.setAttribute("src", "02.jpg")
    }
    if (imagen == "02.jpg") {
        dedo.setAttribute("src", "01.png")  
      
    }
}

