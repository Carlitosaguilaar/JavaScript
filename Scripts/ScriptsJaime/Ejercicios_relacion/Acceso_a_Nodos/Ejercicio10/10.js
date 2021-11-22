function Color1() {
    var dedo = document.getElementById("div1")
    var estilos = window.getComputedStyle(dedo)
    var color = estilos.getPropertyValue("background-color")

    var dedo2 = document.querySelector("body")
    dedo2.style.setProperty("background-color", color);
}

function Color2() {
    var dedo = document.getElementById("div2")
    var estilos = window.getComputedStyle(dedo)
    var color = estilos.getPropertyValue("background-color") 
    var dedo2 = document.querySelector("body")
    dedo2.style.setProperty("background-color", color);
}

function Color3() {
    var dedo = document.getElementById("div3")
    var estilos = window.getComputedStyle(dedo)
    var color = estilos.getPropertyValue("background-color")  
    var dedo2 = document.querySelector("body")
    dedo2.style.setProperty("background-color", color);
}

function colorNeutral() {
    var dedo = document.querySelector("body")
    dedo.style.setProperty("background-color", "white");
}