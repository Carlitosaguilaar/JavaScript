function boton1(){

    var dedo = document.querySelector ("table");
    var altura = dedo.getAttribute("height");
    var anchura = dedo.getAttribute("width");
    alert ("El ancho es de "+anchura+" y la altura es de "+altura)

    var pregunta= prompt ("Quieres modificar el tamaño? S/N")
    
    if (pregunta == "N" || pregunta == "n") {
        alert ("Adioos, hasta prontoo!")
       
    }
    else if (pregunta == "S" || pregunta== "s"){
        do {
            newaltura = parseInt(prompt ("Dime la altura nueva que quieres poner. "));
            newanchura = parseInt(prompt ("Dime la anchura nueva que quieres poner. "));
            dedo.setAttribute("height", newaltura)
            dedo.setAttribute("width", newanchura)
            
        } while (confirm ("Quieres cambiarlo otra vez?"));   
    }
}

function boton2() {
    var dedo = document.querySelector ("table");
    var borde = dedo.getAttribute("border");
    alert ("El tamaño del borde es de "+borde)

    var pregunta= prompt ("Quieres modificar el tamaño? S/N")
    
    if (pregunta == "N" || pregunta == "n") {
        alert ("Adioos, hasta prontoo!")
       
    }
    else if (pregunta == "S" || pregunta== "s"){
        do {
            newborde = parseInt(prompt ("Dime el nuevo tamaño de borde que quieres poner. "));
            dedo.setAttribute("border", newborde)
            
        } while (confirm ("Quieres cambiarlo otra vez?"));   
    }
   
}

function boton3() { 
    var dedo = document.querySelector ("table");
    var alineacion = dedo.getAttribute("align");

    if (alineacion == "center") {
        dedo.setAttribute("align", "right")
    }
    if (alineacion == "right") {
        dedo.setAttribute("align", "left")
    }
    if (alineacion == "left") {
        dedo.setAttribute("align", "center")   
    }
}