function newimg() {
    var dedo = document.querySelector("img")
    var imagen = dedo.getAttribute("src");

    if (imagen == "01.png") {
        dedo.setAttribute("src", "02.png")
    }
    
}

function baseimg() {
    var dedo = document.querySelector("img")
    var imagen = dedo.getAttribute("src");

    if (imagen == "02.png") {
        dedo.setAttribute("src", "01.png")
    }
}