/*
Ejemplo de uso:
	console.log('Descansando...');
  	sleep(2000);
  	console.log('Dos segundos despues');
*/
function sleep(milliseconds) {
 var start = new Date().getTime();
 for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds) {
   break;
  }
 }
}
//----------------------------------------------------------------------------------------

var numplantas = 0;
function empezar(){

    var dedo1 = document.querySelector("input")
    dedo1.disabled = true;
    var dedo2 = document.getElementsByTagName("input")[1];
    dedo2.disabled = true;

    numplantas = prompt ("Dime el número de plantas que hay en el edificio (entre 2 y 8)")   
    while (numplantas <= 1 || numplantas >= 9) {
        numplantas = prompt ("Dime el número de plantas que hay en el edificio (entre 2 y 8)")   
    }
    
    for (let i = numplantas; i > 0; i--) {
        var padre = document.getElementById("ascensor")
        var nuevaplanta = document.createElement("div")
        nuevaplanta.className = "planta"
        padre.appendChild(nuevaplanta)
        nuevaplanta.innerHTML = numplantas;
        numplantas--;
        if (i==1) {
            nuevaplanta.style.backgroundColor = "yellow";
            
        }
        
    }
    dedo1.disabled = false

    var laX = document.getElementsByTagName("span")[0]
    laX.innerHTML = "1";
    var estado = document.getElementsByTagName("span")[1]
    estado.innerHTML = "Parado"


}

function llamar() {
    document.getElementsByTagName("input")[0]
    var laX = document.getElementsByTagName("span")[0]
    var plantaactual = laX.innerHTML;
    do {
        var nuevaplanta = prompt ("A qué planta quieres ir?")
    } while (nuevaplanta < 1 || nuevaplanta >= 9);

    if (nuevaplanta > plantaactual){
        console.log("Subiendo desde la planta "+plantaactual+ " a la planta "+nuevaplanta)
        laX.innerHTML = nuevaplanta;
    }

    else if (nuevaplanta < plantaactual){
        console.log("Bajando desde la planta "+plantaactual+ " a la planta "+nuevaplanta)
        laX.innerHTML = nuevaplanta;
    }
    else{
        alert ("La nueva planta es la misma que la anterior")
        console.log("El ascensor no se ha movido")
    }

    for (let i = numplantas; i > 0; i--) {
        let newfloor = document.getElementsByTagName ("div")
        newfloor.backgroundColor="white";
        if (numplantas = plantaactual) {
            newfloor.style.backgroundColor="yellow";
        }
    }
}