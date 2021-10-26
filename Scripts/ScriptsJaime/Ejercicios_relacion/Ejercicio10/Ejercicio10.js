function Color1() {
    var dedo = document.getElementById("div1")
    var dedo2 = document.querySelector("body")
    var estilos = window.getComputedStyle(dedo)
    var color = estilos.getPropertyValue("background-color")
    
    dedo2.style.setProperty("background-color", color);
}

function Color2() {
    var dedo = document.getElementById("div2")
    var dedo2 = document.querySelector("body")
    var estilos = window.getComputedStyle(dedo)
    var color = estilos.getPropertyValue("background-color")
    
    dedo2.style.setProperty("background-color", color);
}

function Color3() {
    var dedo = document.getElementById("div3")
    var dedo2 = document.querySelector("body")
    var estilos = window.getComputedStyle(dedo)
    var color = estilos.getPropertyValue("background-color")
    
    dedo2.style.setProperty("background-color", color);
}

function colorNeutral() {
    var dedo = document.querySelector("body")
    dedo.style.setProperty("background-color", "white");
}