window.onload = function(){
    var botones = document.querySelectorAll("input[type='button'"); //imagino q con button va

    botones[0].onclick = guardar;
    botones[1].onclick = limpiar;

    var salida = document.getElementById("salida");

    if (!localStorage.datos) { //si no se meten datos
        salida.textContent = "No hay datos almacenados..."
    }
    else{//si se han metido
        var objeto = JSON.parse(localStorage.datos) //lo desconvierto pa pode mostrarlo
        var texto = "<b>DATOS ALMACENADOS</b><br>";
        for (let ind in objeto) {
            //console.log(ind);
            texto += ind+": "+objeto[ind]+"<br>";
        }        
        salida.innerHTML = texto; // lo hago con inne rpq he usado etiquetas
    }
}

function guardar() { //importante bro, cuando le das a guardar te sale que esta guardao pero hasta que no actualices no se ve, el jaime lo tiene asi
    var campos = document.querySelectorAll("input[type='text'");

    var objetodatos = {
        nombre: campos[0].value,
        clave: campos[1].value
    }

    //console.log(objetodatos);
    //localStorage.datos = objetodatos;
    localStorage.datos = JSON.stringify(objetodatos); //siempre en localstorage guardarlo en formato json con .stringify si no guardo una cadena Object Object
    var salida = document.getElementById("salida");
    salida.textContent = "Datos guardados...";
}