var timer;
var i=10;
function Carga(){
	var dedo2 = document.getElementById("4");
    dedo2.disabled=true;
    timer = setInterval("cambiocarga()", 250);
}

function cambiocarga(){
    
    var dedo = document.getElementById("3");
    var value = dedo.value+=10;
    
    if (value >= 100+i){
        var dedo2 = document.getElementById("4");
        dedo2.disabled=false;
        alert("Se ha terminado de cargar.");
        clearInterval(timer);
    }
}

function Descarga(){
    var dedo3 = document.getElementById("2");
    dedo3.disabled=true;
    timer = setInterval("cambiodescarga()", 250);
}

function cambiodescarga(){
	
	var dedo = document.getElementById("1");
    var value = dedo.value+=10;
    
    if (value >= 100+i) {
        var dedo3 = document.getElementById("2");
        dedo3.disabled=false;
        alert("Se ha terminado de descargar.");
        clearInterval(timer);
    }
}