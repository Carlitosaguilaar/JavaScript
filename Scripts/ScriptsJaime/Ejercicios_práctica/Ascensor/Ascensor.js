window.onload = function () {
    
    var numplantas = prompt("¿Cuantos pisos hay en el edificio?")    
    var dedo = document.querySelector("div")
    var nuevaplanta;
    dedo.appendChild(nuevaplanta)
    for (let i = 0; index <= numplantas; i++) {
        nuevaplanta = document.createElement("div")
        nuevaplanta.className = "planta";
        nuevaplanta.innerHTML = numplantas;
        numplantas--;        
    }      
    
}

